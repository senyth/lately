import bcrypt from "bcryptjs";
import type { Request, Response } from "express";
import { z } from "zod";
import { User } from "../models/User";
import { clearAuthCookie, setAuthCookie } from "../utils/authCookie";

const registerSchema = z.object({
  name: z.string().trim().min(1).max(80),
  email: z.string().trim().toLowerCase().email(),
  password: z.string().min(8).max(128),
});

const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  password: z.string().min(1),
});

const toPublicUser = (u: { _id: unknown; name: string; email: string }) => ({
  _id: String(u._id),
  name: u.name,
  email: u.email,
});

const isDuplicateKey = (err: unknown) =>
  typeof err === "object" &&
  err !== null &&
  (err as { code?: number }).code === 11000;

export async function register(req: Request, res: Response) {
  const { name, email, password } = registerSchema.parse(req.body);
  const passwordHash = await bcrypt.hash(password, 12);

  try {
    const user = await User.create({ name, email, passwordHash });
    setAuthCookie(res, user.id);
    res.status(201).json(toPublicUser(user));
  } catch (err) {
    if (isDuplicateKey(err)) {
      return res.status(409).json({ message: "Email already in use" });
    }
    throw err;
  }
}

export async function login(req: Request, res: Response) {
  const { email, password } = loginSchema.parse(req.body);

  const user = await User.findOne({ email }).select("+passwordHash");
  const valid = user
    ? await bcrypt.compare(password, user.passwordHash)
    : false;

  if (!user || !valid) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  setAuthCookie(res, user.id);
  res.json(toPublicUser(user));
}

export function logout(_req: Request, res: Response) {
  clearAuthCookie(res);
  res.status(204).send();
}

export async function me(req: Request, res: Response) {
  const user = await User.findById(req.userId);
  if (!user) {
    clearAuthCookie(res);
    return res.status(401).json({ message: "Not authenticated" });
  }
  res.json(toPublicUser(user));
}

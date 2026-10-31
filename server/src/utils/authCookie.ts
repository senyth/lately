import jwt from "jsonwebtoken";
import type { CookieOptions, Response } from "express";
import { env } from "../config/env";

export const COOKIE_NAME = "token";
const isProd = env.NODE_ENV === "production";

const baseOptions: CookieOptions = {
  httpOnly: true,
  secure: isProd,
  sameSite: isProd ? "none" : "lax",
};

export function setAuthCookie(res: Response, userId: string) {
  const token = jwt.sign({ userId }, env.JWT_SECRET, { expiresIn: "7d" });
  res.cookie(COOKIE_NAME, token, {
    ...baseOptions,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
}

export function clearAuthCookie(res: Response) {
  res.clearCookie(COOKIE_NAME, baseOptions);
}

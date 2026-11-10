import { Types } from "mongoose";
import type { Request, Response } from "express";
import { z } from "zod";
import { Category, type CategoryLean } from "../models/Category";

const createCategorySchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(50, "Max 50 characters"),
});

const toPublicCategory = (c: CategoryLean) => ({
  _id: String(c._id),
  name: c.name,
  createdAt: c.createdAt,
});

const isDuplicateKey = (err: unknown) =>
  typeof err === "object" &&
  err !== null &&
  (err as { code?: number }).code === 11000;

export async function listCategories(req: Request, res: Response) {
  const categories = await Category.find({ userId: req.userId })
    .sort({ name: 1 })
    .lean<CategoryLean[]>();

  res.json(categories.map(toPublicCategory));
}

export async function createCategory(req: Request, res: Response) {
  const { name } = createCategorySchema.parse(req.body);

  try {
    const category = await Category.create({
      userId: new Types.ObjectId(req.userId),
      name,
    });
    res.status(201).json(toPublicCategory(category.toObject<CategoryLean>()));
  } catch (err) {
    if (isDuplicateKey(err)) {
      return res
        .status(409)
        .json({ message: "You already have a category with that name" });
    }
    throw err;
  }
}

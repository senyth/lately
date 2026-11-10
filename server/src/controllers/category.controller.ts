import type { Request, Response } from "express";
import { Category, type CategoryLean } from "../models/Category";

export async function listCategories(req: Request, res: Response) {
  const categories = await Category.find({ userId: req.userId })
    .sort({ name: 1 })
    .lean<CategoryLean[]>();

  res.json(
    categories.map((c) => ({
      _id: String(c._id),
      name: c.name,
      createdAt: c.createdAt,
    })),
  );
}

import { Types, isValidObjectId } from "mongoose";
import type { Request, Response } from "express";
import { z } from "zod";
import { Activity, type ActivityLean } from "../models/Activity";
import { Category } from "../models/Category";

const createActivitySchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(80, "Max 80 characters"),
  categoryId: z.string().refine(isValidObjectId, "Invalid category"),
});

const toPublicActivity = (a: ActivityLean) => ({
  _id: String(a._id),
  categoryId: String(a.categoryId),
  name: a.name,
  createdAt: a.createdAt,
});

const isDuplicateKey = (err: unknown) =>
  typeof err === "object" &&
  err !== null &&
  (err as { code?: number }).code === 11000;

export async function createActivity(req: Request, res: Response) {
  const { name, categoryId } = createActivitySchema.parse(req.body);

  const category = await Category.exists({
    _id: categoryId,
    userId: req.userId,
  });
  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }

  try {
    const activity = await Activity.create({
      userId: new Types.ObjectId(req.userId),
      categoryId: new Types.ObjectId(categoryId),
      name,
    });
    res.status(201).json(toPublicActivity(activity.toObject<ActivityLean>()));
  } catch (err) {
    if (isDuplicateKey(err)) {
      return res.status(409).json({
        message: "You already have an activity with that name in this category",
      });
    }
    throw err;
  }
}

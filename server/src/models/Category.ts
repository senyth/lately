import { Schema, model, type Types } from "mongoose";

export interface ICategory {
  userId: Types.ObjectId;
  name: string;
}

export type CategoryLean = ICategory & {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

const categorySchema = new Schema<ICategory>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    name: { type: String, required: true, trim: true, maxlength: 50 },
  },
  { timestamps: true },
);

categorySchema.index({ userId: 1, name: 1 }, { unique: true });

export const Category = model<ICategory>("Category", categorySchema);

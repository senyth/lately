import { Schema, model, type Types } from "mongoose";

export interface IActivity {
  userId: Types.ObjectId;
  categoryId: Types.ObjectId;
  name: string;
}

export type ActivityLean = IActivity & {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

const activitySchema = new Schema<IActivity>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
      index: true,
    },
    name: { type: String, required: true, trim: true, maxlength: 80 },
  },
  { timestamps: true },
);

// no duplicate activity names within the same category
activitySchema.index({ userId: 1, categoryId: 1, name: 1 }, { unique: true });

export const Activity = model<IActivity>("Activity", activitySchema);

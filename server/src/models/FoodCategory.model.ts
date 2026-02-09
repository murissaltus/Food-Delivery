import { Schema, model, models } from "mongoose";

export type FoodCategoryType = {
  categoryName: string;
  createdAt: Date;
  updatedAt: Date;
};

export const FoodCategorySchema = new Schema<FoodCategoryType>(
  {
    categoryName: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },

  { timestamps: true },
);

export const FoodCategoryModel =
  models.FoodCategory || model("FoodCategory", FoodCategorySchema);

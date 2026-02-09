import { Schema, model, models, Types } from "mongoose";
import { error } from "node:console";

export type FoodType = {
  foodname: string;
  price: number;
  image: string;
  ingredients: string;
  category: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

export const FoodSchema = new Schema<FoodType>(
  {
    foodname: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    ingredients: { type: String, required: true },
    category: {
      type: Schema.Types.ObjectId,
      ref: "FoodCategory",
      required: true,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

export const FoodModel = models.Food || model("Food", FoodSchema);

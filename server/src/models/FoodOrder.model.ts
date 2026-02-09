import { Schema, model, models, Types } from "mongoose";

export type FoodOrderItemType = {
  food: Types.ObjectId;
  quantity: number;
};

export type FoodOrderType = {
  user: Types.ObjectId;
  totalPrice: number;
  foodOrderItems: FoodOrderItemType[];
  status: string;
  createdAt: Date;
  updatedAt: Date;
};

export const FoodOrderItemSchema = new Schema<FoodOrderItemType>(
  {
    food: { type: Schema.Types.ObjectId, ref: "Food", required: true },
    quantity: { type: Number, required: true },
  },
  { _id: false },
);

export const FoodOrderSchema = new Schema<FoodOrderType>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    totalPrice: { type: Number, required: true },
    foodOrderItems: { type: [FoodOrderItemSchema], required: true },
    status: { type: String, default: "PENDING" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },

  { timestamps: true },
);

export const FoodOrderModel =
  models.FoodOrder || model("FoodOrder", FoodOrderSchema);

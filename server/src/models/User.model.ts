import { Schema, model, models, Types } from "mongoose";

export type UserType = {
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  role: "USER" | "ADMIN";
  orderedFoods: Types.ObjectId[];
  ttl: Date;
  isVerifiyed: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export const UserSchema = new Schema<UserType>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
    orderedFoods: [{ type: Schema.Types.ObjectId, ref: "FoodOrder" }],
    ttl: { type: Date },
    isVerifiyed: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const UserModel = models.User || model("User", UserSchema);

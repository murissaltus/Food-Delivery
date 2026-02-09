import { Request, Response } from "express";
import { UserModel } from "../../models/user.model";
import { hashPassword } from "../../utils/bcrypt";

export const signUp = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;
    const exists = await UserModel.findOne({ email });
    if (exists)
      return res.status(400).send({ message: "Email already exists" });
    const hashed = await hashPassword(password);
    const user = await UserModel.create({ email, password: hashed, name });
    res.status(201).send({ message: "Sign up successful", userId: user._id });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};

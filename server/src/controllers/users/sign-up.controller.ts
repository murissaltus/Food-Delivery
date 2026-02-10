import { Request, Response } from "express";
import { UserModel } from "../../models";
import { hashPassword } from "../../utils/bcrypt";
import "dotenv/config";
import express from "express";
import authRouter from "../../routers";

const app = express();
app.use(express.json());

export const signUp = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;
    const exists = await UserModel.findOne({ email });
    if (exists) return res.status(400).send({ message: "Email already" });

    const hashed = await hashPassword(password);
    const user = await UserModel.create({ email, password: hashed, name });

    res.status(201).send({ message: "Sign up successful", userId: user._id });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};

app.use("/auth", authRouter);
app.listen(8000, () => {
  console.log("Server running on port 8000");
});

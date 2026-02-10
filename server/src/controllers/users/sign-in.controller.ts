import { Request, Response } from "express";
import { UserModel } from "../../models";
import { comparePassword } from "../../utils/bcrypt";
import { signAccessToken, signRefreshToken } from "../../utils/jwt";

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) return res.status(400).send({ message: "Invalid credentials" });
    const match = await comparePassword(password, user.password);
    if (!match) return res.status(400).send({ message: "Invalid credentials" });

    const accessToken = signAccessToken({ id: user._id });
    const refreshToken = signRefreshToken({ id: user._id });

    res.send({ accessToken, refreshToken });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};

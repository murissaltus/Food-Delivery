import { Request, Response } from "express";
import { UserModel } from "../../models/user.model";
import { hashPassword } from "../../utils/bcrypt";

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { token, newPassword } = req.body;
    const user = await UserModel.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: new Date() },
    });
    if (!user) return res.status(400).send({ message: "Invalid token" });
    user.password = await hashPassword(newPassword);
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();
    res.send({ message: "Password reset successful" });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};

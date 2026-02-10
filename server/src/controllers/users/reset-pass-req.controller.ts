import { Request, Response } from "express";
import crypto from "crypto";
import { UserModel } from "../../models";
import { hashPassword } from "../../utils/bcrypt";
import { sendMail } from "../../utils/mail";

export const resetPasswordRequest = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(404).send({ message: "User not found" });
    const token = crypto.randomBytes(32).toString("hex");
    user.resetToken = token;
    user.resetTokenExpiry = new Date(Date.now() + 3600 * 1000);
    await user.save();
    await sendMail(
      email,
      "Reset Password",
      `<a href="http://localhost:3000/reset-password?token=${token}">
       Reset password
     </a>`,
    );
    res.send({ message: "Reset email sent" });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};

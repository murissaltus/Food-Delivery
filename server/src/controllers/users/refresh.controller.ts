import { Request, Response } from "express";
import { verifyRefreshToken, signAccessToken } from "../../utils/jwt";

export const refresh = async (req: Request, res: Response) => {
  try {
    const { refreshToken } = req.body;
    const payload: any = verifyRefreshToken(refreshToken);
    const accessToken = signAccessToken({ id: payload.id });
    res.send({ accessToken });
  } catch {
    res.status(401).send({ message: "Invalid refresh token" });
  }
};

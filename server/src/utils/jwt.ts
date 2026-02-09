import jwt from "jsonwebtoken";

const ACCESS_SECRET = process.env.ACCESS_SECRET!;

const REFRESH_SECRET = process.env.REFRESH_SECRET!;

export const signAccessToken = (payload: object) =>
  jwt.sign(payload, ACCESS_SECRET, { expiresIn: "1m" });

export const signRefreshToken = (payload: object) =>
  jwt.sign(payload, REFRESH_SECRET, { expiresIn: "1d" });

export const verifyRefreshToken = (token: string) =>
  jwt.verify(token, REFRESH_SECRET);

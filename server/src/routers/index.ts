import { Router } from "express";
import { signUp } from "../controllers";
import { signIn } from "../controllers";
import { refresh } from "../controllers";
import { resetPasswordRequest, resetPassword } from "../controllers";

export const authRouter = Router();

authRouter.post("/sign-up", signUp);
authRouter.post("/sign-in", signIn);
authRouter.post("/refresh", refresh);
authRouter.post("/reset-password-request", resetPasswordRequest);
authRouter.post("/reset-password", resetPassword);

export default authRouter;

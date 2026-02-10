import express from "express";
import authRouter from "./routers";

const app = express();
app.use(express.json());
app.use("/auth", authRouter);
app.listen(8000, () => {
  console.log("Server running on port 8000");
});

export * from "./refresh.controller";
export * from "./reset-pass-req.controller";
export * from "./reset-pass.controller";
export * from "./sign-in.controller";
export * from "./sign-up.controller";
export * from "./verify-res-pass-req.controller";

const app = express();
app.use(express.json());
app.use("/auth", authRouter);
app.listen(8000, () => {
  console.log("Server running on port 8000");
});

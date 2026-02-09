import mongoose from "mongoose";
import app from "./app";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING!).then(() => {
  app.listen(8000, () => console.log("Server running"));
});

import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
config();
import userRoute from "../routes/user.route.js";
import authRoute from "../routes/auth.route.js";

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("app is listen on port 3000");
});

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

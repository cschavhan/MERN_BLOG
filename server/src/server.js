import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.listen(3000, () => {
  console.log("app is listen on port 3000");
});

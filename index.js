import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import bookRouter from "./routes/bookRoute.js";

const app = express();
// app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/books", bookRouter);

app.listen(8000 || process.env.APP_PORT, async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
    console.log("Successfully connected to the Database.");
  } catch (error) {
    console.log("unable to connect", error);
  }
});

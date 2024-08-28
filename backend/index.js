import express from "express";
import dotenv from "dotenv/config";
import mongoose from "mongoose";
import { router } from "./routes/router.js";

const app = express();

const PORT = process.env.PORT;
const mongoDbUrl = process.env.MONGO_DB_URL;

app.use("/", router);

mongoose
  .connect(mongoDbUrl)
  .then(() => {
    console.log("Database connected!");

    app.listen(PORT, () => {
      console.log(`Server running at port ${PORT}`);
    });
  })
  .catch((error) => console.log("Error in database connection: " + error));

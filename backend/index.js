import express from "express";
import dotenv from "dotenv/config";
import mongoose from "mongoose";
import bookRoutes from "./routes/booksRoutes.js";
import cors from "cors";

const PORT = process.env.PORT;
const mongoDbUrl = process.env.MONGO_DB_URL;

const app = express();

app.use(express.json());

app.use("/books", bookRoutes);

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

mongoose
  .connect(mongoDbUrl)
  .then(() => {
    console.log("Database connected!");

    app.listen(PORT, () => {
      console.log(`Server running at port ${PORT}`);
    });
  })
  .catch((error) => console.log("Error in database connection: " + error));

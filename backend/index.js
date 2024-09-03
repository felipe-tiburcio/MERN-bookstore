import express from "express";
import dotenv from "dotenv/config";
import mongoose from "mongoose";
import bookRoutes from "./routes/booksRoutes.js";
import cors from "cors";

const PORT = process.env.PORT;
const mongoDbUrl = process.env.MONGO_DB_URL;

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use("/books", bookRoutes);

mongoose
  .connect(mongoDbUrl)
  .then(() => {
    console.log("Database connected!");

    app.listen(PORT, () => {
      console.log(`Server running at port ${PORT}`);
    });
  })
  .catch((error) => console.log("Error in database connection: " + error));

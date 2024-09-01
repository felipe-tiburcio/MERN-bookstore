import express from "express";

export const router = express.Router();

import { Book } from "../models/bookModel.js";

router.get("/", (req, res) => {
  return res.status(234).send("Hello Node with separated routes!");
});

router.post("/books", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message:
          "Please send all required fields: title, author and publish year.",
      });
    }

    const { title, author, publishYear } = req.body;

    const newBook = {
      title: title,
      author: author,
      publishYear: publishYear,
    };

    const book = await Book.create(newBook);

    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

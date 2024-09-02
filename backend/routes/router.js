import express from "express";

export const router = express.Router();

import { Book } from "../models/bookModel.js";

router.get("/books", async (req, res) => {
  try {
    const books = await Book.find();

    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);

    res.status(500).send({ message: error.message });
  }
});

router.get("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    res.status(200).json(book);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
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

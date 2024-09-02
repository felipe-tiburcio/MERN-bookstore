import express from "express";

const bookRoutes = express.Router();

import { Book } from "../models/bookModel.js";

bookRoutes.get("/", async (req, res) => {
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

bookRoutes.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    res.status(200).json(book);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

bookRoutes.post("/", async (req, res) => {
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

bookRoutes.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message:
          "Please send all required fields: title, author and publish year.",
      });
    }

    const { id } = req.params;

    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      res.status(404).json({ message: "Book not found" });
    }

    return res.status(200).send({ message: "Book updated" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

bookRoutes.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book deleted" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

export default bookRoutes;

import express from "express";

export const router = express.Router();

router.get("/", (req, res) => {
  console.log(req);

  return res.status(234).send("Hello Node with separated routes!");
});

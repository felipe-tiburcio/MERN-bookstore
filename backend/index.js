import express from "express";
import { PORT } from "./config.js";
import { router } from "./routes/router.js";

const app = express();

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

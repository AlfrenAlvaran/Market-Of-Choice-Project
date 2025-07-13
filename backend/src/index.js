import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import { env } from "./config/env.js";

const app = express();
const PORT = env.port || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(env.db)
  .then(() =>
    app.listen(PORT, "0.0.0.0", () => console.log("Connected on port", PORT))
  )
  .catch((e) => console.log("Error: ", e));

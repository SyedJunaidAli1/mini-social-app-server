import express from "express";
import cors from "cors";

import dotenv from "dotenv";

export const dotenvConfig = dotenv.config();

const app = express();

app.use(express.json());

console.log("FRONTEND:", process.env.FRONTEND_ENDPOINT);

app.use(
  cors({
    origin: process.env.FRONTEND_ENDPOINT,
    credentials: true,
  }),
);

import authRoutes from "./routes/authRoutes.js";
app.use("/api/auth", authRoutes);
import postRoutes from "./routes/postRoutes.js";

app.use("/api/posts", postRoutes);

export default app;

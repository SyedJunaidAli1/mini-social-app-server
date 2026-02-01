import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const FRONTEND_ENDPOINT = process.env.FRONTEND_ENDPOINT;

app.use(express.json());

app.use(
  cors({
    origin: FRONTEND_ENDPOINT,
    credentials: true,
  }),
);

import authRoutes from "./routes/authRoutes.js";
app.use("/api/auth", authRoutes);
import postRoutes from "./routes/postRoutes.js";

app.use("/api/posts", postRoutes);



export default app;

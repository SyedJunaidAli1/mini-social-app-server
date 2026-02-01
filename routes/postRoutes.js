import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  createPost,
  getPosts,
  likePost,
  commentPost,
} from "../controllers/postController.js";

const router = express.Router();

// PUBLIC
router.get("/", getPosts);

// PROTECTED
router.post("/", protect, createPost);
router.put("/:id/like", protect, likePost);
router.post("/:id/comment", protect, commentPost);

export default router;

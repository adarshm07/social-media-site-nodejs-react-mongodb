import express from "express";
const router = express.Router();
import { getPosts, createPosts } from "../controllers/posts.js";
import { verifyToken } from "../utils/verifyToken.js";

router.get("/", getPosts);
router.post("/create", verifyToken, createPosts);

export default router;

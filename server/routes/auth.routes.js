import express from "express";
const router = express.Router();

import { register, login } from "../controllers/auth.js";
import { verifyToken } from "../utils/verifyToken.js";

router.post("/register", register);
router.post("/login", login);
router.get("/verify", verifyToken);

export default router;

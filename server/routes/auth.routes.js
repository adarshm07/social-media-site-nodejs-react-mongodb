import express from "express";
const router = express.Router();

import { register, login, logout } from "../controllers/auth.js";
// import { verifyToken } from "../utils/verifyToken.js";

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
// router.get("/verify", verifyToken);

export default router;

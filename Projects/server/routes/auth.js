import express from "express";
const router = express.Router();
import { signup, login, logout, tokenRefresh } from "../controllers/auth.js";

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.get("/token", tokenRefresh);

export default router;

import express from "express";
const router = express.Router();
import multer from "multer";
import { signup, login, logout, tokenRefresh } from "../controllers/auth.js";

const upload = multer();

router.post("/signup", upload.single("profile_picture"), signup);
router.post("/login", login);
router.get("/logout", logout);
router.get("/token", tokenRefresh);

export default router;

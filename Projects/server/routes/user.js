import { Router } from "express";
import multer from "multer";
import { getUser, updateUser } from "../controllers/user.js";
import verifyID from "../middlewares/verifyID.js";

const router = Router();
const upload = multer();

router.get("/:id", verifyID, getUser);
router.put("/:id", verifyID, upload.single("profile_picture"), updateUser);

export default router;

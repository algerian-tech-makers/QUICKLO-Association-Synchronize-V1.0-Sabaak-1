import { Router } from "express";
import multer from "multer";
import {
  getAllJam3iya,
  getJam3iyaById,
  createJam3iya,
  updateJam3iya,
  followJam3iya,
  reviewJam3iya
} from "../controllers/jam3iyaController.js";
import { cleanJam3iyaData } from "../middlewares/cleanData.js";
import verifyID from "../middlewares/verifyID.js";

const router = Router();
const upload = multer();

router.get("/", getAllJam3iya);
router.get("/:id", verifyID, getJam3iyaById);
router.post("/", upload.single("logo"), cleanJam3iyaData, createJam3iya);
router.put(
  "/:id",
  verifyID,
  upload.single("logo"),
  cleanJam3iyaData,
  updateJam3iya
);

router.post("/follow/:id", verifyID, followJam3iya);
router.post("/:id/review", verifyID, reviewJam3iya)
export default router;

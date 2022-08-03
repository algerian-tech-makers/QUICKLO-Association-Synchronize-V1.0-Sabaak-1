import { Router } from "express";
import verifyID from "../middlewares/verifyID.js";
import { cleanActivityData } from "../middlewares/cleanData.js";
import {
  getAllJam3iyaActivities,
  getAllActivities,
  createActivity,
  getActivityById,
} from "../controllers/activityController.js";
const router = Router();

router.get("/jam3iya/:id", verifyID, getAllJam3iyaActivities);
router.get("/", getAllActivities);
router.get("/:activity", verifyID, getActivityById);
router.post("/jam3iya/:id", verifyID, cleanActivityData, createActivity);

export default router;

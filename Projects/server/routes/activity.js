import { Router } from "express";
import verifyID from "../middlewares/verifyID.js";
import {
  cleanActivityData,
  cleanDataDonation,
  cleanDataComments
} from "../middlewares/cleanData.js";
import {
  getAllJam3iyaActivities,
  getAllActivities,
  createActivity,
  getActivityById,
  donateActivity,
  commentOnActivity,
} from "../controllers/activityController.js";
const router = Router();

router.get("/jam3iya/:id", verifyID, getAllJam3iyaActivities);
router.get("/", getAllActivities);
router.get("/:activity", verifyID, getActivityById);
router.post("/jam3iya/:id", verifyID, cleanActivityData, createActivity);
router.post("/:id/donate", verifyID, cleanDataDonation, donateActivity);
router.post("/:id/comment", verifyID, cleanDataComments, commentOnActivity);
export default router;

import Activity from "../models/Activity.js";
import Jam3iya from "../models/Association.js";

const getAllJam3iyaActivities = async (req, res) => {
  try {
    const { activities } = await Jam3iya.findOne(
      { _id: req.params.id },
      { activities: 1, _id: 0 }
    );
    const activitiesCollection = await Activity.find({
      _id: { $in: activities },
    });
    return res.status(200).json({ success: true, data: activitiesCollection });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.find({});
    res.status(200).json({ success: true, data: activities });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getActivityById = async (req, res) => {
  try {
    const activity = await Activity.findOne({ _id: req.params.activity });
    if (activity) {
      return res.status(200).json({ success: true, data: activity });
    }
    res
      .status(404)
      .json({ success: false, message: "Activity can not be found!" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const createActivity = async (req, res) => {
  try {
    const newActivity = await Activity.create(req.cleanData);
    await Jam3iya.findOneAndUpdate(
      { _id: req.cleanData.jam3iya_id },
      { $push: { activities: newActivity._id } }
    );
    res.status(201).json({ success: true, data: newActivity });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const donateActivity = async (req, res) => {
  try {
    const activity = await Activity.findOneAndUpdate({ _id: req.params.id });
    await activity.donations.push(req.cleanData);
    res.status(201).json({ success: true, data: activity });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const commentOnActivity = async (req, res) => {
  try {
    const activity = await Activity.findOneAndUpdate({ _id: req.params.id });
    await activity.comments.push(req.cleanData);
    res.status(201).json({ success: true, data: activity });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export {
  getAllJam3iyaActivities,
  getAllActivities,
  createActivity,
  getActivityById,
  donateActivity,
  commentOnActivity,
};

import Jam3iya from "../models/Association.js";
import sharp from "sharp";
import fse from "fs-extra";
import path from "path";
const getAllJam3iya = async (req, res) => {
  try {
    const jam3iyat = await Jam3iya.find({}).sort({ createdAt: -1 });
    res.status(201).json({ success: true, data: jam3iyat });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getJam3iyaById = async (req, res) => {
  try {
    const jam3iya = await Jam3iya.findOne({ _id: req.params.id });
    if (jam3iya) {
      return res.status(201).json({ success: true, data: jam3iya });
    }
    res
      .status(404)
      .json({ success: false, message: "Jam3iya can not be found!" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getJam3iyaByFilter = async (req, res) => {
  const { categories, location, name } = req.query;

  const filter = {};
  categories && (filter.categories = { $in: categories });
  location && (filter.location = location);
  name && (filter["$text"] = { $search: name });

  let textFilter = {};
  name && (textFilter = { score: { $meta: "textScore" } });

  try {
    const jam3iya = await Jam3iya.find(filter, textFilter).sort(textFilter);
    if (jam3iya) {
      return res.status(201).json({ success: true, data: jam3iya });
    }
    res
      .status(404)
      .json({ success: false, message: "Jam3iya can not be found!" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const createJam3iya = async (req, res) => {
  if (req.file) {
    const fileName = `${Date.now()}.jpg`;
    await sharp(req.file.buffer)
      .resize(800, 800)
      .jpeg({ quality: 60 })
      .toFile(path.join("public", "uploads", fileName));
    req.cleanData.logo = fileName;
  }

  try {
    req.cleanData.owner_id = req.user_id;
    const newJam3iya = await Jam3iya.create(req.cleanData);
    res.status(200).json({ success: true, data: newJam3iya });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const updateJam3iya = async (req, res) => {
  if (req.file) {
    const fileName = `${Date.now()}.jpg`;
    await sharp(req.file.buffer)
      .resize(800, 800)
      .jpeg({ quality: 60 })
      .toFile(path.join("public", "uploads", fileName));
    req.cleanData.logo = fileName;
  }
  try {
    const updateJam3iya = await Jam3iya.findOneAndUpdate(
      { _id: req.params.id },
      req.cleanData
    );
    if (updateJam3iya.logo) {
      await fse.remove(path.join("public", "uploads", updateJam3iya.logo));
    }
    const updatedJam3iya = await Jam3iya.findOne({ _id: req.params.id });
    res.status(201).json({ success: true, data: updatedJam3iya });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const followJam3iya = async (req, res) => {
  try {
    const isFollwed = await Jam3iya.findOne({ _id: req.params.id });
    if (isFollwed.followers.includes(req.user_id)) {
      await Jam3iya.findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { followers: req.user_id } }
      );
      res
        .status(200)
        .json({ success: true, data: "Succefully unfollowed the Jam3iya" });
    }
    await Jam3iya.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { followers: req.user_id } }
    );
    res
      .status(200)
      .json({ success: true, data: "Succefully followed the Jam3iya" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const reviewJam3iya = async (req, res) => {
  try {
    const jam3iya = await Jam3iya.findOne({ _id: req.params.id });
    await jam3iya.reviews.push(req.cleanData);
    res.status(201).json({ success: true, data: jam3iya.reviews });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export {
  getAllJam3iya,
  getJam3iyaById,
  getJam3iyaByFilter,
  createJam3iya,
  updateJam3iya,
  followJam3iya,
  reviewJam3iya,
};

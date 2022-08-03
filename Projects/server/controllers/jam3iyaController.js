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
      {
        name: req.cleanData.name,
        categories: req.cleanData.categories,
        logo: req.cleanData.logo,
      }
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
export { getAllJam3iya, getJam3iyaById, createJam3iya, updateJam3iya };

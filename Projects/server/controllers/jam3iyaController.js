import Association from "../models/Association.js";
import sharp from "sharp";

const getAllJam3iya = async (req, res) => {
  try {
    const jam3iyat = await Association.find({}).sort({ createdAt: -1 });
    res.status(201).json({ success: true, data: jam3iyat });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getJam3iyaById = async (req, res) => {
  try {
    const jam3iya = await Association.findOne({ _id: req.params.id });
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

export const getJam3iyaByFilter = async (req, res) => {
  const { categories, location, name } = req.query;

  const filter = {};
  categories && (filter.categories = { $in: categories });
  location && (filter.location = location);
  name && (filter["$text"] = { $search: name });

  let textFilter = {};
  name && (textFilter = { score: { $meta: "textScore" } });

  try {
    const jam3iya = await Association.find(filter, textFilter).sort(textFilter);
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
    const newAssociation = await Association.create(req.cleanData)
    res.status(200).json({ success: true, data: newAssociation });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
export { getAllJam3iya, getJam3iyaById, createJam3iya };

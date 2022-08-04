import User from "../models/User.js";
import sharp from "sharp";
import jwt from "jsonwebtoken";

export const getUser = async (req, res) => {
  try {
    const {
      _id: id,
      username,
      email,
      birthday,
      role,
      location,
    } = await User.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: { id, username, email, birthday, role, location },
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateUser = async (req, res) => {
  if (req.file) {
    const fileName = `${Date.now()}.jpg`;
    await sharp(req.file.buffer)
      .resize(800, 800)
      .jpeg({ quality: 60 })
      .toFile(path.join("public", "uploads", fileName));
    req.body.profile_pic = fileName;
  }
  try {
    const verified = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET_KEY);
    if (req.params.id !== verified.id)
      return res.status(403).json({
        success: false,
        message: "permission denied",
      });

    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    const {
      _id: id,
      username,
      email,
      birthday,
      role,
      location,
    } = await User.findById(req.params.id);
    res.status(201).json({
      success: true,
      data: {
        id,
        username,
        email,
        birthday,
        role,
        location,
      },
    });
    if (user.logo) {
      await fse.remove(path.join("public", "uploads", user.profile_picture));
    }
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
};

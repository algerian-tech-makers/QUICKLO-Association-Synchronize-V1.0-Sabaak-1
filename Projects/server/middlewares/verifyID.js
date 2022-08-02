import mongoose from "mongoose";

const verifyID = (req, res, next) => {
  if (mongoose.Types.ObjectId.isValid(req.params.id)) return next();
  return res.status(400).json({ success: false, message: "BAD ID" });
};

export default verifyID;

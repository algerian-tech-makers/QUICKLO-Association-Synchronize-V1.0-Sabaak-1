import mongoose from "mongoose";

const verifyID = (req, res, next) => {
  for (let i = 0; i < Object.keys(req.params).length; i++) {
    if (!mongoose.Types.ObjectId.isValid(Object.values(req.params)[i]))
      return res.status(400).json({ success: false, message: "BAD ID" });
  }
  return next();
};

export default verifyID;

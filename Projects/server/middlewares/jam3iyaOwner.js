import Jam3iya from "../models/Association.js";
const verifyJam3iyaOwner = (req, res, next) => {
  const jam3iyaOwnerID = Jam3iya.findOne(
    { _id: req.params.id },
    { owner_id: 1, _id: 0 }
  );
  if (jam3iyaOwnerID !== req.user_id)
    return res.status(403).json({ success: false, message: "Non Authorized" });
  next();
};

export default verifyJam3iyaOwner;

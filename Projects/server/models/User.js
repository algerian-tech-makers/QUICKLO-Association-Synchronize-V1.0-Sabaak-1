import mongoose from "mongoose";
const COLLECTION_NAME = "users";
const DOCUMENT_NAME = "User";

const schema = new mongoose.Schema(
  {
    username: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    email: {
      type: mongoose.Schema.Types.String,
      required: true,
      unique: true,
    },
    birthday: {
      type: mongoose.Schema.Types.Date,
      required: true,
    },
    role: {
      type: mongoose.Schema.Types.String,
      enum: ["user", "owner"],
      default: "user",
      required: true,
    },
    localisation: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    pfp: {
      type: mongoose.Schema.Types.String,
    },
  },
  { timestamps: true }
);

export default mongoose.model(DOCUMENT_NAME, schema, COLLECTION_NAME);

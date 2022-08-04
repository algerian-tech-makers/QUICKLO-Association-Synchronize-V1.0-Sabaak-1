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
    password: {
      type: String,
      required: true,
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
    location: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    profile_picture: {
      type: mongoose.Schema.Types.String,
    },
  },
  { timestamps: true }
);

export default mongoose.model(DOCUMENT_NAME, schema, COLLECTION_NAME);

import mongoose from "mongoose";
const COLLECTION_NAME = "activities";
const DOCUMENT_NAME = "Activity";

const commentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const donationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const schema = new mongoose.Schema(
  {
    jam3iya_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    picture: String,
    comments: [commentSchema],
    donations: [donationSchema],
    categories: [String],
  },
  { timestamps: true }
);

export default mongoose.model(DOCUMENT_NAME, schema, COLLECTION_NAME);

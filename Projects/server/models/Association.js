import mongoose from "mongoose";
const COLLECTION_NAME = "jam3iya";
const DOCUMENT_NAME = "Jam3iya";

const reviewsSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    rating: {
      type: Number,
      enum: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    owner_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    description: String,
    activities: [mongoose.Schema.Types.ObjectId],
    logo: String,
    followers: [mongoose.Schema.Types.ObjectId],
    categories: [String],
    reviews: [reviewsSchema],
  },
  {
    timestamps: true,
  }
);
schema.index({ name: "text" });
export default mongoose.model(DOCUMENT_NAME, schema, COLLECTION_NAME);

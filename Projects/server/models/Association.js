import mongoose from "mongoose"
const COLLECTION_NAME = 'associations';
const DOCUMENT_NAME = 'Association';

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    activities: [mongoose.Schema.Types.ObjectId],
    logo: String,
    followed: [mongoose.Schema.Types.ObjectId],
    categories: [String],
  },
  {
    timestamps: true,
  }
);
schema.index({ name: "text" });
export default mongoose.model(DOCUMENT_NAME, schema, COLLECTION_NAME)
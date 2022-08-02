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
<<<<<<< HEAD
    },
    password: {
      type: String,
      required: true,
=======
>>>>>>> back/abdessamed/jam3iya_crud
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
<<<<<<< HEAD
    },
    profile_picture: {
      type: mongoose.Schema.Types.String,
    },
=======
    },
    pfp: {
      type: mongoose.Schema.Types.String,
    },
>>>>>>> back/abdessamed/jam3iya_crud
  },
  { timestamps: true }
);

export default mongoose.model(DOCUMENT_NAME, schema, COLLECTION_NAME);

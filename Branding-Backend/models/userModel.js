import { Schema } from "mongoose";
import mongoose from "mongoose";
const userSchema = Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    aboutMe: {
      type: String,
    },
    profileImg: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);

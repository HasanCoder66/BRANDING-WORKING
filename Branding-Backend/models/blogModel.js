import { Schema } from "mongoose";
import mongoose from "mongoose";
const blogSchema = Schema(
  {
    title: {
      type: String,
      required: true,
      min: 6,
    },
    category: {
      type: String,
      required : true
    },
    content: {
      type: String,
    },
    description: {
      type: String,
    },
    blogImgUrl: {
      type: String,
    //   required : true
    },
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);

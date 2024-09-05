import express from "express";
// import {verifyToken} from '../Utils/verifyToken.js'
import {
  createBlog,
  updateBlog
} from "../controllers/blogController.js";

const BlogRoute = express.Router();

BlogRoute.post("/create-blog", createBlog);
BlogRoute.put("/update-blog/:userId", updateBlog);

export default BlogRoute;

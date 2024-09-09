import express from "express";
// import {verifyToken} from '../Utils/verifyToken.js'
import {
  createBlog,
  updateBlog,
  deleteBlog,
  getSingleBlog,
  getAllBlogs,
  searchBlogs
} from "../controllers/blogController.js";

const BlogRoute = express.Router();

BlogRoute.post("/create-blog", createBlog);
BlogRoute.get("/getAll-blogs/find", getAllBlogs);
BlogRoute.put("/update-blog/:userId", updateBlog);
BlogRoute.delete("/delete-blog/:userId", deleteBlog);
BlogRoute.get("/getSingle-blog/:userId", getSingleBlog);
BlogRoute.get('/searchBlogs', searchBlogs)

export default BlogRoute;

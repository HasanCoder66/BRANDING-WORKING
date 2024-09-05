import express from "express";
// import {verifyToken} from '../Utils/verifyToken.js'
import {
  createBlog,
} from "../controllers/blogController.js";

const BlogRoute = express.Router();

BlogRoute.post("/create-blog", createBlog);

export default BlogRoute;

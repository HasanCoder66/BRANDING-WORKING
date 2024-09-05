import Blog from "../models/blogModel.js";
import { createError } from "../Utils/error.js";
// import { responseMessages } from "../constants/responseMessages.js";
// import { BADREQUEST } from "../constants/httpStatus.js";

// const { MISSING_FIELD_EMAIL, UN_AUTHORIZED_EMAIL } = responseMessages;

//create blog controller ===>
export const createBlog = async (req, res, next) => {
  try {
    // Creating a new blog post based on the input
    const newBlog = new Blog({
      title: req.body.title,
      description: req.body.description,
      content: req.body.content, // Assuming you're storing blog content
      category: req.body.category, // Optional: category field
      featuredImage: req.body.blogImgUrl,
      // author: req.body.author, // Optional: if you have an author field
      // publishDate: req.body.publishDate || Date.now(), // Optional: default to current date if not provided
      // tags: req.body.tags, // Optional: array of tags for the post
    });

    // Save the blog post to the database
    const savedBlog = await newBlog.save();

    // Send the response with the saved blog post
    res.status(201).json({
      status: "Success",
      message: "Blog post created successfully",
      data: savedBlog,
    });
  } catch (error) {
    // Catching any errors and sending a response
    next(createError(500, error.message));
  }
};



// updateBlog controller ===>
export const updateBlog = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const updateBlog = await Blog.findByIdAndUpdate(
      userId,
      { $set: req.body },
      { new: true }
    );

    if (!updateBlog) {
      return next(createError(404, "Blog not found"));
    }

    console.log(updateBlog)
    const { password, ...others } = updateBlog._doc;

    res.status(200).json({
      status: "success",
      message: "Blog Updated Successfully",
      data: others,
    });
  } catch (error) {
    next(createError(error.status || 500, error.message || "Server Error"));
  }
};


// deleteBlog controller ===>
export const deleteBlog = async (req, res, next) => {
  try {
    const userId = req.params.userId;

    const foundBlog = await Blog.findById(userId);
    if (!foundBlog) {
      res.status(404).json({
        status: "failed",
        message: "Blog Not Found in Database",
      });
    }

    const deleteBlog = await Blog.findByIdAndDelete(userId);
    console.log(deleteBlog);

    res.status(200).json({
      status: "success",
      message: "Blog Deleted Successfully",
    });
  } catch (error) {
    next(createError(error.status, error.message));
  }
};



export const getSingleBlog = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const getBlog = await Blog.findById(userId);

    const { ...others } = getBlog._doc;
    // console.log(getBlog)
    res.status(200).json({
      status: "Success",
      message: " Single Blog Found",
      data: others,
    });
  } catch (error) {
    next(createError(error.status, error.message));
  }
};



export const getAllBlogs = async (req, res, next) => {
  try {
    const getAllBlogs = await Blog.find();

    // console.log(getAllBlogs[0]);
    const allBlogsData = [];

    getAllBlogs.map((data) => {
      // console.log(data);
      const { ...others } = data._doc;
      allBlogsData.push(others);
    });
    // console.log(allBlogsData, "line no 128");
    res.status(200).json({
      status: "Success",
      message: " All Blogs Found",
      data: allBlogsData,
    });
  } catch (error) {
    next(createError(error.status, error.message));
  }
};




export const searchBlogs = async (req, res, next) => {
  const { title } = req.query;
  console.log(title)
  const queryObject = {};

  // Check if blogTitle is provided in the query
  if (title) {
    queryObject.title = { $regex: title, $options: "i" }; // Case-insensitive partial match for blogTitle
    console.log("Query Object:", queryObject); // Log the query object
  } else {
    // If no blogTitle is provided, return a 400 error
    return res.status(400).json({
      message: "No blog title provided",
      status: "failed",
    });
  }

  try {
    // Use the queryObject to find matching blogs in the database
    const searchResult = await Blog.find(queryObject).limit(40);

    console.log("Search Result:", searchResult);

    if (searchResult.length > 0) {
      // If blogs are found, return them
      res.status(200).json({
        message: "Blog(s) found",
        data: searchResult,
      });
    } else {
      // If no blogs are found, return a 404 response
      res.status(404).json({
        message: "Blog not found",
        status: "failed",
      });
    }
  } catch (error) {
    console.error("Error searching blogs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
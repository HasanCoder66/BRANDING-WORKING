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

// export const updateUserPassword = async (req, res, next) => {
//   try {
//     const userId = req.params.userId;
//     const { password, newPassword } = req.body;

//     const searchUser = await User.findById(userId);
//     if (!searchUser) {
//       return res.status(404).send({
//         status: "Failed",
//         message: "User Not Found",
//       });
//     }

//     if (password) {
//       // console.log(password, "====> req.body.password");
//       // console.log(searchUser.password, "====> DB password");

//       const isCorrect = await bcryptjs.compare(password, searchUser.password);
//       if (!isCorrect) {
//         return next(createError(400, "Current password doesn't match"));
//       } else {
//         const salt = await bcryptjs.genSalt(12);
//         const hashedNewPassword = await bcryptjs.hash(newPassword, salt);

//         const updatedUser = await User.findByIdAndUpdate(
//           userId,
//           { $set: { password: hashedNewPassword } },
//           { new: true }
//         );

//         res.status(200).json({
//           status: "success",
//           message: "User Password Updated Successfully",
//         });
//       }
//     } else {
//       return next(createError(400, "Password is required"));
//     }
//   } catch (error) {
//     next(createError(error.status || 500, error.message || "Server Error"));
//   }
// };

// export const deleteUser = async (req, res, next) => {
//   try {
//     const userId = req.params.userId;

//     const foundUser = await User.findById(userId);
//     if (!foundUser) {
//       res.status(404).json({
//         status: "failed",
//         message: "User Not Found in Database",
//       });
//     }

//     const deleteUser = await User.findByIdAndDelete(userId);
//     console.log(deleteUser);

//     res.status(200).json({
//       status: "success",
//       message: "User Deleted Successfully",
//     });
//   } catch (error) {
//     next(createError(error.status, error.message));
//   }
// };

// export const getUser = async (req, res, next) => {
//   try {
//     const userId = req.params.userId;
//     const getUser = await User.findById(userId);

//     const { password, ...others } = getUser._doc;
//     res.status(200).json({
//       status: "Success",
//       message: " Single User Found",
//       data: others,
//     });
//   } catch (error) {
//     next(createError(error.status, error.message));
//   }
// };

// export const getAllUsers = async (req, res, next) => {
//   try {
//     const getAllUser = await User.find();

//     // const { password, ...others } = getAllUser._doc;
//     // console.log(getAllUser[0]);
//     const allDataUsers = [];
//     // console.log(allDataUsers, "line no 167");

//     getAllUser.map((data) => {
//       // console.log(data);
//       const { password, ...others } = data._doc;
//       allDataUsers.push(others);
//     });
//     // console.log(allDataUsers, "line no 175");
//     res.status(200).json({
//       status: "Success",
//       message: " All Users Found",
//       data: allDataUsers,
//     });
//   } catch (error) {
//     next(createError(error.status, error.message));
//   }
// };

// export const sendEmailFunc = async (req, res, next) => {
//   try {
//     const toEmail = req.body.toEmail;
//     const name = req.body.name;
//     const subject = req.body.subject;
//     const text = req.body.text;

//     // Log to check if email is received in the request body
//     console.log("Email to send to:", toEmail);

//     if (!toEmail) {
//       throw createError(400, "Recipient email not provided");
//     }

//     let transporter = nodemailer.createTransport({
//       service: "Gmail",
//       secure: true,
//       port: 465,
//       auth: {
//         user: process.env.FOUNDER_EMAIL, // Sender's email address
//         pass: process.env.FOUNDER_PASS, // Sender's email password
//       },
//     });

//     let info = await transporter.sendMail({
//       from: process.env.FOUNDER_EMAIL, // Sender's email address
//       to: toEmail, // Receiver's email address
//       subject, // Email subject
//       text: ` Dear ${name} \n ${text}`, // Email body
//     });

//     console.log("Message sent: %s", info.messageId);
//     res.status(200).json({
//       status: "Success",
//       message: "Email Sent Successfully",
//     });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     next(createError(error.status || 500, error.message));
//   }
// };

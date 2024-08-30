import express from "express";
// import {verifyToken} from '../Utils/verifyToken.js'
import {
  register,
  login,
  updateUserPassword,
  deleteUser,
  getUser,
  updateUser,
  getAllUsers,
  sendEmailFunc,
} from "../controllers/userController.js";
const UserRoute = express.Router();

UserRoute.post("/register", register);
UserRoute.post("/login", login);
UserRoute.put("/updatePassword/:userId", updateUserPassword);
UserRoute.put("/update/:userId", updateUser);
UserRoute.get("/getUser/:userId", getUser);
UserRoute.get("/getAllUsers/find", getAllUsers);
UserRoute.delete("/delete/:userId", deleteUser);
UserRoute.post("/sendEmail", sendEmailFunc);

export default UserRoute;

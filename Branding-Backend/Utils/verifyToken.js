import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log("hello", token);
  if (!token) {
    return next(createError(401, "You are not authenticated!!"));
  }
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      return next(createError(403, "Invaild token!!"));
    }
    req.user = user;
    next();
  });
};

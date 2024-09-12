import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import UserRoute from "./routes/userRoute.js";
import BlogRoute from "./routes/blogRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5500;

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Database Connected");
    })
    .catch((error) => {
      throw error;
    });
};

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: "*",
    methods: ["POST", "GET", "PUT", "DELETE"],
  })
);
app.get("/", (req, res) => {
  res.send("Hello from Express on Vercel!");
});
app.use("/api/auth", UserRoute);
app.use("/api/blog", BlogRoute);

// app.use((err, req, res, next) => {
//   const errorStatus = err.status || 500;
//   const errorMessage = err.message || "Something went wrong!";
//   const errorStack = err.stack || "No stack trace available";

//   console.error("error stack", errorStack);
//   console.error("error Message", errorMessage);

//   return res.status(errorStatus).json({
//     status: errorStatus,
//     message: errorMessage,
//     stack: errorStack,
//   });
// });

app.listen(PORT, () => {
  connectDB();
  console.log(`Server listening on port ${PORT}`);
});




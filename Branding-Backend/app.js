import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import UserRoute from "./routes/userRoute.js";
import BlogRoute from "./routes/blogRoutes.js";
// import Stripe from 'stripe';

// mongodb+srv://techexpertjobfinders:S3AjilK4ubU7Al8Q@cluster0.ozqaljr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// const MONGO = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.oahrmzf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// const stripe = new Stripe(process.env.STRIPE);

dotenv.config();
const app = express();

//Port defined in env if in no one in .env then 5500 is executed.. ====>
// const PORT =  5000; //
const PORT = process.env.PORT || 5500; //
// console.log(PORT);

// Connect to MongoDB =====>
const connectDB = () => {
  mongoose
    // process.env.MONGO_URI
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Database Connected");
    })
    .catch((error) => {
      throw error;
    });
};

// Middlewares=====>>>>
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: "*",
    methods: ["POST", "GET", "PUT", "DELETE"],
  })
);

// middlewares =====>
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.use("/api/auth", UserRoute);
app.use("/api/blog", BlogRoute);
// app.use("/api/upload", uploadRoute);

//Error Middleware ====>
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  const errorStack = err.stack || "No stack trace available";

  console.error("error stack", errorStack);
  console.error("error Message", errorMessage);

  return res.status(errorStatus).json({
    status: errorStatus,
    message: errorMessage,
    stack: errorStack,
  });
});

// SERVER LISTENING ON THE PORT
app.listen(PORT, () => {
  connectDB();
  console.log(`Server listening on this ${PORT}`);
});

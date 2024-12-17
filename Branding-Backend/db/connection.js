import dotenv from "dotenv";
import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URI

dotenv.config();

export const connectDB = async () => {
    try {
      await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Database Connected Successfully");
    } catch (error) {
      console.error("Error connecting to the database:", error.message);
      process.exit(1); // Forcefully exit the application on failure
    }
  };
  

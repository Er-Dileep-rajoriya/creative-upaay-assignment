import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected To MongoDB..");
  } catch (err) {
    console.log("Error in Connecting to Database : ", err);
  }
};

export default connectToDB;

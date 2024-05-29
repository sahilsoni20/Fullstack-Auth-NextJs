import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectDB() {

  const MONGO_URI = process.env.MONGO_URI;

  try {
    await mongoose.connection(MONGO_URI);
    const connection = mongoose.connection;

    connection.on("Connected", () => {
        console.log("MongoDB connected successfully.");
    });

    connection.on("Error", (error) => {
        console.log("Error while fecthing data from MongoDB:", error);
    });

    connect.on("Disconnected", () => {
        console.log("MongoDB disconnected");
    });

  } catch (error) {
    console.log("Error in connecting with MongoDB:", error);
  }
}

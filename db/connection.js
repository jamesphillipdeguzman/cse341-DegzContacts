// const mongoose = require('mongoose');
// Connects to MongoDB using Mongoose
import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Database connected...!");
};

// module.exports = connectDB;
export default connectDB;

// const express = require('express');
// const connectDB = require('./DB/connection');

// Entry point for starting the server and connecting to the database.

import connectDB from "./db/connection.js";
import { app, PORT } from "./app.js";
import dotenv from "dotenv";

// Load environment variables from .env file
// dotenv.config() is used to load environment variables from a .env file into process.env
dotenv.config();

const startServer = async () => {
  try {
    await connectDB();
    // Listen on all interfaces - 0.0.0.0
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}...!`);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1); // Exit with failure
  }
};
// Start the server
startServer();

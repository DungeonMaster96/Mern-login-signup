const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mydatabase");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Failed while connecting to MongoDB");
  }
};

module.exports = connectDB;

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config;
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;

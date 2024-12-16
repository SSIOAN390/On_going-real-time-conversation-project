import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("error connecting to MOngoBd", error.message);
  }
};
export default connectToDB;

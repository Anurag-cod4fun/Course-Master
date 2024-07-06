import mongoose from "mongoose";

export const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Database: ✅"))
    .catch((err) => console.error("❌❌Error connecting to MongoDB:", err));
};
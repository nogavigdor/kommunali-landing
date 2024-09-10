import mongoose from "mongoose";

export default async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/your-database-name",
      {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

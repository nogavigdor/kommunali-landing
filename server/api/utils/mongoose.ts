import mongoose from "mongoose";

export default async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(
      //"mongodb+srv://<username>:<password>@cluster0.mongodb.net/myFirstDatabase",
      "mongodb+srv://nogavigdor:<Venus999@12>@cluster0.7ozz4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
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

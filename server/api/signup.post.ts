import { defineEventHandler, readBody } from "h3";
import mongoose from "mongoose";

// MongoDB connection
mongoose.connect(
  "mongodb+srv://nogavigdor:<Venus999@12>@cluster0.7ozz4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

// Signup Schema
const SignupSchema = new mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  signUpDate: { type: Date, default: Date.now },
});

const Signup = mongoose.model("Signup", SignupSchema);

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, name } = body;

  // Validate email
  if (!email) {
    return {
      statusCode: 400,
      message: "Email is required",
    };
  }

  try {
    const newSignup = new Signup({ email, name });
    await newSignup.save();
    return { message: "The signup was successful" };
  } catch (error) {
    return {
      statusCode: 500,
      message: "A failed to signup occurred",
    };
  }
});

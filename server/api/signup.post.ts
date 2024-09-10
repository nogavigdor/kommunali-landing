import { defineEventHandler, readBody } from "h3";
import mongoose from "mongoose";

// Ensure MongoDB connection is made once
if (mongoose.connection.readyState === 0) {
  console.log("MongoDB URI:", process.env.MONGO_URI);
  mongoose.connect(
 

    process.env.MONGO_URI || "mongodb://localhost:27017/h3",
    {
      //useNewUrlParser: true,
     // useUnifiedTopology: true,
    }
  );
}

// Signup Schema
const SignupSchema = new mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  signUpDate: { type: Date, default: Date.now },
});

// Model definition
const Signup = mongoose.models.Signup || mongoose.model("Signup", SignupSchema);

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
    // Check if the error is an instance of Error
    if (error instanceof Error) {
      console.error("Error during signup:", error.message); // Log the error message for debugging

      let message = "A failed to signup occurred";

      // Check for MongoDB unique constraint errors (e.g., duplicate emails)
      if (error.message.includes("E11000")) {
        message = "Email already exists";
      }

      return {
        statusCode: 500,
        message,
      };
    } else {
      // Handle other types of errors that are not instances of Error
      return {
        statusCode: 500,
        message: "An unknown error occurred",
      };
    }
  }
});


import { connectDB } from "@/database/database";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";

connectDB();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { username, password, email, fullname } = reqBody;
    console.log("Request body:", reqBody);

    // Check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create a new user
    const newUser = new User({
      username,
      fullname,
      email,
      password: hashedPassword,
    });

    // Saving the new user
    const savedUser = await newUser.save();
    console.log("Saved user:", savedUser);

    // Return success response
    return NextResponse.json({ message: "User created successfully" }, { status: 201 });
  } catch (error) {
    console.log("Error in creating user:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

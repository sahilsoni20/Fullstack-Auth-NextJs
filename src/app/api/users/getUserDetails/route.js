import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextResponse } from "next/server";
import User from "@/models/userModel";
import { connectDB } from "@/database/database";

connectDB();

export async function GET(request) {
  try {
    const userId = await getDataFromToken(request);

    // Log the retrieved userId
    console.log("Retrieved userId:", userId);

    if (!userId) {
      throw new Error("Invalid token or userId not found");
    }

    // Log before querying the database
    console.log("Querying database for user with ID:", userId);

    const user = await User.findOne({ _id: userId }).select("-password");

    // Log the result of the database query
    console.log("Database query result:", user);

    if (!user) {
      return NextResponse.json({ message: "User not found", data: null });
    }

    return NextResponse.json({ message: "User found", data: user });
  } catch (error) {
    console.error("Error fetching user details:", error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

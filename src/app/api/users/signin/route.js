import { connectDB } from "@/database/database";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import dotenv from "dotenv";

dotenv.config();
connectDB();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { email, password, username } = reqBody;
        console.log("Request Body:", reqBody);

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            console.error("User doesn't exist");
            return NextResponse.json({ error: "User doesn't exist" }, { status: 400 });
        }
        console.log("User exists");

        // Check if username exists
        const userName = await User.findOne({ username });
        if (!userName) {
            console.error("Username doesn't exist");
            return NextResponse.json({ error: "Username doesn't exist" }, { status: 400 });
        }
        console.log("Username exists");

        // Check if the password is correct
        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            console.error("Password invalid!");
            return NextResponse.json({ error: "Password invalid!" }, { status: 400 });
        }
        console.log("Password is correct");

        // Create a token
        const tokenData = {
            _id: user.id,
            username: user.username,
            email: user.email,
        };

        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, {
            expiresIn: "1d",
        });

        const response = NextResponse.json({ message: "Login successful.", success: true });
        response.cookies.set("token", token, { httpOnly: true });
        return response;

    } catch (error) {
        console.error("Error in login:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

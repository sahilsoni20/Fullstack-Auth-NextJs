import { connectDB } from "@/database/database";
import User from "@/models/userModel";
import bcyrptjs from "bcryptjs"
import { NextResponse } from "next/server";
import toast from "react-hot-toast";

connectDB();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        
    } catch (error) {
        console.log("Error in creating user:", error);
        return NextResponse.json({error: error.message}, {status:500});
    }
}
//NOTE:- file structure for this file look like this api(folder) -> auth(folder) -> [...nextauth](folder) -> route.js [due to [...nextauth] i cant push this path into github 
//and make sure of google client Authorised redirect URIs
//For use with requests from a web server
//URIs 1 looks like
//http://localhost:3000/api/auth/callback/google


import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/userModel";
import dotenv from "dotenv";
import { connectDB } from "@/database/database";

dotenv.config();
connectDB();

const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ profile, url }) {
      try {
        const email = profile.email;
        console.log("Signing in with email:", email);
  
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
          console.log("User not found, creating new user...");
          await User.create({
            email,
            username: profile.name,
            password: null, // Google users won't have a password
          });
        } else {
          console.log("User found:", existingUser);
        }
  
        // Redirect to the profile page if the 'url' parameter is provided and points to a valid route
        if (url && url.startsWith("/")) {
          console.log("Redirecting to:", url);
          return url;
        } else {
          console.log("Redirecting to default profile page");
          return "/profile"; // Redirect to the profile page by default
        }
      } catch (error) {
        console.error("Error signing in:", error);
        return false;
      }
    },
  }
}
// Create the NextAuth handler
const handler = NextAuth(authOptions);

// Explicitly export each HTTP method
export const GET = handler;
export const POST = handler;

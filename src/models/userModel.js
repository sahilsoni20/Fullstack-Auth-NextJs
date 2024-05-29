import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    fullname: {
        type: String,
        required: [true, "Full name is required"],
        unique: false
    },
    isVerified: {
        type: Boolean, 
        default: false
    },
    role: {
        type: Boolean,
        default: false
    },
    verifyToken: String,
    verifyTokenExpiry: Date,
    forgotPassword: String,
    forgotPasswordTokenExpiry: Date
});

const User = moongose.model.User || mongoose.model("User", userSchema);

export default User;

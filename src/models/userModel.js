import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  fullname: {
    type: String,
    required: [true, "Full name is required"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  role: {
    type: Boolean,
    default: false,
  },
  verifyToken: String,
  verifyTokenExpiry: Date,
  forgotPassword: String,
  forgotPasswordTokenExpiry: Date,
});

// Use a conditional check to avoid OverwriteModelError
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;

import User from "../models/userModel.js";
import bcrypt from "bcryptjs";


//Register a new user

export const registerUser = async (userData) => {
  const { username, email, password } = userData;

  // Check if email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("Email already in use");
  }

  // Create and save user (password is hashed in the model)
  const newUser = new User({ username, email, password });
  return await newUser.save();
};


// Authenticate user (Login)
 
export const authenticateUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found")
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Incorrect password")
  };

  return user;
};


// Get user by ID
 
export const getUserById = async (id) => {
  return await User.findById(id).select("-password");
};


// Get all users (Optional: Admin Feature)
 
export const getAllUsers = async () => {
  return await User.find().select("-password"); 
};

// Update user profile
export const updateUser = async (id, updateData) => {
  if (updateData.password) {
    updateData.password = await bcrypt.hash(updateData.password, 10);
  }
  return await User.findByIdAndUpdate(id, updateData, { new: true }).select("-password");
};

// Delete user

export const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

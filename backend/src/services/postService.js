import Post from "../models/postModel.js";

export const createPost = async (postData) => {
  const post = new Post(postData);
  return await post.save();
};

export const getAllPosts = async () => {
  return await Post.find().populate("author", "username");
};

export const getPostById = async (id) => {
  return await Post.findById(id).populate("author", "username").populate("comments");
};

export const updatePost = async (id, updateData) => {
  return await Post.findByIdAndUpdate(id, updateData, { new: true });
};

export const deletePost = async (id) => {
  return await Post.findByIdAndDelete(id);
};

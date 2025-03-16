import Category from "../models/categoryModel.js";

export const createCategory = async (name) => {
  const category = new Category({ name });
  return await category.save();
};

export const getAllCategories = async () => {
  return await Category.find();
};

export const getCategoryById = async (id) => {
  return await Category.findById(id);
};

export const deleteCategory = async (id) => {
  return await Category.findByIdAndDelete(id);
};

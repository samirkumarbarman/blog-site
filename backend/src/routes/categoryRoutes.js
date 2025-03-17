import express from "express";
import {
    createCategory,
    getAllCategories,
    getCategory,
    deleteCategory,
} from "../controllers/categoryController.js"
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createCategory);
router.get("/", getAllCategories);
router.get("/:id", getCategory);
router.delete("/:id", protect, deleteCategory);

export default router;
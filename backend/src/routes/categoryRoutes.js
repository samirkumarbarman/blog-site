import express from "express";
import {
    createNewCategory,
    getCategories,
    getCategory,
    deleteCategoryById,
} from "../controllers/categoryController.js"
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createNewCategory);
router.get("/", getCategories);
router.get("/:id", getCategory);
router.delete("/:id", protect, deleteCategoryById);

export default router;
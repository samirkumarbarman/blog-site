import express from "express";
import {
    createNewComment,
    getPostComment,
    deleteCommentById,
} from "../controllers/commentController.js"
import { protect } from "../middlewares/authMiddleware.js"

const router = express.Router();

router.post("/", protect, createNewComment);
router.get("/:id", getPostComment);
router.delete("/:id", protect, deleteCommentById);

export default router;
import express from "express";
import {
    createNewPost,
    getPosts,
    getPost,
    updatePostDetails,
    deletePostById,
} from "../controllers/postController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createNewPost);
router.get("/", getPosts);
router.get("/:id", getPost);
router.put("/:id", protect, updatePostDetails);
router.delete("/:id", protect, deletePostById);

export default router;
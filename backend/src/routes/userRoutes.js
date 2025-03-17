import express from "express";
import { getUser, updateUserProfile, deleteUserProfile } from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/:id", protect, getUser);
router.put("/:id", protect, updateUserProfile);
router.delete("/:id", protect, deleteUserProfile);

export default router;
import postController from "../controllers/post/postController";
import authMiddleware from "../middlewares/Auth.middleware."
import express, { Router } from "express";

const router = express.Router();
router.post("/create-post", authMiddleware, postController.createPost)
router.get("/get-post", authMiddleware, postController.getUserPosts)
router.delete("/delete-post", authMiddleware, postController.deletePost)
router.put("/update-post", authMiddleware, postController.editPost)

export default router;

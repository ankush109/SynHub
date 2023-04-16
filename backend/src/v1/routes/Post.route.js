import postController from "../controllers/post/postController";
import authMiddleware from "../middlewares/Auth.middleware."
import express, { Router } from "express";

const router = express.Router();
router.post("/create-post", authMiddleware, postController.createPost)
router.get("/get-post", authMiddleware, postController.getUserPosts)
router.delete("/delete-post", authMiddleware, postController.deletePost)
router.put("/update-post/:id", authMiddleware, postController.editPost);
router.post("/like-post/:id", authMiddleware, postController.upvotePost);
router.post("/dislike-post/:id", authMiddleware, postController.downvotePost);
router.post("/like-comment/:id", authMiddleware, postController.upvoteComment);
router.post(
  "/dislike-comment/:id",
  authMiddleware,
  postController.downvoteComment
);
export default router;

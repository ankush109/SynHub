import { commentController } from "../controllers";
import usercontroller from "../controllers/user/usercontroller";
import authMiddleware from "../middlewares/Auth.middleware.";
import express, { Router } from "express";

const router = express.Router();
router.get("/get-user-by-username/:username", usercontroller.getUserByUsername);
router.get("/get-user", authMiddleware, usercontroller.getUser);
router.post("/edit-user", authMiddleware, usercontroller.edituser);
router.post("/create-room", authMiddleware, usercontroller.createRooms);
router.post("/join-room", authMiddleware, usercontroller.joinRoom);
router.post("/leave-room", authMiddleware, usercontroller.leaveRoom);
router.get(
  "/get-recommended-users",
  authMiddleware,
  usercontroller.getRecommendedUsers
);
router.post(
  "/upload-profile-picture",
  authMiddleware,
  usercontroller.uploadProfilePicture
);
router.post("/check-username", usercontroller.usernamExists);
router.post("/comment", authMiddleware, commentController.createComment);

export default router;

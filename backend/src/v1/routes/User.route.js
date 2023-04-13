import usercontroller from "../controllers/user/usercontroller";
import authMiddleware from "../middlewares/Auth.middleware."
import express, { Router } from "express";

const router = express.Router();

router.get("/get-user", authMiddleware,usercontroller.getUser);
router.post("/create-room", authMiddleware, usercontroller.createRooms);
router.post("/join-room", authMiddleware, usercontroller.joinRoom);
router.post("/leave-room", authMiddleware, usercontroller.leaveRoom);

export default router;

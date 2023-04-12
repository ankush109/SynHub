import usercontroller from "../controllers/user/usercontroller";
import authMiddleware from "../middlewares/Auth.middleware."
import express, { Router } from "express";

const router = express.Router();

router.get("/get-user", authMiddleware,usercontroller.getUser);

export default router;

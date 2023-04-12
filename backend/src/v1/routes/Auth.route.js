import express from "express";
import { loginController, registerController } from "../controllers";
import authMiddleware from "../middlewares/Auth.middleware."
const router= express.Router();

router.post("/register", registerController.register);
router.post("/login", loginController.login);
router.post("/logout", authMiddleware, loginController.logout);

export default router;

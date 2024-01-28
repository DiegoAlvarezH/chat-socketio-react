import express from "express";
import { chatController } from "../controllers/chatController.js";

const router = express.Router();

router.get("/users", chatController.getConnectedUsers);

export { router as chatRoutes };

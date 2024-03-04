import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

// For React
router.post("/login", memberController.login);
router.post("/signup", memberController.signup);

export default router;

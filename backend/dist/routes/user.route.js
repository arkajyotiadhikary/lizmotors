import { Router } from "express";
import { signInUser, updateUserProgress, getUserProgress, createUsers, } from "../controllers/user.controller.js";
const router = Router();
// router.post("/register", registerUser);
router.post("/login", signInUser);
// router.put("/api/users/progress", authMiddleware, updateUserProgress);
router.put("/api/users/progress", updateUserProgress);
// router.get("/api/users/progress", authMiddleware, getUserProgress);
router.get("/api/users/progress/:userId", getUserProgress);
// SUPER ADMIN
// create users
router.post("/api/users/create", createUsers);
export default router;

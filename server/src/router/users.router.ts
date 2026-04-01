import express from "express";
import { getUsers } from "../controller/users/get-users";
import { addUser } from "../controller/users/add-user";
import { login } from "../controller/users/auth/login";
import { authMiddleware } from "../middleware/auth-middleware";
import { adminMiddleware } from "../middleware/admin-middleware";
import { me } from "../controller/users/me";

const router = express.Router();

router.get("/", authMiddleware, adminMiddleware, getUsers);
router.post("/", addUser);
router.post("/login", login);
router.get("/me", authMiddleware, me);

export default router;

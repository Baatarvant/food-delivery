import express from "express";
import { getUsers } from "../controller/users/get-users";
import { addUser } from "../controller/users/add-user";
import { login } from "../controller/users/auth/login";
import { authMiddleware } from "../middleware/auth-middleware";
import { adminMiddleware } from "../middleware/admin-middleware";

const router = express.Router();

type JWTPayload = {
  data: {
    userId: number;
    email: string;
    role: "user" | "admin";
  };
};

router.get("/", authMiddleware, adminMiddleware, getUsers);
router.post("/", addUser);
router.post("/login", login);

export default router;

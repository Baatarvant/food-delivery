import express from "express";
import { addOrder } from "../controller/orders/add-order";
import { getOrders } from "../controller/orders/get-orders";
import { authMiddleware } from "../middleware/auth-middleware";
import { adminMiddleware } from "../middleware/admin-middleware";

const router = express.Router();

router.post("/", authMiddleware, addOrder);
router.get("/", authMiddleware, adminMiddleware, getOrders);

export default router;

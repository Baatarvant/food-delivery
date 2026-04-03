"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const add_order_1 = require("../controller/orders/add-order");
const get_orders_1 = require("../controller/orders/get-orders");
const auth_middleware_1 = require("../middleware/auth-middleware");
const admin_middleware_1 = require("../middleware/admin-middleware");
const router = express_1.default.Router();
router.post("/", auth_middleware_1.authMiddleware, add_order_1.addOrder);
router.get("/", auth_middleware_1.authMiddleware, admin_middleware_1.adminMiddleware, get_orders_1.getOrders);
exports.default = router;

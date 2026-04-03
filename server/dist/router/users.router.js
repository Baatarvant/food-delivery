"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const get_users_1 = require("../controller/users/get-users");
const add_user_1 = require("../controller/users/add-user");
const login_1 = require("../controller/users/auth/login");
const auth_middleware_1 = require("../middleware/auth-middleware");
const admin_middleware_1 = require("../middleware/admin-middleware");
const me_1 = require("../controller/users/me");
const router = express_1.default.Router();
router.get("/", auth_middleware_1.authMiddleware, admin_middleware_1.adminMiddleware, get_users_1.getUsers);
router.post("/", add_user_1.addUser);
router.post("/login", login_1.login);
router.get("/me", auth_middleware_1.authMiddleware, me_1.me);
exports.default = router;

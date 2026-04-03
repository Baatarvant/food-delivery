"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const get_categories_1 = require("../controller/category/get-categories");
const add_category_1 = require("../controller/category/add-category");
const router = express_1.default.Router();
router.get("/", get_categories_1.getCategories);
router.post("/", add_category_1.addCategory);
exports.default = router;

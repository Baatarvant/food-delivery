import express from "express";
import { getCategories } from "../controller/category/get-categories";
import { addCategory } from "../controller/category/add-category";

const router = express.Router();

router.get("/", getCategories);
router.post("/", addCategory);

export default router;

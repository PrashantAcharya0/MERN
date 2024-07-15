import express from "express";

import {
  getFoodList,
  addFoodItem,
  validateFoodDetail,
  validateFoodItem,
  validateFoodId,
  getFood,
  deleteFood,
} from "./food.service.js";

const router = express.Router();

// * add food item
router.post("/food/add", validateFoodDetail, addFoodItem);

// * get all food item
router.get("/food/list", getFoodList);

// * get product detail by id
router.get("/food/detail/:id", validateFoodId, validateFoodItem, getFood);

// * delete food item
router.delete("/food/delete/:id", validateFoodId, deleteFood);

export default router;

import express from "express";
import {
  addResturant,
  deleteResturant,
  validateMongoIdFromParams,
  validateResturantData,
} from "./resturant.service.js";

const router = express.Router();

// * add resturant
router.post("/add", validateResturantData, addResturant);

// ?delete a resturant
router.delete("/delete/:id", validateMongoIdFromParams, deleteResturant);

export default router;

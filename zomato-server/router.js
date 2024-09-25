import express from "express";
import {
  getAllRestaurants,
  filterRestaurants,
  getAllCities,
  getAllCuisines,
  getRestaurantById,
} from "./controllers/restaurantController.js";
import { getAllMealtypes } from "./controllers/mealtypeController.js";
import { getMenuItemsByRestaurantId } from "./controllers/menuController.js";

const router = express.Router();

// Get all restaurants based on location
// Filter restaurants based on the filter criteria -- location, mealtype, cuisine, cost
// authentication

router.get("/getAllRestaurants/:locationId", getAllRestaurants);
router.get("/getAllCities", getAllCities);
router.get("/getAllMealtypes", getAllMealtypes);
router.post("/filterRestaurants", filterRestaurants);
router.get("/getAllCuisines", getAllCuisines);
router.post("/getMenuItemsByRestaurantId", getMenuItemsByRestaurantId);
// router.post("/getRestaurantById", getRestaurantById);

export default router;

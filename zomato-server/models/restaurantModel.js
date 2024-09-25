import mongoose from "mongoose";

const cuisineSchema = new mongoose.Schema({
  cuisine: String,
  name: String,
});

const restaurantSchema = new mongoose.Schema({
  _id: String,
  city: String,
  type: Array,
  Cuisine: Array,
  cost: Number,
  city_name: String,
});

export const restaurantModel = mongoose.model(
  "restuarantModel",
  restaurantSchema,
  "restarauntsdata"
);

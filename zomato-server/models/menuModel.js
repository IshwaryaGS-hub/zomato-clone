import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  name: String,
  description: String,
  ingredients: Array,
  restaurantId: String,
  image: String,
  qty: Number,
  price: Number,
});

export const menuModel = mongoose.model("menuModel", menuSchema, "menuitems");

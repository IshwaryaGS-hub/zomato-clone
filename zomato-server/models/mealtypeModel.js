import mongoose from "mongoose";

const mealtypeSchema = new mongoose.Schema({
  _id: String,
  name: String,
  content: String,
  image: String,
});

export const mealtypeModel = mongoose.model(
  "mealtypeModel",
  mealtypeSchema,
  "mealtypes"
);

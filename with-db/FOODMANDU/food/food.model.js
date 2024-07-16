import mongoose from "mongoose";
import { string } from "yup";
// quantity detail
// const quantityDetail = new mongoose.Schema({
//   value: Number,
//   unit: String,
// });

// Set Schema
const foodschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlenght: 50,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
});

// create table
const Food = mongoose.model("Food", foodschema);

export default Food;

import mongoose from "mongoose";

// set schema
const resturantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 55,
    trim: true,
    lowercase: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
    maxlength: 55,
  },
  contact: {
    type: String,
    required: true,
    trim: true,
    maxlength: 15,
    minlength: 10,
  },
  ownerName: {
    type: String,
    maxlength: 55,
    required: false,
    nullable: true,
    default: null,
  },
});

// create collection

const Resturant = mongoose.model("Resturant", resturantSchema);

export default Resturant;

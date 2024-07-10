import mongoose from "mongoose";

// set rule/schema => structure

const customerSchema = new mongoose.Schema({
  email: String,
  phoneNumber: String,
  address: String,
});

// create table/model/colletion
const Customer = mongoose.model("Customer", customerSchema);
export default Customer;

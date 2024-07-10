import express from "express";
import Customer from "./customer.model.js";
import mongoose from "mongoose";

const router = express.Router();

// ? add customer
router.post("/customer/add", async (req, res) => {
  //extract new customer from req.body
  const newCustomer = req.body;
  // insert customer
  await Customer.create(newCustomer);
  // send res
  return res.status(201).send({ message: "customer is added sucessfully" });
});

// ? get customer list
router.get("/customer/list", async (req, res) => {
  const customer = await Customer.find();

  return res.status(200).send({ message: "sucess", customerList: customer });
});

// ? get customer detail by id
router.get("/customer/detail/:id", async (req, res) => {
  //extract customer id from req.params
  const customerId = req.params.id;

  // check for mongo id validity
  mongoose.isValidId = mongoose.isValidObjectId(customerId);

  // if not vaild mongo id, throw error
  if (!isValid) {
    return res.status(400).send({ message: "Invalid mongo id" });
  }

  // find customer using customerId
  const customer = await Customer.findOne({ _id: customerId });

  // if not customer, throw error
  if (!customer) {
    return res.status(404).send({ message: "customer doesnot exits" });
  }

  // send res
  return res.status(200).send({ message: "sucess", customerDetails: customer });
});
export default router;

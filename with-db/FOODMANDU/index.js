import express from "express";
import connectDB from "./connect.db.js";
import CustomerRoutes from "./customer/customer.controller.js";
const app = express();

// to make app understand json
app.use(express.json());

// database connection
connectDB();

// register routes
app.use(CustomerRoutes);

// network port and server
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
import express from "express";
import videoRoutes from "./videos/video.controller.js";
import connectDB from "./connect.db.js";

const app = express();

// to make app understand json
app.use(express.json());

// database connection
connectDB();

// register routes
app.use(videoRoutes);

// network port and server
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

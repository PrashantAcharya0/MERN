import express from "express";
import connectDB from "./connect.db.js";
import Movies from "./movies.model.js";

const app = express();

// to make app understand json
app.use(express.json());

// connect database
connectDB();

// api
app.post("/movies/add", async (req, res) => {
  const newMovie = req.body;

  await Movies.create(newMovie);
  return res.status(200).send({ message: "Adding movies ..." });
});

// get all movies
app.get("/movies/list", async (req, res) => {
  const Movies = await Movies.find;
  return res.status(200).send({ message: "sucess", movieList: Movies });
});
// network port and server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

import mongoose from "mongoose";

// set schema(rule)
const moviesSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  leadActor: String,
});

// create collection(table/model)
const Movies = mongoose.model("Movies", moviesSchema);

export default Movies;

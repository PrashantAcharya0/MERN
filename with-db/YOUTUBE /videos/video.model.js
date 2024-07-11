import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  creatorName: String,
  videoName: String,
  videoDuration: Number,
  videoCategory: String,
});

const Video = mongoose.model("Video", videoSchema);

export default Video;

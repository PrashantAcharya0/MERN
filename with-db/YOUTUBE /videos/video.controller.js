import express from "express";
import mongoose from "mongoose";
import Video from "./video.model.js";

const router = express.Router();

//add video
router.post("/video/add", async (req, res) => {
  const newVideo = req.params.body;
  await Video.create(newVideo);
  return res.status(201).send({ message: "Video added successfully." });
});

//get video list
router.get("/video/list", async (req, res) => {
  const videos = await Video.find();
  return res.status(200).send({ message: "success", videoList: videos });
});

//get video detail by id
router.get("/video/detail/:id", async (req, res) => {
  const videoId = req.params.id;

  const isValidId = mongoose.isValidObjectId(videoId);

  if (!isValidId) {
    return res.status(400).send({ message: "Invalid Video Id" });
  }

  const video = await Video.findOne({ _id: videoId });

  if (!video) {
    return res.status(404).send({ message: "Video does not exist" });
  }

  return res.status(200).send({ message: "success", videoDetail: video });
});

//get video detail by name
router.get("/video/detail/:videoName", async (req, res) => {
  const videoName = req.params.videoName;
  const video = await Video.findOne({ videoName: videoName });

  if (!video) {
    return res.status(404).send({ message: "Video does not exist" });
  }

  return res.status(200).send({ message: "success", videoDetail: video });
});

export default router;

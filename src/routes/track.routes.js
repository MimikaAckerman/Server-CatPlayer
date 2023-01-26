const trackRouter = require("express").Router();
const tracksController = require("../controllers/tracks.controller.js");

trackRouter
  .get("/", tracksController.getAllTracks)
  .post("/createtrack", tracksController.createTracks);
/*  .delete(":/id", tracksController, deleteTrack);
 */
module.exports = trackRouter;

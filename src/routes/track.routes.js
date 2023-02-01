const trackRouter = require("express").Router();
const tracksController = require("../controllers/tracks.controller.js");

trackRouter
  //mostrar todas las canciones
  .get("/", tracksController.getAllTracks)
  //insertar una cancion a una playlist en especifico para ello usamos el metodo put
  .patch("/updateTracks/:id",tracksController.updateTracks)





/*   .post("/createtrack", tracksController.createTracks); */
/*  .delete(":/id", tracksController, deleteTrack);
 */

module.exports = trackRouter;

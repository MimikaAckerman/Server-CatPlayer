const { default: mongoose } = require("mongoose");
const { findByIdAndUpdate } = require("../models/tracks.model");
const tracksModel = require("../models/tracks.model");

//mostrar todas las canciones
const getAllTracks = async (req, res, next) => {
  try {
    const allTracks = await tracksModel.find({});
    res.status(200).send({ status: true, data: allTracks });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
};

//actualizar todos los tracks
const updateTracks = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);

  const params = req.body;
  console.log(params);

  /* const { name,playlists } = req.body  */
  try {

    /* const tracks = await tracksModel.findByIdAndDelete({ _id: id }); */


    const editTrack = await tracksModel.findByIdAndUpdate(id, params, {new: true,});
    res.status(200).send({ status: true, data: editTrack });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
};

//CREATE TRACKS
/* async function createTracks(req, res) {
  const { name, genre, thumbnail } = req.body;

  try {
    const tracks = new tracksModel({
      name,
      genre,
      thumbnail:
        "https://i.pinimg.com/originals/48/0a/db/480adb1a2b9491734ad23fd6a68f3d33.jpg",
    });
    tracks.save((error, data) => {
      if (error) {
        throw error;
      }
      res.status(200).send({ status: true, data: tracks });
    });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
} */

/* const deleteTracks = async (req, res, next) => {
  const { id } = req.params;
  try {
    const tracks = await tracksModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ status: true, data: tracks._id });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }*/

module.exports = {
  getAllTracks,
  updateTracks,
  /*   deleteTracks, */
};

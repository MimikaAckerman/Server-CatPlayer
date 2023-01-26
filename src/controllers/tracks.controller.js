const tracksModel = require("../models/tracks.model");

const getAllTracks = async (req, res, next) => {
  try {
    const allTracks = await tracksModel.find({});
    res.status(200).send({ status: true, data: allTracks });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
};
//CREATE TRACKS
async function createTracks(req, res) {
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
}
const updateTracks = async (req, res, next) => {
  const { id } = req.params;
  const { ...fields } = req.body;

  try {
    const author = await tracksModel
      .findOneAndUpdate(
        { _id: id },
        {
          $set: {
            ...fields,
          },
        },
        { new: true }
      )
      .lean()
      .exec();

    res.status(200).send({ status: true, data: author });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
};
const deleteTracks = async (req, res, next) => {
  const { id } = req.params;
  try {
    const tracks = await tracksModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ status: true, data: tracks._id });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
};
module.exports = {
  getAllTracks,
  createTracks,
  updateTracks,
  deleteTracks,
};

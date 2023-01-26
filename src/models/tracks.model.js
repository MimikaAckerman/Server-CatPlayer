const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const TrackSchema = Schema({
  name: {
    type: String,
    trim: true,
  },
  url: {
    type: String,
    required: false,
  },
  thumbnail: {
    type: String,
    trim: true,
    required: false,
  },
  genre: {
    type: Schema.Types.ObjectId,
    ref: "genre",
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  liked: {
    type: String,
    require: false,
  },
  playlists: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "playlist",
      },
    ],
    default: [],
  },
  likedBy: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    default: [],
  },
});

const Track = mongoose.model("track", TrackSchema);
module.exports = Track;

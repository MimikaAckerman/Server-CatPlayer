const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const PlaylistSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Playlist name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: false,
    },
    thumbnail: {
      type: String,
      trim: true,
      required: false,
    },
    tracks: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "track",
        },
      ],
      default: [],
    }
  },
 
);

const Playlist = mongoose.model("playlist", PlaylistSchema);

module.exports = Playlist;
const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const SearchSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const search = mongoose.model("search", SearchSchema);

module.exports = search;

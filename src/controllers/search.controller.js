const { response } = require("express");
const SearchModel = require("../models/search.model.js");

const getSearch = async (req, res) => {
  try {
    const { name } = req.query;
    const agg = [
      {
        $search: {
          autocomplete: {
            query: name,
            path: "name",
            fuzzy: {
              maxEdits: 2,
            },
          },
        },
      },
      {
        $limit: 5,
      },
      {
        $project: {
          _id: 0,
          name: 1,
          thumbnail: 1,
          description: 1,
        },
      },
    ];
    const response = await SearchModel.aggregate(agg);
    return res.json(response);
    //!ERROR
  } catch (error) {
    console.log(error);
    return res.json([]);
  }
};
module.exports = { getSearch };

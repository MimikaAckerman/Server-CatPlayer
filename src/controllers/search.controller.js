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
    console.log(agg);
    const response = await SearchModel.aggregate(agg);
    console.log(response);
    return res.json(response);
  } catch (error) {
    console.log(error);
    return res.json([]);
  }
};
module.exports = { getSearch };

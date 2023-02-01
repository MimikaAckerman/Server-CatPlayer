const tracksMode = require("../models/tracks.model");

const getSearch = async (req, res) => {
  try {
    const { name } = req.query;

    const agg = [
      {
        $search: {
          index: "tester",
          autocomplete: {
            query: name,
            path: "name",
          },
        },
      },
      {
        $project: {
          _id: 0,
          name: 1,
          thumbnail: 1,
          artist: 1,
        },
      },
    ];
    const search = await tracksMode.aggregate(agg);
    res.status(200).json({
      ok: true,
      data: search,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = { getSearch };

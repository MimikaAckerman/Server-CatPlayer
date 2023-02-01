const { getSearch } = require("../controllers/search.controller");
const SearchController = require("../controllers/search.controller");
const SearchRouter = require("express").Router();

SearchRouter.get("/", SearchController.getSearch);
module.exports = SearchRouter;

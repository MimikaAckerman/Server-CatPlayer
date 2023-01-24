const genresRouter = require('express').Router()
const genresController = require('../controllers/genres.controller')

genresRouter
.get('/',genresController.getAllGenres)

module.exports = genresRouter
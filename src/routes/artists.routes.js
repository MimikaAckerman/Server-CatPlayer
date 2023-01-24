const artistsRouter = require('express').Router()
const artistsController = require('../controllers/artists.controller')

artistsRouter
.get('/',artistsController.getAllArtists)

module.exports = artistsRouter
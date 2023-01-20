const trackRouter = require('express').Router()
const tracksController = require('../controllers/tracks.controller.js')

trackRouter
.get('/:id',tracksController.getTrackByID)
.delete(':/id',tracksController,deleteTrack)

module.exports = trackRouter
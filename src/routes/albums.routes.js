const albumRouter = require('express').Router()
const albumsController = require('../controllers/albums.controller.js')

albumRouter
.get('/',albumsController.getAllAlbums)
.get('/:id',albumsController.getAlbumByID)
.delete('/:id',albumsController.deleteAlbum)
.patch(':/id',albumsController.createAlbum)

module.exports = albumRouter
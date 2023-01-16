const albumRouter = require('express').Router()
const AlbumsController = require('../controllers/albums.controller')

albumRouter
.get('/',AlbumsController.getAllAlbums)
.get('/:id',AlbumsController.getAlbumByID)
.delete('/:id',AlbumsController.deleteAlbum)
.patch(':/id',AlbumsController.createAlbum)
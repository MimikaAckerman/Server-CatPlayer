const playlistRouter = require('express').Router()
const PlaylistsController = require('../controllers/playlists.controller')

playlistRouter
.get('/',PlaylistsController.getAllPlaylists)
.get('/:id',PlaylistsController.getPlaylistByID)
.delete('/:id',PlaylistsController.deletePlaylist)
.patch(':/id',PlaylistsController.createPlaylist)

module.exports = playlistRouter
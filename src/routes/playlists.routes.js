const playlistRouter = require('express').Router()
const PlaylistsController = require('../controllers/playlists.controller')

playlistRouter


//show all playlist
.get('/',PlaylistsController.getAllPlaylists)
//created a playlist 
.post('/',PlaylistsController.createPlaylist)





//show specif playlist with name
/* .get('/name/:id',PlaylistsController.getPlaylistByName) */

//delete playlist 
.delete('/:id',PlaylistsController.deletePlaylist)
//edit playlist 
.patch(':/id',PlaylistsController.createPlaylist)






    //show specific playlist with ID
/* .get('/:id',PlaylistsController.getPlaylistByID) */
  




module.exports = playlistRouter
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const {json} = require('body-parser')

const albumsRoutes = require('./src/routes/albums.routes.js')
const userRoutes = require('./src/routes/user.routes.js')
const playlistsRoutes = require('./src/routes/playlists.routes.js')

const app = express();

app.use(morgan('dev'))
app.use(helmet())
app.use(json())

app.use('/album' ,albumsRoutes)
app.use('/user',userRoutes)
app.use('/playlists',playlistsRoutes)


module.exports = app;
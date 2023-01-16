const express = require('express')

const albumsRoutes = require('./routes/albums.routes')

const app = express();

app.use('/album' ,albumsRoutes)

module.exports = app;
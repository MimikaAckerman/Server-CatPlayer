const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const {json} = require('body-parser')


const userRoutes = require('./src/routes/user.routes.js')
const fileUpload = require('express-fileupload')
const cors = require('cors')

const albumsRoutes = require('./src/routes/albums.routes.js')
const playlistsRoutes = require('./src/routes/playlists.routes.js')
const artistsRoutes = require('./src/routes/artists.routes.js')
const genresRouter = require('./src/routes/genres.routes.js')

const app = express();

app.use(cors())

app.use(morgan('dev'))
app.use(helmet())
app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:'./uploads',
        limits:{fileSize: 10000000},
        abortOnLimit:true
    })
)
app.use(json({limit:'50mb'}))



app.use('/album' ,albumsRoutes)
app.use('/user',userRoutes)
app.use('/playlists',playlistsRoutes)
app.use('/artists',artistsRoutes)
app.use('/genres',genresRouter)


module.exports = app;
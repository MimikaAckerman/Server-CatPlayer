const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const {json} = require('body-parser')

const albumsRoutes = require('./src/routes/albums.routes.js')
const userRoutes = require('./src/routes/user.routes.js')
const fileUpload = require('express-fileupload')
const cors = require('cors')

const app = express();

const corsOptions ={
    origin:'http://localhost:3000'
}

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

module.exports = app;
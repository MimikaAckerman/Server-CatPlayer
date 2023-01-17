const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const {json} = require('body-parser')

const albumsRoutes = require('./src/routes/albums.routes.js')

const app = express();

app.use(morgan('dev'))
app.use(helmet())
app.use(json())

app.use('/album' ,albumsRoutes)

module.exports = app;
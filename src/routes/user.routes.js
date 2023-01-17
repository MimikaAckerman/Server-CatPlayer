const userRouter = require('express').Router()
const userController = require('../controllers/user.controller.js')

userRouter
  .post('/', userController.createUser)

module.exports = userRouter
const userRouter = require('express').Router()
const userController = require('../controllers/user.controller.js')

userRouter
  .post('/', userController.createUser)
  .get('/public',userController.publicPing)
  .get('/private',userController.privatePing)
  .patch('/:id',userController.updateUserImgWithBase64)
  .post('/upload/:id',userController.updateUserImgWithFileUpload)
  .post('/upload/audio/:id',userController.updateUserAudioWithFileUpload)

module.exports = userRouter
const userModel = require('../models/user.model')
const fs = require('fs-extra')
const {cloudinary,uploadImage,uploadAudioFile} = require('./../utils/cloudinary.js')



/* create user---------------------------------*/
async function createUser (req, res, next) {
  const { firstName, email, password } = req.body

  try {
    const user = await userModel.create({
      firstName,
      email,
      password,
      image
    })
    res.status(200).send({ status: true, data: user })
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message })
  }
}


/* public ping---------------------------------*/

async function publicPing(req,res,next){
  console.log(req.body)
  res.status(200).send({status:true,msg:'public ping'})
}

/*private ping---------------------------------*/
async function privatePing(req,res,next){
  console.log(req.body)
  res.status(200).send({status:true,msg:'private ping'})
}



async function updateUserImgWithBase64(req,res,next){
  const {img} = req.body
  const {id} = req.params
  try {
    if(img){
      const imgUploaded = await cloudinary.uploader.upload(`data:img/png;base64,${img}`,{resource_type:'img',folder:'profilePictures/',overwrite:true})

    const updatedUser = await userModel.findOneAndUpdate(
      {_id:id},
      {
        $set:{
          img:{
            public_id:imgUploaded.public_id,
            secure_url:imgUploaded.secure_url
          }
        }
      },
      {new:true}
    ).lean().exec()
    res.status(200).send({status:true,data:updatedUser})
    }
  } catch (error) {
    res.status(500).send({status:true,msg:error})
  }
}

async function updateUserImgWithFileUpload(req,res,next){
  const {id} = req.params
  try {
    if(req.files?.img){
      const imgUploaded = await uploadImage(req.files.img.tempFilePath)
      const updatedUser = await userModel.findOneAndUpdate(
        {_id:id},
        {
          $set:{
            img:{
              public_id:imgUploaded.public_id,
              secure_url:imgUploaded.secure_url
            }
          }
        },
        {new:true}
      ).lean().exec()

      await fs.unlink(req.files.img.tempFilePath)
      res.status(200).send({status:true, data:updatedUser})
    }
  } catch (error) {
    res.status(500).send({status:true,mgs:error.message})
    
  }
}
async function updateUserAudioWithFileUpload(req,res,next){
  const {id} = req.params
  console.log('executed updateUserAudioWithFileUpload' + id)
  try {
    if(req.files?.audio){
      console.log(req.files?.audio)
      const audioUploaded = await uploadAudioFile(req.files.audio.tempFilePath,req.files?.audio.name)
      await fs.unlink(req.files.audio.tempFilePath)
      res.status(200).send({status:true,data:audioUploaded})
    }
  } catch (error) {
    res.status(500).send({status:false,msg:error.message})
    
  }

}








module.exports = { createUser,publicPing,privatePing,updateUserImgWithBase64,updateUserImgWithFileUpload,updateUserAudioWithFileUpload }
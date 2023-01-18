const cloudinary = require('cloudinary')
const cloudinaryConfig = require('../config/config.js').cloudinary

cloudinary.config(cloudinaryConfig)

const uploadImage = async(imagePath) =>{
    const imgUploaded = await cloudinary.UploadStream.upload(imagePath,{resource_type:'image',folder:'profilePictures/',overwrite:true})
    return imgUploaded
}

const uploadAudioFile = async(audioFile,name) =>{
    const audioFileUploaded = await cloudinary.UploadStream.upload(audioFile,{resource_type:'video',public_id:name,folder:'audioFiles/',overwrite:true})
    return audioFileUploaded
}
module.exports = {cloudinary,uploadImage,uploadAudioFile}
// const playlistModel = require('../models/playlists.model')

// const getAllPlaylists = async (req,res,next) =>{
//     try {
//         const allPlaylists = await playlistModel.find({}).lean().exec()
//         res.status(200).send({status:true,data:allPlaylists})
//     } catch (error) {
//         res.status(500).send({status:false,msg:error.message})
        
//     }
// }
// const createPlaylist = async (req,res,next) => {
//     const {id} = req.params
//     const {name, description, collaborative, thumbnail, tracks} = req.body

//     try {
//         const newPlaylist = await playlistModel.create({
//             name: name,
//             description: description,
//             thumbnail: thumbnail ? thumbnail : null,
//             collaborative: collaborative ? collaborative : false,
//             tracks: tracks ? tracks : [],
//             authorId: id,
//           });
      

//         if(id){
//             await authorModel
//             .updateOne(
//                 {_id:id},
//                 {$push:{playlists:newPlaylist._id}}
//             )
//         }
//         res.status(201).send({status:true,data:newPlaylist._id})
//     } catch (error) {
//         res.status(500).send({status:false,msg:error.message})
//         {
//             next(err);
//         }
        
//     }
// }
// const getPlaylistByID= async(req,res,next) =>{
//     const {id} = req.params
//     try {
//         const album = await playlistModel.findById(id).lean().exec()
//         res.status(200).send({status:true,data:playlists})
//     } catch (error) {
//         res.status(500).send({status:false,msg:error.message})
        
//     }  next(err);

// }
// const updatePlaylist = async(req,res,next) =>{
//     const {id} = req.params
//     const {...fields} = req.body

//     try {
//         const author = await playlistModel.findOneAndUpdate(
//             {_id:id}, 
//             {
//                 $set :{
//                     ...fields
//                 }
//             },
//             {new:true}
//             ).lean().exec()

//             res.status(200).send({status:true,data:author})
//     } catch (error) {
//         res.status(500).send({status:false,msg:error.message})
        
//     }
// }
// const deletePlaylist = async(req,res,next) =>{
//     const {id} = req.params
//     try {
//         const playlist = await playlistModel.findByIdAndDelete({_id:id})
//         res.status(200).send({status:true,data:playlist._id})
//     } catch (error) {
//         res.status(500).send({status:false,msg:error.message})
//     }
// }
// module.exports = {
//     getAllPlaylists,createPlaylist,getPlaylistByID,updatePlaylist,deletePlaylist
// }

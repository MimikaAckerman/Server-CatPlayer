const playlistModel = require("../models/playlists.model");


//SHOW ALL PLAYLIST
const getAllPlaylists = async (req, res, next) => {
  try {
    const allPlaylists = await playlistModel.find({});
    console.log(allPlaylists);
    res.status(200).send({ status: true, data: allPlaylists });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
};

//CREATE PLAYLIST
async function createPlaylist(req, res, next) {
  const {
   
        name, 
        description, 
        thumbnail
     
        } = req.body

    try {
        const playlist = await playlistModel.create({
            name, 
        description, 
        thumbnail
        })
        res.status(200).send({status:true,data:playlist})
    } catch (error) {
        res.status(500).send({status:false,msg:error.message})
        
    }
    }


//SHOW SPECIFIC PLAYLIST WITH NAME

const getPlaylistByName = async (req, res, next) => {
    const name = req.query.name;
 
        
   
  /* const { id } = req.params;
  try {
    const playlist = await playlistModel.findById(id).lean().exec();
    res.status(200).send({ status: true, data: playlist });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  } */
};












const updatePlaylist = async (req, res, next) => {
  const { id } = req.params;
  const { ...fields } = req.body;

  try {
    const author = await playlistModel
      .findOneAndUpdate(
        { _id: id },
        {
          $set: {
            ...fields,
          },
        },
        { new: true }
      )
      .lean()
      .exec();

    res.status(200).send({ status: true, data: author });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
};
const deletePlaylist = async (req, res, next) => {
  const { id } = req.params;
  try {
    const playlist = await playlistModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ status: true, data: playlist._id });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
};
module.exports = {
  getAllPlaylists,
  createPlaylist,
  getPlaylistByName,
  
  updatePlaylist,
  deletePlaylist,
};

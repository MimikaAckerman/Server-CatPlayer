const artistModel = require('../models/artists.model')

//show all artist
const getAllArtists = async(req,res,next)=>{
    try {
        const allArtists = await artistModel.find({})
        res.status(200).send({status:true,data:allArtists})
    } catch (error) {
        res.status(500).send({status:false,msg:error.message})
        
    }
}

module.exports = {
    getAllArtists
}
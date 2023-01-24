const genresModel = require('../models/genres.model')

const getAllGenres = async(req,res,next)=>{
    try {
        const allGenres = await genresModel.find({})
        res.status(200).send({status:true,data:allGenres})
    } catch (error) {
        res.status(500).send({status:false,msg:error.message})
        
    }
}

module.exports = {
    getAllGenres
}
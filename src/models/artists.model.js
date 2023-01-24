const {Schema,model} = require('mongoose')

const ArtistSchema = Schema({
    name:{
        type:String,
        require:true
    },
    genres:{
        type:String,
        required:true
    },
    popularity:{
        type:Number,
        required:true
    }
})
const ArtistModel = model('artist',ArtistSchema)
module.exports = ArtistModel
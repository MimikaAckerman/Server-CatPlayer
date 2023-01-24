const {Schema,model} = require('mongoose')

const GenresSchema = Schema({
    name:{
        type:String,
        require:true
    }
})

const GenresModel = model('genres',GenresSchema)
module.exports = GenresModel
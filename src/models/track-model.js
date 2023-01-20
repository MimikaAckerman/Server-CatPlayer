const mongoose = require("mongoose")
const {Schema} = require("mongoose")


const TrackSchema = Schema(
    {
        title:{
            type:String,
            required:[true,"Track title required"],
            
        }
    }
)
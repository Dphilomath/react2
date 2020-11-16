const mongoose = require("mongoose")

const Schema = mongoose.Schema

const commentSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    review:{
        type: String
    },
    Date:{
        type : Date,
        default : Date.now
    } 
})
const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment
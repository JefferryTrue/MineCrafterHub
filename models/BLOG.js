
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    preview:{
        type:String,
        required:true
    },
    previewImg:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
})


module.exports = Blog = mongoose.model("blog",BlogSchema);

const app=require("express")();
const mongoose  = require("mongoose");

//Schema
const tweetSchema= new mongoose.Schema({
    text: {type: String, required: true},
    tags : {type : Array, required: true},
    author_id : {type: Number, required: true},
    no_of_likes : {type: Number, required: true},
},
{timestamps: { created_at: () => Date.now() }}
)

//Models
const Tweet= mongoose.model("Tweet",tweetSchema);

module.exports=Tweet;
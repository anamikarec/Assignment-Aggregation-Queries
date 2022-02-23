
const app=require("express")();
const mongoose  = require("mongoose");

//Schema
const userSchema= new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    country : {type: String, required: true}
})

//Models
const User= mongoose.model("User",userSchema);

module.exports=User;
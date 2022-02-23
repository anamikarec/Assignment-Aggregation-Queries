
const express=require("express");
const app =express();
const cors= require('cors');
const connect = require('./app/config/db');

const userRoute = require("./app/routes/users.route");
const tweetRoute = require("./app/routes/tweets.route");

const PORT=5001;

app.use(cors());
app.use(express.json())


app.use("/users",userRoute);
app.use("/tweets",tweetRoute);

const start= async ()=>{
    await connect();
    app.listen(PORT,()=>{
        console.log(`app is listening on port ${PORT}`);
    })
}

module.exports=start;
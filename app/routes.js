const app=require("express")();
const userController = require('./controllers/users.controller');
const tweetsController = require('./controllers/tweets.controller');

app.use("/users",userController)

app.use("/posts",tweetsController)
module.exports= app;
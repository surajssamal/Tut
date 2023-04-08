const express = require('express');
const bodyparser = require('body-parser');
const request = require('request');

const app = express();
app.use(express.static("Local"))

app.get("/",function (req,res) {
    res.sendFile(__dirname+"/index.html")
})
app.listen(3000,function (req,res) {
    console.log("Server is listning ...");
})

const express = require("express");
const dotenv = require("dotenv");
const app = require("./index.js");
const DBConnection = require("./db/config.js")

dotenv.config();

const port = process.env.PORT || 9000;

app.get('/check',(req,res)=>{
    return "Hello"
})

app.listen(port,async()=>{
    await DBConnection();
console.log(`Server is running at port ${port}`);
})

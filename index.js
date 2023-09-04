const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT

app.get("/",(req,res)=>{
    res.send({msg:"base end point is here"})
})

app.get("/about",(req,res)=>{
    res.send({msg:"we are ....."})
})

app.listen(PORT,()=>{
    console.log("listening on port")
})


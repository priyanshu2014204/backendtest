const express=require("express");
require("dotenv").config()
const app=express();
app.get("/",(res,req)=>{
    req.send(``)
})

app.get("/name",(req,res)=>{
    res.send(process.env.name)
})
console.log(process.env.name)
app.listen(8080,()=>{console.log("8080 is running")})
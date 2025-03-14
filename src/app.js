const express = require("express")

const app = express()

app.use("/",(req,res)=>{
    res.send("Namasthe from dashboard")
})

app.use("/hello",(req,res)=>{
    res.send("Hello hello hello")
})

app.use("/test",(req,res)=>{
    res.send("Hello from the server")
})

app.listen(7777,()=>{
    console.log("Server is successfully running on port 7777")
})
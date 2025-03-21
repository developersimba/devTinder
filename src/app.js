const express = require("express")

const app = express()

app.get("/user",(req,res)=>{
    console.log("handling the route user")
    res.send("Route handler 1")
})

app.listen(7777,()=>{
    console.log("Server is successfully running on port 7777")
})
const express = require("express")

const app = express()

app.get("/user/:userId/:name/:password",(req,res)=>{
    console.log(req.params)
    res.send({firstname:"yaswanth",lastname:"krishna"})
})

app.listen(7777,()=>{
    console.log("Server is successfully running on port 7777")
})
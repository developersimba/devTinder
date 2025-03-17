const express = require("express")

const app = express()

app.get("/user",(req,res)=>{
    res.send({firstname:"yaswanth",lastname:"krishna"})
})

app.post("/user",(req,res)=>{
    res.send("Data successfully saved to the dashboard")
})

app.delete("/user",(req,res)=>{
    res.send("Deleted succesfully")
})

app.use("/test",(req,res)=>{
    res.send("Hello from the server")
})

app.listen(7777,()=>{
    console.log("Server is successfully running on port 7777")
})
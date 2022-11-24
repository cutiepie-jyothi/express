const express=require("express")
const app=express()
const cors=require("cors")
const port=4012;

const employee={id:29,name:"node",position:"frontend"}
const students=require("./data.js")

app.use(cors())

app.get("/",(req,res)=>{
    res.send("starting route")
})
app.get("/demo",(req,res)=>{
    res.send("this is demo route")
})
app.get("/emp",(req,res)=>{
    res.json(employee)
})
app.get("/students-list",(req,res)=>{
    res.json(students)
})


app.listen(port,()=>console.log("server is running on port 4012"))

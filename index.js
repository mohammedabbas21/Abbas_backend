const express = require('express')
const path = require('path')
const fs= require("fs")
const app = express()

const cors = require('cors')

app.use(express.json())

var corsOption = {
    origin:'http://localhost:5000'
}

app.use(cors(corsOption))

app.use(cors())

const dir = path.join(__dirname,'/public')


app.use(express.static(dir))

app.get("/",(req,res)=>{
    res.sendFile(dir+'/index.html')
})


app.get("/api",(req,res)=>{
    var data = fs.readFileSync('./students.json')
    data = JSON.parse(data)
    res.send(data)
})


app.listen(process.env.PORT || 5000,()=>{
    console.log('Server up and running!')
})


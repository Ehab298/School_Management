const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors'); 
app.use(cors());
const connecttion=require('./Model/connecttionDB')
require('dotenv').config()

const PORT = process.env.PORT
connecttion()


const {
    Classroom,
    School,
    Student
  
    }= require('./router/app')
app.use(Classroom,
    School,
    Student)
app.get('/', function (req, res) {
    res.send('Hello World')
  })
  
  app.listen(PORT,()=>{
      console.log(`is run at port ${PORT}`);
  })
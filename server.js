const express = require('express');
const mongoose = require('mongoose'); 


const app = express(); 
//DB config 
const db = require('./config/key').mongoURI;
//connect to mongoDB
mongoose
  .connect(db)
  .then(()=>{console.log('MongoDB Connected')})
  .catch(err => console.log(err));
//setting up express server
app.get('/', (req, res)=>res.send('Hello'))

const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`server running on port : ${port}`))
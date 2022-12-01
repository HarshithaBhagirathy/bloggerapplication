const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
var dotenv = require('dotenv')
dotenv.config();

const dbName = process.env.DBNAME;
const mongoURI  =`${process.env.DBURL}/${dbName}`;

const blgRouter = require('./routes/auth')

const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/auth',blgRouter)


mongoose.connect(mongoURI,{

    tlsAllowInvalidHostnames: true,
  
    tlsAllowInvalidCertificates: true,
  
})

mongoose.connection.on('open', ()=>{
    console.log('database connection sucessful')
})

app.listen(process.env.PORT, (err)=>{
    if(!err){
        console.log("app is listening at "+process.env.PORT)
    }
})

module.exports = app;
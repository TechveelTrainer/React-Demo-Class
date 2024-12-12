const express=require('express')
const authendicate = require('./middleware/authendicate')
const jwt=require('jsonwebtoken')
const { token } = require('./config')
const cors=require('cors')

const app=express()

app.use(express.json())
app.use(cors())

app.use(authendicate)

app.get('/login',(req,res)=>{
    const authtoken=jwt.sign({
        data:new Date().toUTCString(),
        username:req.body.name
    },token)
    res.end(authtoken)
})

app.get('/getData',(req,res)=>{
    
    res.end("Datas")
})

app.use('*',(req,res)=>{
    res.end('404 not found')
})

// global error handler 
app.use((err,req,res,next)=>{
    console.log(err.message);
    res.end('something went wrong')
})

app.listen(8090,()=>{
    console.log('Server is running on 8090')
})
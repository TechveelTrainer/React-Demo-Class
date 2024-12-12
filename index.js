const http = require('http')
const PATH = require('path')
const fs=require('fs')
const ConvertorFiletoData = require('./Utils/ConvertorFiletoData')
const fspromise=fs.promises


const server = http.createServer((req, res) => {
    const path = req.url
    if (path === '/') res.end('Node api')
    else if (path === '/login') {
        req.on('data',async (data)=>{
            const fileData=await fspromise.readFile(PATH.join(__dirname,'data.txt'))
            const credentialData=ConvertorFiletoData(fileData.toString())
            const inputData=JSON.parse(data.toString())
            const LoginData=credentialData.find((data)=>data.name===inputData.name)
            // console.log(LoginData,inputData);
            
            // console.log(inputData.password,LoginData.password,typeof(inputData.password),typeof(LoginData.password));
            
            if(!LoginData || inputData.password.toString()!==LoginData.password){
                res.end('Invalid credential')
            }else{
                res.end('Login success')
            }
        })
    }
    else {
        res.end('404 Page Not found')
    }
})

server.listen(8090, (error) => {
    if (error) console.log(error);
    console.log('Server running on 8090')
})


// console.log(__dirname,__filename);

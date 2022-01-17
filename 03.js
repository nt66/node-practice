const http = require("http")
const fs = require("fs")
const server = http.createServer((req,res)=>{
    console.log('---READ FILES START---')
    fs.readFile("./files/hlf.txt",(err,fileContent)=>{
        res.setHeader("Content-type","text/html;charset=UTF-8")
        res.end(fileContent)
        console.log('---READ FILES ENDED---')
    })
})

server.listen(3000,"127.0.0.1")
console.log('server 127.0.0.1:3000 is running....')
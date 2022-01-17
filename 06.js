// 静态资源文件读取
const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res)=>{
    if(req.url === "/a.html"){ 
        res.setHeader("Content-type","text/html;charset=UTF-8")
        fs.readFile("./public/a.html",(err,data)=>{
            if(err){
                throw new Error(err)
            }
            res.end(data)
        })
    }else if(req.url === "/a.css"){
        fs.readFile("./public/a.css",(err,data)=>{
            res.end(data)
        })
    }
    else{
        res.end("没有这个路径")
    }
})

server.listen(3000)
console.log('server localhost:3000 is started...')
// 路由
const http = require("http")
const fs = require("fs")
const server = http.createServer((req,res)=>{
    // 字符乱码
    res.setHeader("Content-type","text/html;charset=UTF-8")
    if(req.url === "/"){
        res.end("首页")
    }
    else if(req.url === "/school"){
        res.end("杭州电子科技大学")
    }else if(req.url === "/muisc"){
        res.end("这里是音乐频道")
    }else if(req.url === "/news"){
        res.end("这里是新闻频道")
    }else if((/^\/student\/[\d]{4}$/).test(req.url)){
        const reg = /\/student\/([\d]{4})/   // 加()是用来捕获 
        const sid = reg.exec(req.url)[1] // [1]即指$1：捕获的第一个
        console.log(typeof sid)
        fs.readFile('./files/db.json',(err,data)=>{
            if(err){
                res.end("文件读取失败！")
                return
            }
            const dataObj = JSON.parse(data)
            // console.log(dataObj[sid])
            res.write(`<h1>学生资料</h1>`)
            // dataObj.hasOwnProperty(sid)也可
            if(dataObj[sid]){
                res.write(`<h2>名字：${dataObj[sid]?.names}</h2>`)
                res.write(`<h2>年龄：${dataObj[sid]?.age}</h2>`)
                res.write(`<h2>分数：${dataObj[sid]?.fengshu}</h2>`)
                res.end()
            }else{
                res.end("没有该学生")
            }
        })
    }else{
        res.end("没有该页面!!!")
    }
})

server.listen(3000)
console.log('server 127.0.0.1:3000 is running....')

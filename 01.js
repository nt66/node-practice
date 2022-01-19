// 创建一个node服务器
const http = require("http")

const server = http.createServer(function(req,res){
   res.setHeader("Content-type","text/html;charset=UTF-8") // *设置头，防止中文乱码
   res.end("hello world!")
})

server.listen(3000,"127.0.0.1")
console.log("\x1B[31m\x1B[42m","127.0.0.1:300 is running...")  // console log 颜色设置


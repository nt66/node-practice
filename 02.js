// node是单线程，一人报错或阻塞，所有人遭殃
const http = require("http")

const a = 0; // **每个客户端访问都是共享的，证明是单线程|而java|php 每个登陆的都不是共享
const server = http.createServer((req,res)=>{
    // 0~100随机数
    const num = parseInt(Math.random()*1000)
    if(num === 888)
        throw new Error('error....') // **因为是单线程，如果一个人引起程序报错，则所有人都会挂掉。
    res.end(`random is:${num}`)
})

server.listen(3000,"127.0.0.1")
console.log("\x1B[31m\x1B[42m","127.0.0.1:300 is running...")
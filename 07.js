// url|path|querystring 三大模块常用API
const http = require("http")
const url = require("url")
const path = require("path")
const queryString = require("querystring")

const server = http.createServer((req,res)=>{
    const urlObj = url.parse(req.url) // 获取url对象 true 表示query部分对象化
    console.log('urlObj:',urlObj)  
    // console.log('query_a:',urlObj?.query?.a)

    const extName = path.extname(urlObj?.pathname) // 获取扩展名
    console.log('extName:',extName)

    const queryStirng = queryString.parse(urlObj.query)
    console.log('queryStirng:',queryStirng)

    res.end("this is path|url|querystring page")
})

server.listen(3000,'127.0.0.1')
console.log('server started at 3000...')
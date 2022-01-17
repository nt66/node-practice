// 写一个小小阿帕奇（静态资源文件服务器）
// 1）读静态资源文件
// 2）restful路由自动添加index.html
// 3）当前路径图片资源无法读取
// 4）304页面处理
const http = require("http")
const url = require("url")
const fs = require("fs")
const path = require("path")
const querystring = require("querystring")

// 定义mime类型
const mime = {
    ".html": "text/html;charset=UTF-8",
    ".css": "text/css",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".json": "application/json",
    ".js": "text/javascript",
    ".ico": "image/vnd.microsoft.icon"
}

const server = http.createServer((req, res) => {
    // 1）获取url
    // 2）url路径加到myweb目录后面
    // 3）定义 mime
    // 4）默认index跳转
    // 5）解决当前路径资源无法读取
    let { pathname } = url.parse(req.url)
    let extname = path.extname(pathname)
    if (!extname) {
        if (pathname.substr(-1) !== "/") {
            res.writeHead(302, 
                { 
                    'Location' : pathname +="/"
                })  // 自动给加上/（不加/被认为是本级目录下，加了认为是下级目录）
        }
        // 判断扩展名是否存在，如果不在就自动找到index.html文件
        pathname += "/index.html"
    }
    
    fs.readFile(`./myweb/${pathname}`, (err, data) => {
        if (err) {
            res.end('<h1>错误 error 404</h1>')  // throw new Error(err)
        } else {
            res.end(data)
        }
    })
})

server.listen(3000,'127.0.0.1')
console.log("server stared 3000 port ...")
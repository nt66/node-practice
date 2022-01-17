const http = require('http')
const serveStatic = require('serve-static')
const finalhandler = require('finalhandler')
const URL = require('url') // url对象
const querystring = require('querystring') //post对象解析
const console = require('console')

const serve = serveStatic('public',{'index':['a.html']})
const url = new URL();
const server = http.createServer((req,res)=>{
  //res.end('hello world')
  const pathName = url.pathname;
  console.log('pathName',pathName);
  // get请求通过url识别
  if(pathName === '/addStudent'){
    const { query } = url.parse(req.url,true);
    let body = "";
    console.log('query:',query.name, query.age);
    // post 请求通过on识别
    req.on('data',function(chunk){
      console.log('chunk:',chunk) // post 请求是 Buffer 对象
      body += chunk;
    });
    req.on('end',function(){
      const content = querystring.parse(body) // 获取post query对象
      console.log('content:',content.name,content.age);
    })
    res.end('ok')
  }
  
  serve(req,res,finalhandler(req,res))
})

server.listen(3000)
console.log('server 3000 is started')

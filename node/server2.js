var http = require('http');
var  url = require("url");
var fs = require('fs');
var a = 0;
http.createServer(function(req,res){
    let path = url.parse(req.url).pathname;
    if(path=='/'){
        fs.readFile('./index.html','utf-8',function(err,data) {
        res.writeHead(200,{'Content-Type':"text/html "})
            res.end(data)
        })
    }else{
        console.log('404')
     res.write('<h1>404</h1>')

    }
//    console.log(url.parse(req.url))
    //  res.write('<h1>hello</h1>')
    // res.end("world")
}).listen("4000")     /** http下面的一个方法可以 创建一个服务*/

console.log("服务已经创建");
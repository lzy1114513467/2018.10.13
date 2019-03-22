var http = require('http');
var  url = require("url")
var a = 0;
http.createServer(function(req,res){
    let path = url.parse(req.url).pathname;
    if(path=='/home'){
        console.log('home')
     res.end('<h1>home</h1>')

    }else if(path=='/about'){
        console.log('about')
     res.write('<h1>about</h1>')

    }else if(path=='/mine'){
        console.log('mine')
     res.write('<h1>mine</h1>')

    }else{
        console.log('404')
     res.write('<h1>404</h1>')

    }
//    console.log(url.parse(req.url))
     res.write('<h1>hello</h1>')
    res.end("world")
}).listen("3000")     /** http下面的一个方法可以 创建一个服务*/

console.log("服务已经创建");
var http = require('http')   /*引入模块*/
http.createServer(function(req,res){
     res.write('<h1>node js</h1>');   /*write方法可以xiang屏幕输出一些东西*/
     res.end('hello world131js  ');  /* supervisor  可以实现热重启*/
}).listen("4000");
console.log("服务运行于3000");
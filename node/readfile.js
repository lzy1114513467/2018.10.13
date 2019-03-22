var fs = require('fs');    /*引入fs模块*/
fs.readFile("./file/test.txt",'utf-8',function(err,data){
    if(err){
        console.log(err);
        console.log("文件读取失败");
    }else{
        console.log(data);
    }
})  /**  readfile是fs下的一个方法              utf-8 是为了确定编码格式 是中文的     这个回调函数 */ 
 console.log('读取文件');
 /**readfile  属于一个异步请求  和ajax 差不多  所以这个回调函数是放在任务队列里的  等主线程的
  * 任务都执行完  再去执行该回调函数的  请求
  */
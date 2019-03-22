var start = new Date; 
setTimeout(function(){
    var end = new Date;
    console.log("滞后时间：",end - start,   'ms');
},500);
while(new Date - start<1000){

}
/** node js是异步语言  在定时器 500ms 后  主线程任然有队列 
 * 所以需要在主线程的 while函数执行完毕后再去执行他的回调函数
 * 并不是 定时器先挂起来 500+1000 
 */
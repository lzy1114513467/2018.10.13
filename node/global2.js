var aa = require('./global1');
console.log(aa);
console.log(global.b);

process.nextTick(function(){
    console.log("123");
});
console.log("abc");
console.log('hello%s','world');
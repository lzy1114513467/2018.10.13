var util = require('util')

function Foo(){
    this.name = 'lisi'
}
Foo.prototype.showName = function(){
    console.log('this.name');
};
function Foo2(){

}
// var foo2 = new Foo();
// foo2.showName();
/**下面是原型间的继承 */

util.inherits()
util.inspect();
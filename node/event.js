var events = require('events');
var emitter  = new events.EventEmitter();
/**这个方法是为了我门做时间绑定用的 */

emitter.once('someevents',function(str){
    console.log(str);
})
// emitter.removeListener('someevents',)
emitter.emit("someevents","hello")
emitter.emit("someevents","world")
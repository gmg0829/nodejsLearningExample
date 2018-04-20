/**
 * Created by beikongguocai on 2017/3/28.
 */

var events=require('events');
var eventEmitter=new events.EventEmitter();
var eventHandle=function EventHandle( ) {
    console.log('连接成功');
    eventEmitter.emit('data_received');
}
eventEmitter.on('connection',eventHandle);
eventEmitter.on('data_received',function () {
    console.log('数据接收成功');
})
eventEmitter.emit('connection');
console.log('结束');
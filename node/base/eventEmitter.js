// 事件
var events = require("events");
console.log(events);
// 创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

var eventHandle = function (params) {
    console.log("eventName--触发data-receive",`这个是参数${params}`)
    eventEmitter.emit('data-receive',"我是参数");
};

var eventHandle2 = function (params) {
     console.log("data-receive---被触发",params)
};

// 绑定事件及对应的处理程序
eventEmitter.on("eventName", eventHandle);
eventEmitter.on("data-receive", eventHandle2);
// 触发事件

eventEmitter.emit("eventName",123);
eventEmitter.addListener("addlisent",function(){
    console.log("测试使用addlisenter")
})
eventEmitter.emit('addlisent');
// events 的内容
// {
//   once: [Function: once],
//   on: [Function: on],
//   EventEmitter: [Circular],
//   usingDomains: false,
//   captureRejectionSymbol: Symbol(nodejs.rejection),
//   captureRejections: [Getter/Setter],
//   errorMonitor: Symbol(events.errorMonitor),
//   defaultMaxListeners: [Getter/Setter],
//   init: [Function],
//   listenerCount: [Function]
// }

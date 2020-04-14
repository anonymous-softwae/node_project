// var http=require("http");
// var fs=require('fs');
// var server=http.createServer(function(req,res){
//     console.log(req.url);
//     if(req.url=='/vs'){
// var data1=fs.readFile('contactMap_1.html',function(err){
//         if(err) return console.error(err);
//          console.log("读取完成")      
//     })
//     res.writeHead(200,{'Content-type':'text/html'});
//     res.end(data1);
//     }
// })
// server.listen(8889);
// console.log("hello world!");
var EventEmitter= require('events').EventEmitter;
Evt=new EventEmitter();
Evt.on('time_delay_event', function () {
    console.log('time_delay_event执行', new Date().getTime());
    setTimeout(function () {Evt.emit('time_delay_event');}, 2000);
 });
Evt.emit('time_delay_event');

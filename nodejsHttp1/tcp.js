var net = require('net');

const PORT = 18001;
const HOST = '127.0.0.1';

//2有新连接
var clientHandler = function(socket){
  console.log('someone connected');

//	3收到数据
  socket.on('data', function dataHandler(data) {
    console.log(socket.remoteAddress, socket.remotePort, 'send', data.toString());
    //4 do something
    socket.write('server received\n');//5发送数据
  });

//	6断开连接
  socket.on('close', function(){
  	//此时socket已被销毁，无法获得ip or port
    console.log(socket.remoteAddress, socket.remotePort, 'disconnected');
  })
};

var app = net.createServer(clientHandler);

app.listen(PORT, HOST);//1监听
console.log('tcp server running on tcp://', HOST, ':', PORT);
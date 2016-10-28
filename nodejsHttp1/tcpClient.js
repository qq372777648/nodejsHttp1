var net = require('net');

const HOST = '127.0.0.1';
const PORT = 18001;

var tcpClient = net.Socket();

//1连接服务socket server
tcpClient.connect(PORT, HOST, function(){
  console.log('connect success.');
  //2 sent msg
  tcpClient.write('this is tcp client by Node.js');
});

//3 recieve data
tcpClient.on('data', function(data){
  console.log('received: ', data.toString());
});
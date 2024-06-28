const net = require("net");

// 创建一个TCP服务器实例，调用net.createServer()方法，返回一个新的net.Server对象
const server = net.createServer(function (socket) {
  // 新的连接
  socket.on("data", function (data) {
    console.log("接收消息:", data.toString());
    socket.write("发送消息:" + data);
  });

  socket.on("end", function () {
    console.log("连接断开");
  });

  socket.write("Client connected\n");
  console.log("Client connected");
});

server.listen(8124, function () {
  console.log("Server bound");
});

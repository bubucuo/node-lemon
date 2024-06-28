const net = require("net");

const client = net.connect({ port: 8124 }, function () {
  console.log("连接到服务器！");
  client.write("world！ \r\n");
});

client.on("data", function (data) {
  console.log("client发送消息：", data.toString());
  client.end();
});

client.on("end", function () {
  console.log("断开与服务器的连接");
});

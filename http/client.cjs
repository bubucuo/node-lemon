const http = require("http");

const options = {
  host: "localhost", // 服务器域名或IP地址，默认为localhost
  hostname: "localhost", // 服务器名称
  port: 1337, // 服务器端口，默认为80
  path: "/", // 请求路径，默认为'/'
  method: "GET", // 请求方法，默认为'GET'
};

const req = http.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);
  console.log(`headers: ${JSON.stringify(res.headers)}`);
  res.setEncoding("utf8");
  res.on("data", (chunk) => {
    console.log(chunk);
  });
});

req.end();

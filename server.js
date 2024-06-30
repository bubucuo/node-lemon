// server.mjs
import { createServer } from "node:http";
import { promises as fs } from "node:fs";

const server = createServer(async (request, response) => {
  // console.log("there is a request");
  // response.end("a response from server");
  // return;

  const { url, method, headers } = request;
  if (url === "/" && method === "GET") {
    const data = await fs.readFile("index.html", { encoding: "utf-8" });
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(data);
  } else if (url === "/users" && method === "GET") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify([{ name: "tom", age: 20 }]));
  } else {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/plain;charset=utf-8");
    response.end("404, 页面没有找到");
  }
});

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {});

// run with `node server.mjs`
// open http://localhost:3000/

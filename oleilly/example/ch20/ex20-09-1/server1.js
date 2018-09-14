const http = require("http");
const server = http.createServer(function (req, res) {
  console.log(`${req.method} ${req.url}`);
  res.end("Hello world!!");
});

const port = 8000;
server.listen(port, function () {
  console.log(`サーバーをポート${port}で開始`);
});
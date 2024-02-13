const http = require("http");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  // res.writeHead(200, {
  // "Content-type": "text/html; charset=utf-8",
  // "Content-type": "text/html;",
  // });
  // res.end("Сервер работает!");
  // res.end("<h1>HTML top</h1>");

  res.writeHead(200, {
    "Content-type": "application/json",
  });
  if (req.url === "/users") {
    return res.end(JSON.stringify([{ id: 1, name: "Ulya" }]));
  }
  if (req.url === "/posts") {
    return res.end("POSTS");
  }
  res.end(req.url);
});

server.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});

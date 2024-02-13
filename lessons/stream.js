// Readable
// Writable
// Duplex
// Transform

const fs = require("fs");
const path = require("path");

// fs.readFile(path.resolve(__dirname, "text.txt"), (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

// читаем с помощью стримов
// const stream = fs.createReadStream(path.resolve(__dirname, "text.txt"));
// один чанк по 64кБ
// stream.on("data", (chunk) => {
//   console.log(chunk);
// });

// stream.on("end", () => {
//   console.log("Закончили читать");
// });
// stream.on("open", () => {
//   console.log("Начали читать");
// });
// stream.on("error", (e) => {
//   console.log(e);
// });

// const writableStream = fs.createWriteStream(
//   path.resolve(__dirname, "test2.txt")
// );
// for (let i = 0; i < 20; i++) {
//   writableStream.write(i + "\n");
// }
// writableStream.end();
// writableStream.close();
// writableStream.destroy();
const http = require("http");
http.createServer(() => {
  //req - readable stream
  //res - writeble stream
  // const stream = fs.createReadStream(path.resolve(__dirname, "text.txt"));
  // стрим закончился читать раньше чем пользователь скачает
  // stream.on("data", (chunk) => {
  //   res.write(chunk);
  // });
  // stream.on("end", (chunk) => res.end());
  // для решения проблемы придумали stream.pipe
  // stream.pipe(res);
});

const path = require("path");

console.log("Склеить пути", path.join(__dirname, "first", "second", "third"));
console.log(
  "Получить абсолютный путь",
  path.resolve("first", "second", "third")
);

const fullPath = path.resolve(__dirname, "first", "second", "third.js");

console.log("Распарсить строку", path.parse(fullPath));
console.log("Разделить в ОС", path.sep);
console.log("Проверка на абсолютный путь", path.isAbsolute("first/second"));
console.log("Название файла", path.basename(fullPath));
console.log("Расширение файла", path.extname(fullPath));

//-------------------------------------

const siteUrl = "http://localhost:8080/users?id=5123";
const url = new URL(siteUrl);

console.log(url);

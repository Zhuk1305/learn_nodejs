const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
// позволяет создать папку
// fs.mkdirSync(path.resolve(__dirname, "dir"));
// fs.mkdirSync(path.resolve(__dirname, "dir", "dir1", "dir2"), {
//   recursive: true,
// }); // позволяет создать папку c вложенными папками

// fs.mkdir(path.resolve(__dirname, "dir", "dir2", "dir3"), (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Папка создана");
// });

// Удаление папок
// fs.rmdir(path.resolve(__dirname, "dir"), (err) => {
//   if (err) {
//     throw err;
//   }
// });

// создание файла и запись данных в него
// fs.writeFile(
//   path.resolve(__dirname, "test.txt"),
//   "some inforamtion, data",
//   (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("Файл записан");
//     // добавление данных в конец файла
//     fs.appendFile(
//       path.resolve(__dirname, "test.txt"),
//       " new infromation for the end",
//       (err) => {
//         if (err) {
//           throw err;
//         }
//         console.log("Файл записан");
//       }
//     );
//   }
// );

// Избегаем ад колбэков
// создание файла и запись данных в него
const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    });
  });
};

// добавление данных в конец файла
const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    });
  });
};

// Читаем файл
const readFileAsync = async (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        return reject(err.message);
      }
      resolve(data);
    });
  });
};

// Удаление файла
const removeFileAsync = async (path) => {
  return new Promise((resolve, reject) => {
    fs.rm(path, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    });
  });
};

// writeFileAsync(path.resolve(__dirname, "text.txt"), "data")
//   .then(() => appendFileAsync(path.resolve(__dirname, "text.txt"), "123"))
//   .then(() => appendFileAsync(path.resolve(__dirname, "text.txt"), "456"))
//   .then(() => appendFileAsync(path.resolve(__dirname, "text.txt"), "789"))
//   .then(() => readFileAsync(path.resolve(__dirname, "text.txt")))
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// removeFileAsync(path.resolve(__dirname, "text.txt")).then(() =>
//   console.log("file was removed")
// );

// Задача: Через переменную окружения передать строку, записать ее в файл
// прочитать файл, посчитать кол-во слов в файле и записать
// их в новый файл count.txt, затем удалить первый файл
const text = process.env.text || "";
writeFileAsync(path.resolve(__dirname, "Task_1.txt"), text)
  .then(() => readFileAsync(path.resolve(__dirname, "Task_1.txt")))
  .then((data) => data.split(" ").length)
  .then((count) =>
    writeFileAsync(path.resolve(__dirname, "count.txt"), `Кол-во слов ${count}`)
  )
  .then(() => removeFileAsync(path.resolve(__dirname, "Task_1.txt")));

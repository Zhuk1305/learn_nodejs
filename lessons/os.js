//для работы с ос
// const os = require("os");

//для работы с кластером
// const cluster = require("cluster");

// получение платформы на которой выполняется код
// console.log(os.platform());
// архитектура процессора
// console.log(os.arch());
// массив с описание ядер процессора (с помощью length можно получить кол-во ядер)
// console.log(os.cpus().length);

// if (cluster.isMaster) {
//   for (let i = 0; i < os.cpus().length - 2; i++) {
//     cluster.fork();
//   }
//   cluster.on("exit", (worker) => {
//     console.log(`Воркер с pid =${worker.process.pid} умер`);
//     cluster.fork();
//   });
// } else {
//   console.log(`Воркер с pid= ${process.pid} запущен`);
//   setInterval(() => {
//     console.log(`Воркер с pid= ${process.pid} ещё работает`);
//   }, 5000);
// }

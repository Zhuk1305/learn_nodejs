// const Emitter = require("events");

// const emitter = new Emitter();

// // пользовательское событие
// emitter.on("message", (data, second) => {
//   console.log("first " + data);
//   console.log("second " + second);
// });

// const MESSAGE = process.env.message || "";

// if (MESSAGE) {
//   // генерация событий
//   emitter.emit("message", MESSAGE, 123);
// } else {
//   emitter.emit("message", "Вы не указали сообщение");
// }

// Когда это используется
// - http
// - websockets
// - long pulling
// - clusters

// const callback = () => "Hello world";
// единожды
// emitter.once("message", callback);
// удалить слушателя
// emitter.removeListener("message", callback);
// удалить всех слушателя
// emitter.removeAllListeners();

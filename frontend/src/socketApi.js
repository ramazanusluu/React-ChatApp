import io from "socket.io-client";

let socket;

export const init = () => {
  console.log("Connecting...");
  socket = io("http://localhost:3000", {
    transports: ["websocket"],
  });
  socket.on("connect", () => console.log("Connected !"));
};

export const sendMessage = (message) => {
  if (socket) socket.emit("new-message", message);
};

//Mesajları dinleyecek olan fonksiyon backend/index.js dosyasındaki receive-message kanalını dinlememiz gerekiyor.

export const subscirbeChat = (cb) => {
  if (!socket) return;
  socket.on("receive-message", (message) => {
    console.log("Yeni mesajınız var ! ", message);
    cb(message);
  });
};

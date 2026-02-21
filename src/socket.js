import { io } from "socket.io-client";

export const socket = io("https://unknown-backend-baac.onrender.com/", {
  autoConnect: false,
  transports: ["websocket"]
});

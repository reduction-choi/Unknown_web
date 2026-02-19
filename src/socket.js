import { io } from "socket.io-client";

export const socket = io("https://animated-space-goldfish-g999xg4qjp5hpp9g-3001.app.github.dev/", {
  autoConnect: false,
  transports: ["websocket"]
});

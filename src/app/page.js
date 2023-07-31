import { io } from "socket.io-client";

export default function Home() {
  const socket = io();

  socket.on("connect", () => {
    console.log("Conectado:");
  });
  socket.on("disconnect", () => {
    console.log("Desconectado do servidor Socket.IO");
  });

  return (
    <>
      <p>opa</p>
    </>
  );
}



import { Socket } from "socket.io";

export default (io: any) => {
    io.on("connection", (socket: Socket) => {
      // console.log(socket.handshake.url);
      console.log("nuevo socket connectado:", socket.id);

      socket.on("client:message", () => {
          console.log("Nuevo mensaje");
          const resp = "Se ha enviado un nuevo mensaje"
          io.emit("server:newmessage", resp)
      })
  
    });
  };
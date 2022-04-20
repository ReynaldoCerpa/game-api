import { Socket } from "socket.io";

export default (io: any) => {
    io.on("connection", (socket: Socket) => {
      // console.log(socket.handshake.url);
      console.log("nuevo socket connectado:", socket.id);

      socket.on("client:message", (msg) => {
          console.log(msg);
          io.emit("server:newmessage", msg)
      })
  
    });
  };

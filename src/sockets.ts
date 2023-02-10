import { Socket } from "socket.io";

export default (io: any) => {
	const socketCounter = 0

    io.on("connection", (socket: Socket) => {
	  socketCounter++
      // console.log(socket.handshake.url);
      console.log("nuevo socket connectado:", socket.id);

	  if (socketCounter == 2){
		io.emit("server:startcounter")
	  }

	  socket.on("client:counterend", () => {
		for (let i = 0; i < 3; i++) {
		  setTimeout(() => {
			let randnum = Math.floor(Math.random() * (19 - 11) + 11)
			io.emit("server:newnumber",randnum)
		  }, 5000)
		}
	  })

      socket.on("client:message", (msg) => {
          console.log(msg);
          io.emit("server:newmessage", msg)
      })
  
    });
  };

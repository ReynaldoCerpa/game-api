import express from "express";
import { Server as WebSocketServer } from "socket.io";
import http from "http";
import Sockets from "./sockets";

const app = express();
const server = http.createServer(app);

const httpServer = server.listen(8080);
console.log("Server on http://localhost:8080");

const io = new WebSocketServer(httpServer);

Sockets(io);

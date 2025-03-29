import { Server } from "socket.io";
import { createServer } from "http";

const httpServer = createServer();
const io = new Server(httpServer, {cors: { origin: "*" }});

io.on("connection", (socket) => {
    console.log("A user connected", socket.id);
    
    socket.on("offer", (offer) => {
        socket.broadcast.emit("offer", offer);
    });

    socket.on("answer", (answer) => {
        socket.broadcast.emit("answer", answer);
    });

    socket.on("iceCandidate", (candidate) => {
        socket.broadcast.emit("iceCandidate", candidate);
    });
});

httpServer.listen(3001, () => console.log("Socket.io server running on port 3001"));
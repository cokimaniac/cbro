const http = require("http");
const socketIo = require("socket.io");

require("dotenv").config();
// modules
const app = require("./app");
const db = require("./db");

const server = http.createServer(app);
const config = {
    host: process.env.HOST,
    port: process.env.PORT || 5000
};

db();

const io = socketIo(server, {   
    cors: {
        origin: "http://localhost:3000"
    }
});

io.on("connect", (socket) => {
    socket.emit("test", getInfo());
});

const getInfo = () => {
    return [
	{
		name: "John",
		age: 23,
	},
	{
		name: "Dorothy",
		age: 36
	},
    ]

server.listen(config.port, () => console.log(`Server running at ${config.host}:${config.port}`));

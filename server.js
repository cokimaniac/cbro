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
            name: "Jorge Luis",
            age: 29
        },
        {
            name: "Lucas Jorge",
            age: 3
        },
        {
            name: "Marisela",
            age: 29
        },
        {
            name: "Jorge Dalmiro",
            age: 64
        },
        {
            name: "Nancy Gladys",
            age: 62
        }
    ];
}

server.listen(config.port, () => console.log(`Server running at ${config.host}:${config.port}`));
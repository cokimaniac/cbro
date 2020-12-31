const http = require("http");
const mongoose = require("mongoose");
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
server.listen(config.port, () => console.log(`Server running at ${config.host}:${config.port}`));
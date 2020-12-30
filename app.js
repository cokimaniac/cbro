const bodyParser = require("body-parser");
const express = require("express");
const userRoutes = require("./users/routes");

// App Instance
const app = express();

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Main Routes
app.use("/users", userRoutes);

module.exports = app;
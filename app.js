const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
// modules
const userRoutes = require("./api/users/routes");
const debtorRoutes = require("./api/debtors/routes");

// App Instance
const app = express();

// CORS
app.use(cors());

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Main Routes
app.use("/users", userRoutes);
app.use("/debtors", debtorRoutes);

module.exports = app;
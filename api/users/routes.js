const express = require("express");
//modules
const controller = require("./controller");
const { verifyToken } = require("../../network/middleware");
// Route instance
const router = express.Router();

// requires authorization token
router.get("/", verifyToken, controller.list);
router.get("/profile", verifyToken, controller.profile);
router.get("/:userID", verifyToken, controller.retrieve);
router.delete("/:userID", verifyToken, controller.delete);

// public routes
router.post("/signup", controller.create);
router.post("/login", controller.login);


module.exports = router;
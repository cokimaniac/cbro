const express = require("express");
//modules
const {
  list , profile, retrieve, remove, create, login
} = require("./controller");
const { verifyToken } = require("../../network/middleware");
// Route instance
const router = express.Router();

// requires authorization token
router.get("/", verifyToken, list);
router.get("/profile", verifyToken, profile);
router.get("/:userID", verifyToken, retrieve);
router.delete("/:userID", verifyToken, remove);

// public routes
router.post("/signup", create);
router.post("/login", login);


module.exports = router;
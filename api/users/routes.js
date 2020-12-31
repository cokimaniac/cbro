const express = require("express");
//modules
const controller = require("./controller");
// Route instance
const router = express.Router();

router.get("/", controller.list);
router.post("/signup", controller.create);
router.get("/:userID", controller.retrieve);
router.delete("/:userID", controller.delete);

module.exports = router;
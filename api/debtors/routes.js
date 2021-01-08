const router = require("express").Router();

//modules
const {
  list, create,
  listAmmounts, addAmmount

} = require("./controller");
const { verifyToken } = require("../../network/middleware");

// debtors
router.get("/", verifyToken, list);
router.post("/", verifyToken, create);
// ammounts
router.get("/:debtorID", verifyToken, listAmmounts);
router.post("/:debtorID", verifyToken, addAmmount);

module.exports = router;
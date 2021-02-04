const router = require("express").Router();

//modules
const {
  list, create, retrieve,
  listAmmounts, addAmmount, retrieveAmmount

} = require("./controller");
const { verifyToken } = require("../../network/middleware");

// debtors
router.get("/", verifyToken, list);
router.post("/", verifyToken, create);
router.get("/:debtorID", verifyToken, retrieve);
// ammounts
router.get("/:debtorID/ammounts", verifyToken, listAmmounts);
router.post("/:debtorID/ammounts", verifyToken, addAmmount);
router.get("/:debtorID/ammounts/:ammountID", verifyToken, retrieveAmmount);

module.exports = router;
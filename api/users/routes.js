const express = require("express");
// Route instance
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200);
  res.send({message: "GET Users"});
});

router.post("/", (req, res, next) => {
  let data = {
    name: req.body.name,
    age: req.body.age
  };
  res.status(201);
  res.send(data);
});

router.get("/:userID", (req, res, next) => {
  res.status(200);
  res.send({message: "GET User", id: req.params.userID});
})

module.exports = router;
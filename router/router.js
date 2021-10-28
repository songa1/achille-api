const express = require("express");
const newUserCont = require("../controllers/newUser")
const router = express.Router();

router.get("/", async(req, res)=>{
  res.send("Welcome to Achille Songa API!");
})

router.post("/subscribe", newUserCont);

module.exports = router;
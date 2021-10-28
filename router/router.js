const express = require("express");
const newSubCont = require("../controllers/newSub")
const router = express.Router();

router.get("/", async(req, res)=>{
  res.send("Welcome to Achille Songa API!");
})

router.post("/subscribe", newSubCont);

module.exports = router;
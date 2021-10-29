const express = require('express');
const route = require("./router/router");
const cors = require('cors');
require('dotenv').config();
require('./db/connect');

const app = express();

app.use(cors())

app.use(express.json());

const port = process.env.PORT || 2701;

app.listen(port, ()=>{
  console.log(`Now listening to requests! on port ${port}`);
});

app.use("/achille/api", route);
app.get("/", (req, res)=> {
  res.send("App running!");
})

module.exports = app;
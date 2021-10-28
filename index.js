const express = require('express');
const route = require("./router/router")
require('dotenv').config();
require('./db/connect');

const app = express();

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
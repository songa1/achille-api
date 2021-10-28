const express = require('express');
const route = require("./router/router")
require('dotenv').config();
require('./db/connect');

const app = express();

app.use(express.json());

app.listen(process.env.PORT || 2701, ()=>{
  console.log('Now listening to requests!');
});

app.use("/achille/api", route);

module.exports = app;
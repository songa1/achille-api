const express = require('express');
const http = require('http');
const Router = require("../router/router.js")
require('dotenv').config()

const app = express();

app.use(express.json());

app.use("/achille/api", Router);

mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
  );

  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });

app.listen('5000', ()=>{
  console.log("App running on port 5000");
});
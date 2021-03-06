const Subscriber = require("../models/models");
const mongoose = require('mongoose');

const newSubscriber = async(req, res)=> {
    const sub = await new Subscriber({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      email: req.body.email,
      createdAt: Date.now()
    });

    sub.save()
    .then(async(subscribe)=> {
      res.status(201).send(subscribe);
      console.log(subscribe)
    })
    .catch(err=>{
      res.status(500).send(err.message)
      console.log(err)
    })
}

module.exports = newSubscriber;
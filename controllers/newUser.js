const userModel = require("../models/models");

const newUser = async()=> {
    const user = new userModel(request.body);
  
    try {
      await user.save();
      response.status(200).send("You have subscribed successfully!");
      console.log(user)
    } catch (error) {
      response.status(500).send(error.message);
      console.log(error.message)
    }
}

module.exports = newUser;
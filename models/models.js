const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: { 
    type: Date 
  },
});

const Subscriber = mongoose.model("subscriber", UserSchema);

module.exports = Subscriber;
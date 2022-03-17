const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    unique: true,
    required: true,
  },
  location: {
    address: String,
    lat: String,
    long: String,
  },
  children: [],
  average_reponse_time: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);

const mongoose = require("mongoose");

const ChildSchema = mongoose.Schema({
  photo: String,
  name: {
    type: String,
    required: true,
  },
  reporingDetails: {
    type: mongoose.Types.ObjectId,
    ref: "Report",
  },
  FatherName: String,
  MotherName: String,
  Religion: String,
  Caste: String,
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  homeAddress: String,
  currentAddress: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  aadhaar: Number,
  educationalDetails: {
    nameOfCentre: String,
    board: String,
    passout: String,
    image: {
      type: String,
      required: true,
    },
  },
  BPL: String,
  RationCard: String,
  TransitionDetials: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Transaction",
    },
  ],
  STC: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Child", ChildSchema);

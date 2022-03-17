const mongoose = require("mongoose");

const ReportSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  reportingLocation: {
    type: String,
    required: true,
  },
  reportersName: {
    type: String,
    required: true,
  },
  reportersNumber: {
    type: Number,
    required: true,
  },
  concern: {
    type: String,
    enum: ["AVERAGE", "BAD", "VERY BAD"],
    default: "AVERAGE",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Report", ReportSchema);

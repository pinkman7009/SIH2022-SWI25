const mongoose = require("mongoose");

const ReportSchema = mongoose.Schema({
  photo: {
    type: String,
  },
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
  lat: String,
  long: String,
  reportersName: {
    type: String,
    required: true,
  },
  reportersNumber: {
    type: Number,
    required: true,
  },
  severity: {
    type: String,
    enum: ["Normal", "Moderate", "High", "Critical"],
    default: "Moderate",
  },
  status: {
    type: String,
    enum: ["Accepted", "Pending", "Denied"],
    default: "Pending",
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Report", ReportSchema);

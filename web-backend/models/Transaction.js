const mongoose = require("mongoose");

const TransactionSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  verificaitonImage: {
    type: String,
    required: true,
  },
  child: {
    type: mongoose.Types.ObjectId,
    ref: "Child",
    required: true,
  },
});

module.exports = mongoose.model("Transaction", TransactionSchema);

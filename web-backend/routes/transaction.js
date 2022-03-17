const express = require("express");
const router = express.Router();
const Transaciton = require("../models/Transaction");
const { protect } = require("../middleware/auth");

router.post("/", protect, async (req, res) => {
  try {
    const transaction = new Transaciton(req.body);

    await transaction.save();

    res.status(201).json({
      message: "Transaction saved succesfully",
    });
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
});

router.get("/", protect, async (req, res) => {
  try {
    const transactions = await Transaciton.find();

    res.status(201).json({
      transactions: transactions,
    });
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
});

router.get("/:id", protect, async (req, res) => {
  try {
    const transaction = await Transaciton.find(req.params.id);

    res.status(201).json({
      transaction: transaction,
    });
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
});

router.delete("/:id", protect, async (req, res) => {
  try {
    await Transaciton.findByIdAndRemove(req.params.id);

    res.status(201).json({
      message: "Transaction Deleted",
    });
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;

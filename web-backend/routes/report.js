const express = require("express");
const router = express.Router();
const Report = require("../models/Report");
const { protect } = require("../middleware/auth");

router.post("/", async (req, res) => {
  try {
    const report = new Report(req.body);

    await report.save();

    res.status(201).json({
      message: "Report saved succesfully",
    });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
});

router.get("/", protect, async (req, res) => {
  try {
    const reports = await Report.find();

    res.status(201).json({
      reports: reports,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Server Error",
    });
  }
});

router.get("/:id", protect, async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);

    res.status(201).json({
      report: report,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Server Error",
    });
  }
});

router.put("/:id", protect, async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);

    report.status = req.status || report.status;

    await report.save();

    res.status(201).json({
      report: report,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;

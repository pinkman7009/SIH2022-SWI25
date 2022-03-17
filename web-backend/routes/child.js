const express = require("express");
const router = express.Router();
const Child = require("../models/Child");
const { protect } = require("../middleware/auth");

router.post("/", protect, async (req, res) => {
  try {
    const child = new Child(req.body);

    await child.save();

    res.status(201).json({
      message: "Child saved succesfully",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Server Error",
    });
  }
});

router.get("/", protect, async (req, res) => {
  try {
    const children = await Child.find();

    res.status(201).json({
      children: children,
    });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
});

router.get("/:id", protect, async (req, res) => {
  try {
    const child = await Child.findById(id);

    res.status(201).json({
      child: child,
    });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
});

router.get("/:id", protect, async (req, res) => {
  try {
    const child = await Child.findById(req.params.id);

    res.status(201).json({
      child: child,
    });
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
});

router.put("/:id", protect, async (req, res) => {
  try {
    const child = await Child.findById(res.params.id);

    req.photo = child.photo || req.photo;
    req.guardianName = child.guardianName || req.guardianName;
    req.homeAddress = child.homeAddress || req.homeAddress;
    req.aadhaar = child.aadhaar || req.aadhaar;
    req.educationalDetails = child.educationalDetails || req.educationalDetails;
    req.BPL = child.BPL || req.BPL;
    req.RationCard = child.RationCard || req.RationCard;
    if (child.TransactionDetials !== null) {
      req.TransactionDetials.push(child.TransactionDetials);
    }

    await child.save();

    res.status(200).json({
      child: child,
    });
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
});

router.delete("/:id", protect, async (req, res) => {
  try {
    await Child.findByIdAndRemove(res.params.id);

    res.status(200).json({
      message: "Child deleted successfully",
    });
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;

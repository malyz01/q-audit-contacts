const express = require("express");
const router = express.Router();
const Auditor = require("../models/auditor");

router.get("/", async (req, res, next) => {
  try {
    const auditors = await Auditor.find({});
    res.status(200).json(auditors);
  } catch (err) {
    return next({
      status: 400,
      message: err.message
    });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const auditor = await Auditor.findById(req.params.id);
    res.status(200).json(auditor);
  } catch (err) {
    return next({
      status: 400,
      message: err.message
    });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const auditor = await Auditor.create(req.body);
    res.status(200).json(auditor);
  } catch (err) {
    return next({
      status: 400,
      message: err.message
    });
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const auditor = await Auditor.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(auditor);
  } catch (err) {
    return next({
      status: 400,
      message: err.message
    });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const auditor = await Auditor.findByIdAndDelete(req.params.id);
    res.status(200).json(auditor);
  } catch (err) {
    return next({
      status: 400,
      message: err.message
    });
  }
});

module.exports = router;

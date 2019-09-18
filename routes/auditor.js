const express = require("express");
const router = express.Router();
const Auditor = require("../models/auditor");

router.get("/", async (req, res, next) => {
  try {
    res.send("Auditor route");
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
    res.status(200).json(lease);
  } catch (err) {
    return next({
      status: 400,
      message: err.message
    });
  }
});

module.exports = router;

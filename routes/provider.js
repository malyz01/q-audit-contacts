const express = require("express");
const router = express.Router();
const Provider = require("../models/provider");

router.get("/", async (req, res, next) => {
  try {
    const providers = await Provider.find({});
    res.status(200).json(providers);
  } catch (err) {
    return next({
      status: 400,
      message: err.message
    });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const provider = await Provider.findById(req.params.id);
    res.status(200).json(provider);
  } catch (err) {
    return next({
      status: 400,
      message: err.message
    });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const provider = await Provider.create(req.body);
    res.status(200).json(provider);
  } catch (err) {
    return next({
      status: 400,
      message: err.message
    });
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const provider = await Provider.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(provider);
  } catch (err) {
    return next({
      status: 400,
      message: err.message
    });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const provider = await Provider.findByIdAndDelete(req.params.id);
    res.status(200).json(provider);
  } catch (err) {
    return next({
      status: 400,
      message: err.message
    });
  }
});

module.exports = router;

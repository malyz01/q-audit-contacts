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

// model.find({
//   '_id': {
//     $in: [
//       mongoose.Types.ObjectId('4ed3ede8844f0f351100000c'),
//       mongoose.Types.ObjectId('4ed3f117a844e0471100000d'),
//       mongoose.Types.ObjectId('4ed3f18132f50c491100000e')
//     ]
//   }
// }, function (err, docs) {
//   console.log(docs);
// });

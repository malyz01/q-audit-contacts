const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema({
  dateCreated: { type: Date, default: Date.now() },
  withAppRef: Boolean,
  data: {
    legalName: String,
    tradingName: String,
    applicationRefNumber: String,
    registrationNumber: String,
    location: String,
    country: String
  },
  audits: [{ type: mongoose.Schema.Types.ObjectId, ref: "Audit" }]
});

module.exports = mongoose.model("Provider", providerSchema);

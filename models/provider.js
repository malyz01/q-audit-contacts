const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema({
  dateCreated: Date,
  legalName: String,
  tradingName: String,
  applicationRefNumber: String,
  registrationNumber: String,
  location: String,
  country: String,
  audits: [{ type: mongoose.Schema.Types.ObjectId, ref: "Audit" }]
});

module.exports = mongoose.model("Provider", providerSchema);

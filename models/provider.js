const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema({
  dateCreated: { type: Date, default: Date.now() },
  isAppRefLinked: Boolean,
  data: {
    legalName: { type: String, default: "" },
    tradingName: { type: String, default: "" },
    applicationRefNumber: { type: String, default: "" },
    registrationNumber: { type: String, default: "" },
    contactPerson: { type: String, default: "" },
    contactEmail: { type: String, default: "" },
    contactMobile: { type: String, default: "" },
    location: { type: String, default: "" },
    country: { type: String, default: "" }
  },
  audits: [{ type: mongoose.Schema.Types.ObjectId, ref: "Audit" }]
});

module.exports = mongoose.model("Provider", providerSchema);

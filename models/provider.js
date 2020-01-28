const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema({
  dateCreated: { type: Date, default: Date.now() },
  isLinked: Boolean,
  isNew: Boolean,
  data: {
    legalName: { type: String, default: "" },
    tradingName: { type: String, default: "" },
    applicationRefNumber: { type: String, default: "" },
    registrationNumber: { type: String, default: "" },
    contacts: [
      {
        _id: false,
        name: String,
        email: String,
        mobile: String
      }
    ],
    headOffice: { type: String, default: "" },
    auditAddress: { type: String, default: "" },
    outlets: [],
    country: { type: String, default: "" }
  },
  audits: [{ _id: false, type: mongoose.Schema.Types.ObjectId, ref: "Audit" }]
});

module.exports = mongoose.model("Provider", providerSchema);

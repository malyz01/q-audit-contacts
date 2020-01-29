const mongoose = require("mongoose");

const auditSchema = new mongoose.Schema({
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Provider"
  },
  auditors: [
    {
      _id: false,
      auditor: { type: mongoose.Schema.Types.ObjectId, ref: "Auditor" },
      dateAssigned: Date,
      type: String //Lead, Observer, Support, In training, Peer Review
    }
  ],
  data: {
    startDate: { type: Date, default: "" },
    endDate: { type: Date, default: "" },
    dateStatus: { type: String, default: "" }, //Proposed, Tentative, Confirmed
    standards: [{ _id: false, type: String }], //NDIS, ISO, ACIS2018, ISO 9000
    // alternate - ndis: { type: mongoose.Schema.Types.ObjectId, ref: "NDIS" },
    standardDetails: [
      { type: mongoose.Schema.Types.ObjectId, ref: "NDIS" },
      { type: mongoose.Schema.Types.ObjectId, ref: "ACIS2018" },
      { type: mongoose.Schema.Types.ObjectId, ref: "HSQF" },
      { type: mongoose.Schema.Types.ObjectId, ref: "ISO9000" }
    ],
    auditAddress: { type: String, default: "" },
    country: { type: String, default: "" }
  },
  comments: [
    {
      date: Date,
      message: String
    }
  ]
});

module.exports = mongoose.model("Audit", auditSchema);

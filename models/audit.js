const mongoose = require("mongoose");

const auditSchema = new mongoose.Schema({
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Provider"
  },
  status: { type: String, default: "Pending" }, //Cancelled, Postponed, Completed
  auditors: [
    {
      _id: false,
      auditor: { type: mongoose.Schema.Types.ObjectId, ref: "Auditor" },
      dateAssigned: Date,
      type: String //Lead, Observer, Support, In training, Peer Review
    }
  ],
  data: {
    country: { type: String, default: "" },
    auditAddress: { type: String, default: "" },
    startDate: { type: Date, default: "" },
    endDate: { type: Date, default: "" },
    dateStatus: { type: String, default: "" }, //Proposed, Tentative, Confirmed
    standards: [{ _id: false, type: String, unique: true }], //NDIS, ISO, ACIS2018, ISO9000
    ndis: { type: mongoose.Schema.Types.ObjectId, ref: "NDIS" },
    acis2018: { type: mongoose.Schema.Types.ObjectId, ref: "ACIS2018" },
    hsqf: { type: mongoose.Schema.Types.ObjectId, ref: "HSQF" },
    iso9000: { type: mongoose.Schema.Types.ObjectId, ref: "ISO9000" }
  },
  comments: [
    {
      date: Date,
      message: String,
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    }
  ]
});

module.exports = mongoose.model("Audit", auditSchema);

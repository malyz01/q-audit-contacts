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
    proposalSignedDate: { type: Date, default: "" },
    startDate: { type: Date, default: "" },
    endDate: { type: Date, default: "" },
    dateStatus: { type: String, default: "" },
    standards: [{ _id: false, type: String }], //NDIS, ISO, ACIS2018, ISO 9000
    auditType: { type: String, default: "" }, // Certification, 1st Surveillance, 2nd Surveillance, Maintenance, Verification
    auditStatus: { type: String, default: "" }, //Pending, In Progress, Recommended, STC, Completed, Cancelled
    location: { type: String, default: "" },
    country: { type: String, default: "" },
    deadlineSubmission: { type: Date, default: "" },
    submittedOn: { type: Date, default: "" },
    approvedByCommission: { type: Date, default: "" }
  },
  progress: { type: mongoose.Schema.Types.ObjectId, ref: "Progress" },
  comments: [
    {
      date: Date,
      message: String
    }
  ]
});

module.exports = mongoose.model("Audit", auditSchema);

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
    proposalSignedDate: Date,
    startDate: Date,
    endDate: Date,
    dateStatus: String,
    standards: [{ _id: false, type: String }], //NDIS, ISO, ACIS2018
    auditType: String, // Certification, 1st Surveillance, 2nd Surveillance, Maintenance, Verification
    auditStatus: String, //Pending, In Progress, Recommended, STC, Completed, Cancelled
    location: String,
    country: String,
    deadlineSubmission: Date,
    submittedOn: Date,
    approvedByCommission: Date
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

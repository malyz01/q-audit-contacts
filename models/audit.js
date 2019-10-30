const mongoose = require("mongoose");

const auditSchema = new mongoose.Schema({
  isNew: Boolean,
  isVerification: Boolean,
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Provider"
  },
  auditors: [
    {
      id: { type: mongoose.Schema.Types.ObjectId, ref: "Auditor" },
      dateAssigned: Date,
      type: String //Lead, Observer, Support, In training, Peer Review
    }
  ],
  data: {
    startDate: Date,
    endDate: Date,
    dateStatus: String,
    standards: [String],
    auditType: String, // Certification, 1st Surveillance, 2nd Surveillance, Verification
    auditStatus: String,
    location: String,
    country: String,
    deadlineSubmission: Date,
    submittedOn: Date,
    approvedByCommission: Date
  },
  progress: {
    verification: { type: mongoose.Schema.Types.ObjectId, ref: "Verification" }
  },
  comments: [
    {
      date: Date,
      message: String
    }
  ]
});

module.exports = mongoose.model("Audit", auditSchema);

const mongoose = require("mongoose");

const auditSchema = new mongoose.Schema({
  startDate: Date,
  endDate: Date,
  dateStatus: String,
  provider: {
    id: { type: mongoose.Schema.Types.ObjectId, ref: "Provider" },
    tradingName: String
  },
  standards: [String],
  auditType: String, // Certification, 1st Surveillance, 2nd Surveillance, Verification
  auditStatus: String,
  auditors: [
    {
      id: { type: mongoose.Schema.Types.ObjectId, ref: "Auditor" },
      name: String,
      type: String //Lead, Observer, Support, In training, Peer Review
    }
  ],
  location: String,
  country: String,
  progress: { type: mongoose.Schema.Types.ObjectId, ref: "Progress" },
  deadlineSubmission: Date,
  submittedOn: Date,
  approvedByCommission: Date,
  comments: [
    {
      date: Date,
      message: String
    }
  ]
});

module.exports = mongoose.model("Audit", auditSchema);

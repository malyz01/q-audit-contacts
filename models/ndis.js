const mongoose = require("mongoose");

const ndisSchema = new mongoose.Schema({
  audit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "audit"
  },
  data: {
    proposalSignedDate: { type: Date, default: null },
    isLinked: { type: Boolean, default: false },
    newRenew: { type: String, default: "" },
    applicationRefNumber: { type: String, default: "" },
    applicationId: { type: String, default: "" },
    auditType: { type: String, default: "" }, // Certification, 1st Surveillance, 2nd Surveillance, Maintenance, Verification
    auditStatus: { type: String, default: "" }, //Pending, In Progress, Recommended, STC, Completed, Cancelled
    outlets: [
      {
        branchName: { type: String, default: "" },
        address: { type: String, default: "" }
      }
    ],
    modules: [],
    registrationGroups: [],
    participantGroups: [],
    ageGroups: [],
    deadlineSubmission: { type: Date, default: "" },
    submittedOn: { type: Date, default: "" },
    approvedDate: { type: Date, default: "" }
  },
  progress: { type: mongoose.Schema.Types.ObjectId, ref: "Progress" },
  comments: [
    {
      date: Date,
      message: String
    }
  ]
});

module.exports = mongoose.model("NDIS", ndisSchema);

const mongoose = require("mongoose");

const verificationSchema = new mongoose.Schema({
  dateStarted: Date,
  scopeSaved: Boolean,
  updatedNDISExcelList: Boolean,
  proposalCreated: Boolean,
  sentProposal: Boolean,
  createdClientFolder: Boolean,
  saveSignedProposal: Boolean,
  reqAppRefNum: Boolean,
  provideVerificationModule: Boolean,
  addDropGroup: Boolean,
  receivedEvidence: Boolean,
  isEvidenceComplete: Boolean,
  lastEvidenceReviewed: Date,
  followUpClient: [
    {
      date: Date,
      comment: String
    }
  ],
  verificationReportCreated: Boolean,
  auditStatus: String
});

module.exports = mongoose.model("Verification", verificationSchema);

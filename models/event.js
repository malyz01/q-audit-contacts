const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  dateCreated: { type: Date, Default: Date.now() },
  startDate: Date,
  endDate: Date,
  status: String, //Tentative, Proposed, Confirmed, Done
  provider: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Provider"
    },
    name: String
  },
  auditDetail: { type: mongoose.Schema.Types.ObjectId, ref: "AuditDetail" },
  auditType: String, //Certification,  1st Surveillance, 2nd Surveillance, Verification
  standards: String, // NDIS, ACIS 2018, etc
  auditors: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Auditor"
      },
      name: String,
      type: String, //Observer, In Training, Support, Lead
      status: String //Pending or Confirmed
    }
  ],
  withPacks: { type: Boolean, default: false }
});

module.exports = mongoose.model("Event", eventSchema);

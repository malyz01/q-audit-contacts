const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema({
  dates: {
    cancelledDates: [
      {
        startDate: Date,
        endDate: Date,
        notes: String,
        withPacks: { type: Boolean, default: false }
      }
    ],
    displayDate: {
      startDate: Date,
      endDate: Date,
      status: String //Tentative, Proposed, Confirmed, Done
    }
  },
  numberOfDaysOfAudit: String,
  name: String,
  address: String,
  auditType: String, //Certification, 1st Surveillance, 2nd Surveillance
  standards: [String], // NDIS, ACIS2018, ACIS2013, ISO, HSQF
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
  archive: {
    auditsDone: [
      {
        address: String,
        startDate: Date,
        endDate: Date,
        approvedDate: Date,
        scope: String,
        typeOfAudit: String,
        auditors: [
          {
            id: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Auditor"
            },
            name: String,
            type: String
          }
        ],
        nextAuditDate: {
          // +12 months based on approved date
          date: Date,
          notes: String
        }
      }
    ]
  }
});

module.exports = mongoose.model("Provider", providerSchema);

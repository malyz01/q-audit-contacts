const mongoose = require("mongoose");

const auditorSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: { type: String, unique: true },
  mobile: [{ type: String, unique: true }],
  location: String,
  preferredAuditLocation: String,
  type: String, // Observer, In Training, Support, Lead
  country: String, // NZ, AU, NZ/AU
  amountOfAudits: {
    nz: {
      observer: { type: Number, default: 0 },
      inTraining: { type: Number, default: 0 },
      support: { type: Number, default: 0 },
      lead: { type: Number, default: 0 }
    },
    au: {
      observer: { type: Number, default: 0 },
      inTraining: { type: Number, default: 0 },
      support: { type: Number, default: 0 },
      lead: { type: Number, default: 0 }
    }
  },
  audits: [
    {
      auditId: { type: mongoose.Schema.Types.ObjectId, ref: "Audit" },
      evaluation: {
        date: Date,
        leadAuditor: String,
        isSubmitted: Boolean
      },
      hours: {
        offiste: Number,
        onsite: Number,
        total: Number
      }
    }
  ],
  notes: [
    {
      date: Date,
      message: String
    }
  ],
  inviteToken: String,
  inviteTokenExpires: Date
});

module.exports = mongoose.model("Auditor", auditorSchema);

/*
Location
Preferred Audit Location
Confirmation of observation Audits completed - Yes/No
  - client name
  - date
  - lead auditor name
  - lead auditor evaluation - Yes/No
*/

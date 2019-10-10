const mongoose = require("mongoose");

const auditorSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: { type: String, unique: true },
  mobile: [{ type: String, unique: true }],
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
  audits: {
    pending: [
      {
        startDate: Date,
        endDate: Date,
        type: String, //Observer, In Training, Support, Lead
        typeOfAudit: String, //Certification or Surveillance
        country: String, //AU, NZ, AU/NZ
        provider: String,
        hours: {
          total: Number,
          onsite: Number,
          offsite: Number
        },
        note: [{ date: Date, message: String }]
      }
    ],
    completed: [
      {
        startDate: Date,
        endDate: Date,
        type: String, //Observer, In Training, Support, Lead
        typeOfAudit: String, //Certification or Surveillance
        country: String, //AU, NZ, AU/NZ
        provider: String,
        hours: {
          total: Number,
          onsite: Number,
          offsite: Number
        },
        note: [{ date: Date, message: String }]
      }
    ]
  },
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

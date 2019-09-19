const mongoose = require("mongoose");

const auditorSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  mobile: String,
  type: String,
  country: String,
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
        provider: String
      }
    ],
    finish: [
      {
        startDate: Date,
        endDate: Date,
        type: String, //Observer, In Training, Support, Lead
        typeOfAudit: String, //Certification or Surveillance
        country: String, //AU, NZ, AU/NZ
        provider: String
      }
    ]
  },
  notes: [
    {
      date: Date,
      message: String
    }
  ]
});

module.exports = mongoose.model("Auditor", auditorSchema);

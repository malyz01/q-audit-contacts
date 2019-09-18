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
      observer: Number,
      inTraining: Number,
      support: Number,
      lead: Number
    },
    au: {
      observer: Number,
      inTraining: Number,
      support: Number,
      lead: Number
    }
  },
  audits: {
    pending: [
      {
        date: Date,
        type: String,
        country: String,
        provider: String
      }
    ],
    finish: [
      {
        date: Date,
        type: String,
        country: String,
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

exports = mongoose.model("Auditor", auditorSchema);

const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  verification: {
    proposal: {
      dateReceived: String, //date
      isSigned: { type: Boolean, default: false }
    },
    evidences: {
      provider: {
        whs: { type: Boolean, default: false },
        incident: { type: Boolean, default: false },
        complaints: { type: Boolean, default: false }
      },
      employees: [
        {
          _id: false,
          name: String,
          insurance: { type: Boolean, default: false },
          id70: { type: Boolean, default: false },
          id40: { type: Boolean, default: false },
          rightToWork: { type: Boolean, default: false },
          qualification: { type: Boolean, default: false },
          wwcc: { type: Boolean, default: false },
          policeCheck: { type: Boolean, default: false },
          workerOrientation: { type: Boolean, default: false }
        }
      ]
    },
    followUpClient: String, //date
    clientLastReponse: String //date
  },
  certification: {},
  maintenance: {}
});

module.exports = mongoose.Model("Progress", progressSchema);

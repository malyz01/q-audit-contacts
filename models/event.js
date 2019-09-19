const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  event: [
    {
      dateCreated: { type: Date, Default: Date.now() },
      startDate: Date,
      endDate: Date,
      status: String, //Tentative, Proposed, Confirmed, Done
      providerName: String,
      auditType: String,
      standards: String,
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
    }
  ]
});

module.exports = mongoose.model("Event", eventSchema);

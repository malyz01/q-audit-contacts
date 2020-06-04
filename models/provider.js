const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema({
  isActive: { type: Boolean, default: true },
  dateCreated: { type: Date, default: Date.now() },
  // lastModified: {
  //   date: { type: Date, default: Date.now() },
  //   user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  // },
  data: {
    legalName: { type: String, required: true },
    tradingName: { type: String, required: true },
    bn: { type: String, required: true }, //Australian or NZ Business Number
    cn: { type: String, default: "" }, // Company number
    country: { type: String, default: "" }, //Australia, New Zealand
    state: { type: String, default: "" },
    headOffice: { type: String, default: "" },
    outlets: [
      {
        branchName: { type: String, default: "" },
        address: { type: String, default: "" }
      }
    ],
    contacts: [
      {
        _id: false,
        name: { type: String, required: true },
        position: { type: String, default: "" },
        email: { type: String, unique: true, required: true },
        mobile: { type: String, unique: true, required: true }
      }
    ],

    standards: [{ type: String, unique: true }], //NDIS, ISO, ACIS2018, ISO9001, NZS8134, NZS8165, NZS8164, Urgent Care, NZS8158, NZS8157
    totalStaff: { type: Number, required: true },
    totalParticipants: { type: Number, required: true }
  },
  audits: [{ _id: false, type: mongoose.Schema.Types.ObjectId, ref: "Audit" }],
  comments: [
    {
      date: Date,
      message: String,
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    }
  ]
});

module.exports = mongoose.model("Provider", providerSchema);

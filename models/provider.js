const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema({
  dateCreated: { type: Date, default: Date.now() },
  lastModified: {
    date: { type: Date, default: Date.now() },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  data: {
    legalName: { type: String, required: true },
    tradingName: { type: String, required: true },
    abn: { type: String, required: true },
    acn: { type: String, default: "" },
    country: { type: String, default: "" },
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
        name: String,
        email: { type: String, unique: true, required: true },
        mobile: { type: String, unique: true, required: true }
      }
    ]
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

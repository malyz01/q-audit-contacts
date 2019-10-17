const mongoose = require("mongoose");

const auditSchema = new mongoose.Schema({
  date: Date
});

module.exports = mongoose.model("Audit", auditSchema);

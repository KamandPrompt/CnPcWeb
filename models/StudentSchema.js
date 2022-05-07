const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
    unique: true,
  },
  batch: {
    type: String,
    enum: ["BTECH", "MTECH", "MS", "PHD", "MA", "MSC"],
    required: true,
    unique: false,
  },
  degree: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    enum: [
      "CSE",
      "EP",
      "DSE",
      "ME",
      "CE",
      "EE",
      "BIOE",
      "CSP",
      "MES",
      "EEM",
      "STE",
      "VLSI",
      "PED",
      "BIOT",
      "DS",
      "PY",
      "CM",
      "AM",
      "",
    ],
    required: true,
  },
  cgpa: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
  },
  resume: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  verification_status: {
    type: String,
    default: "No",
  },
  role: {
    type: String,
    default: "student",
  },
});

module.exports = mongoose.model("students", StudentSchema);

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
    required: true,
    unique: false,
  },
  degree: {
    enum: ["BTECH", "MTECH", "MS", "PHD", "MA", "MSC"],
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
  gender: {
    type: String,
  },
  resume1: {
    type: String,
    required: true,
  },
  resume2: {
    type: String,
    required: true,
  },
  resume3: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerified: {
    type: String,
    default: "No",
  },
  role: {
    type: String,
    default: "student",
  },
});

module.exports = mongoose.model("students", StudentSchema);

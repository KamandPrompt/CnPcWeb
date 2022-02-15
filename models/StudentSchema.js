const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const StudentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  rollNo: {
    type: String,
    required: true,
    unique: true
  },
  degree: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  cgpa: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique : true,
  },
  contactNumber: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  Gender: {
    type: String
  },
  tenthPercentage: {
    type: String,
    required: true
  },
  twelthPercentage: {
    type: String,
    required: true
  },
  advanceRank: {
    type: Number,
    required: true
  },
  resume: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  verification_status : {
    type : String,
    default : 'Not Verified',
  },
  role: {
    type: String,
    default: 'student',
  },
});

module.exports = mongoose.model("students", StudentSchema);
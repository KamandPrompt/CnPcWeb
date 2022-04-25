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
  },
  degree: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
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
    unique: true,
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
  verification_status : {
    type : String,
    default : 'Not Verified',
  },
  role: {
    type: String,
    default: "student",
  },
});

module.exports = mongoose.model("students", StudentSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RecruiterSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  contactPerson: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  telephone: {
    type: String,
    required: true
  },
  mobile: {
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
  role: {
    type: String,
    default: 'recruiter',
   },
});

module.exports = mongoose.model("recruiters", RecruiterSchema);
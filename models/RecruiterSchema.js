const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const FieldSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
    min: 1,
  },
  description: {
    type: String,
    required: true,
    min: 1,
  },
  isRequired: {
    type: Boolean,
    required: true,
  },
  fieldID: {
    type: String,
    required: true,
    min: 1,
  },
});
// Create Schema
const RecruiterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactPerson: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    default: "recruiter",
  },
  fields: [
    {
      type: FieldSchema,
    },
  ],
});

module.exports = mongoose.model("recruiters", RecruiterSchema);

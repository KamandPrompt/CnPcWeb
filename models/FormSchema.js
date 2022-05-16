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
    default: "",
  },
  isRequired: {
    type: Boolean,
    required: true,
    default: false,
  },
  isFixed: {
    type: Boolean,
    required: true,
    default: false,
  },
  isSelected: {
    type: Boolean,
    required: true,
    default: false,
  },
});
const EligibilitySchema = new mongoose.Schema({
  program: {
    type: String,
    enum: ["BTECH", "MTECH", "MS", "PHD", "MA", "MSC"],
    required: true,
  },
  batch: {
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
      "",
      "AM",
      "SE",
      "SCEE",
      "SBS",
      "SHS",
    ],
    required: true,
  },
});
const FormSchema = new mongoose.Schema({
  CID: { type: mongoose.Schema.Types.ObjectId, ref: "Recruiter" },
  title: {
    type: String,
    required: true,
  },
  JD: {
    type: String,
    required: true,
  },
  year: {
    type: Date,
    default: Date.getFullYear,
  },
  type: {
    type: String,
    enum: ["internship", "placement"],
    required: true,
  },
  formStatus: {
    type: String,
    enum: ["open", "close"],
    required: true,
    default: "open",
  },
  fields: [
    {
      type: FieldSchema,
    },
  ],
  isVerified: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("forms", FormSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnswerSchema = new mongoose.Schema({
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
  answer: {
    type: String,
    required: true,
    min: 1,
  },
});

const ResponseSchema = new mongoose.Schema({
  SID: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  FID: { type: mongoose.Schema.Types.ObjectId, ref: "Form" },
  CID: { type: mongoose.Schema.Types.ObjectId, ref: "Recruiter" },
  isVerified: {
    type: Boolean,
    default: false,
  },
  answers: [
    {
      type: AnswerSchema,
    }
  ]
});


module.exports = mongoose.model("responses", ResponseSchema);

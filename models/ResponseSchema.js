const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FIDSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ["INF", "JNF"],
  },
  FID: { type: mongoose.Schema.Types.ObjectId },
});

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
  isSelected: {
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
  GID: { type: mongoose.Schema.Types.ObjectId, ref: "Form" },
  FID: { type: FIDSchema },
  CID: { type: mongoose.Schema.Types.ObjectId, ref: "Recruiter" },
  isVerified: {
    type: Boolean,
    default: false,
  },
  answers: [
    {
      type: AnswerSchema,
    },
  ],
});

module.exports = mongoose.model("responses", ResponseSchema);

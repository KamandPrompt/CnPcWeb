const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RoundSchema = new mongoose.Schema({
  noOfRounds: {
    type: String,
  },
  durationOfEachRound: {
    type: String,
  },
});
const CompensationSchema = new mongoose.Schema({
  program: {
    type: String,
    enum: ["BTECH", "MTECH", "MS", "PHD", "MA", "MSC"],
  },
  CTC: {
    type: String,
  },
  gross: {
    type: String,
  },
  takeHome: {
    type: String,
  },
  bonusIncentives: {
    type: String,
  },
});
const EligibilitySchema = new mongoose.Schema({
  program: {
    type: String,
    enum: ["BTECH", "MTECH", "MS", "PHD", "MA", "MSC"],
    required: true,
  },
  branch: {
    type: [String],
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
    // required: true,
  },
});
const JNFSchema = new Schema({
  CID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recruiter",
  },
  year: {
    type: String,
    default: ()=>{
      const today = new Date();
      const year = today.getFullYear();
      return year;
    },
  },
  nameOfTheCompany: {
    type: String,
    required: true,
  },
  postalAddress: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  PINZIP: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  typeOfOrganization: [{
    type: String,
    required: true,
}],
natureOfBusiness: [{
    type: String,
    required: true,
}],
  contactPerson: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  emailAddress: {
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
  jobDesignationOffered: {
    type: String,
    required: true,
  },
  skillSetRequired: {
    type: String,
    required: true,
  },
  tentativeNoOfVacancies: {
    type: String,
    required: true,
  },
  tentativeDateOfJoining: {
    type: String,
    required: true,
  },
  tentativeJobLocations: {
    type: String,
    required: true,
  },
  compensation: [
    {
      type: CompensationSchema,
    },
  ],
  eligibilityCriteria: {
    type: String,
    required: true,
  },
  prePlacementTalk: {
    type: String,
    required: true,
  },
  resumeShortlisting: {
    type: String,
    required: true,
  },
  groupDiscussion: {
    type: String,
    required: true,
  },
  modeOfTest: [{
    type: String,
    required: true,
}],
modeOfInterview: [{
  type: String,
  required: true,
}],
  typeOfTest: [{
    type: String,
    required: true,
  }],
  aptitudeTest: {
    type: String,
    required: true,
  },
  technicalTest: {
    type: String,
    required: true,
  },
  typeOfInterview: [{
    type: String,
    required: true,
  }],
  technicalInterview: {
    type: RoundSchema,
  },
  hRInterview: {
    type: RoundSchema,
  },
  eligibility: [
    {
      type: EligibilitySchema,
    },
  ],
  numberOfMembers: {
    type: String,
    required: true,
  },
  numberOfRoomsRequired: {
    type: String,
    required: true,
  },
  otherRequirements: {
    type: String,
  },
  virtualDriveRequirements: {
    type: String,
  },
});

module.exports = mongoose.model("jnfs", JNFSchema);

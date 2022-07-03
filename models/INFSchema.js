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

const EligibilitySchema = new mongoose.Schema({
    program: {
        type: String,
        enum: ["BTECH", "MTECH", "MS", "PHD", "MA", "MSC"],
        required: false,
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
        // required: false,
    },
});
const INFSchema = new Schema({
    CID: { 
        type: mongoose.Schema.Types.ObjectId, ref: "Recruiter"
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
        required: false,
    },
    country: {
        type: String,
        required: false,
    },
    PINZIP: {
        type: String,
        required: false,
    },
    website: {
        type: String,
        required: false,
    },
    typeOfOrganization: [{
        type: String,
        required: false,
    }],
    natureOfBusiness: [{
        type: String,
        required: false,
    }],
    contactPerson: {
        type: String,
        required: false,
    },
    designation: {
        type: String,
        required: false,
    },
    emailAddress: {
        type: String,
        required: false,
    },
    telephone: {
        type: String,
        required: false,
    },
    mobile: {
        type: String,
        required: false,
    },
    internshipProfile: {
        type: String,
        required: false,
    },
    skillSetRequired: {
        type: String,
        required: false,
    },
    tentativeNoOfInterns: {
        type: String,
        required: false,
    },
    tentativeJobLocations: {
        type: String,
        required: false,
    },
    stipendPerMonth: {
        type: String,
        required: false,
    },
    accommodationProvided: {
        type: String,
        required: false,
    },
    bonusPerksTravel: {
        type: String,
        required: false,
    },
    durationOfInternship: [
        {
            type: String,
            required: false,
        }
    ],
    eligibilityCriteria: {
        type: String,
        required: false,
    },
    prePlacementTalk: {
        type: String,
        required: false,
    },
    resumeShortlisting: {
        type: String,
        required: false,
    },
    groupDiscussion: {
        type: String,
        required: false,
    },
    modeOfTest: [{
        type: String,
        required: false,
    }],
    typeOfTest: [{
        type: String,
        required: false,
    }],
    aptitudeTest: {
        type: String,
    },
    technicalTest: {
        type: String,
    },
    modeOfInterview: [{
        type: String,
        required: false,
    }],
    typeOfInterview: [
        {
            type: String,
            required: false,
        }
    ],
    technicalInterview: {
        type: RoundSchema,
        required: false
    },
    hRInterview: {
        type: RoundSchema,
        required: false
    },
    eligibility: [
        {
            type: EligibilitySchema,
        },
    ],
    numberOfMembers: {
        type: String,
        required: false,
    },
    numberOfRoomsRequired: {
        type: String,
        required: false,
    },
    otherRequirements: {
        type: String,
    },
    virtualDriveRequirements: {
        type: String,
    },
});

module.exports = mongoose.model("infs", INFSchema);

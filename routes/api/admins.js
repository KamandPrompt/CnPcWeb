const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validateLoginInput = require("../../validation/loginAdmin");

// Load Admin model
const Admin = require("../../models/AdminSchema");
const Students = require("../../models/StudentSchema");
const Recruiters = require("../../models/RecruiterSchema");
const Forms = require("../../models/FormSchema");
const INF = require("../../models/INFSchema");
const JNF = require("../../models/JNFSchema");
const Response = require("../../models/ResponseSchema");

// @route POST api/admins/login
// @desc Login user and return JWT token
// @access Public

router.post("/login", (req, res) => {
  console.log("Logging...");
  //Form Valdiation
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  //Find user by Email
  Admin.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
          role: user.role,
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 7200,
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

router.get("/all-students", async (req, res) => {
  const allStudents = await Students.find({})
    .select("rollNo name batch -_id branch")
    .lean();
  // console.log(allStudents);
  return res.json(allStudents);
});
router.get("/student/:roll", async (req, res) => {
  const roll = req.params.roll;
  const student = await Students.findOne({ rollNo: roll }).lean();
  if (student) {
    // console.log(student)
    return res.json({ status: "ok", details: student });
  }
});
router.get("/all-recruiters", async (req, res) => {
  const allRecruiters = await Recruiters.find({})
    .select("email name isVerified -_id")
    .lean();
  // console.log(allRecruiters);
  return res.json(allRecruiters);
});
router.get("/recruiter/:email", async (req, res) => {
  const email = req.params.email;
  const recruiter = await Recruiters.findOne({ email: email }).lean();
  if (recruiter) {
    // console.log(student)
    return res.json({ status: "ok", details: recruiter });
  }
});
router.get("/all-forms", async (req, res) => {
  let allForms = await Forms.find({}).lean();
  let data = [];
  for (var i = 0; i < allForms.length; i++) {
    const title = allForms[i].title;
    const type = allForms[i].type;
    let openStatus = allForms[i].formStatus;
    if (allForms[i].formStatus === "open") {
      openStatus = "Open";
    } else {
      openStatus = "Closed";
    }
    let isVerified = allForms[i].isVerified;
    if (allForms[i].isVerified === true) {
      isVerified = "Verified";
    } else {
      isVerified = "Not Verified";
    }
    const query = { _id: allForms[i].CID };
    const recData = await Recruiters.findOne(query).lean();
    const cname = recData.name;
    const obj = {
      fid: allForms[i].CID,
      title: title,
      type: type,
      openStatus: openStatus,
      isVerified: isVerified,
      name: cname,
    };
    data.push(obj);
  }
  res.send(data);
});

router.post("/getCIDUsingFID", async (req, res) => {
  if (req.body.type == "INF") {
    let filledFormDetails = await INF.findOne({ _id: req.body.fid }).lean();
    return res.send({ cid: filledFormDetails.CID });
  } else {
    let filledFormDetails = await JNF.findOne({ _id: req.body.fid }).lean();
    return res.send({ cid: filledFormDetails.CID });
  }
});

router.post("/getResponsebySID/:fid/:sid", async (req, res) => {
  const fid = req.params.fid;
  const sid = req.params.sid;
  try {
    let data = [];
    data = await Response.findOne({
      "FID.FID": fid,
      SID: sid,
    }).lean();
    // console.log(data);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});
router.post("/verifyResponse/:fid/:sid", async (req, res) => {
  const fid = req.params.fid;
  const sid = req.params.sid;
  // console.log(req.body);
  try {
    Response.updateOne(
      { "FID.FID": fid, SID: sid },
      { isVerified: req.body.isVerified },
      function () {
        console.log("Updated Response!!!");
      }
    );
    res.send("Updated Successfully");
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;

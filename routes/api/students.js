const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
import { accessSpreadsheet } from "../../test.js";
// Load input validation
const validateRegisterInput = require("../../validation/registerStudent");
const validateLoginInput = require("../../validation/loginStudent");

// Load Student model
const Student = require("../../models/StudentSchema");

router.post("/fetchOutput", (req, res) => {
  accessSpreadsheet()
    .then((a) => {
      return res.json({name:"hello"});
    })
    .catch((err) => {
      console.log(err);
    });
});
// @route POST api/students/register
// @desc Register user
// @access Public

router.post("/register", (req, res) => {
  Student.findOne({ rollNo: req.body.rollNo })
    .then((user) => {
      if (user) {
        console.log(`${user.rollNo} already exists`);
        return res.status(400);
      } else {
        const newStudent = new Student({
          name: req.body.name,
          rollNo: req.body.rollNo,
          degree: req.body.degree,
          branch: req.body.branch,
          batch: req.body.batch,
          cgpa: req.body.cgpa,
          email: req.body.email,
          contactNumber: req.body.contactNumber,
          dob: req.body.dob,
          Gender: req.body.Gender,
          tenthPercentage: req.body.tenthPercentage,
          twelthPercentage: req.body.twelthPercentage,
          advanceRank: req.body.advanceRank,
          resume: req.body.resume,
          password: req.body.password,
        });
        console.log(req.body.password);
        // Hash password before storing in database
        const rounds = 10;
        bcrypt.genSalt(rounds, (err, salt) => {
          bcrypt.hash(newStudent.password, salt, (err, hash) => {
            if (err) throw err;
            newStudent.password = hash;
            newStudent
              .save()
              .then((user) => {
                console.log(user);
                res.json(user);
              })
              .catch((err) => console.log(err));
          });
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

// @route POST api/students/login
// @desc Login user and return JWT token
// @access Public

router.post("/login", (req, res) => {
  //Form Valdiation
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const rollNo = req.body.rollNo;
  const password = req.body.password;

  //Find user by Email
  Student.findOne({ rollNo }).then((user) => {
    if (!user) {
      return res.status(404).json({ rollNonotfound: "Roll number not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
          role: user.role,
          rollNo: user.rollNo,
          degree: user.degree,
          branch: user.branch,
          cgpa: user.cgpa,
          email: user.email,
          contactNumber: user.contactNumber,
          dob: user.dob,
          Gender: user.Gender,
          tenthPercentage: user.tenthPercentage,
          twelthPercentage: user.twelthPercentage,
          advanceRank: user.advanceRank,
          resume: user.resume,
          verification_status: user.verification_status,
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

router.post("/update", (req, res) => {
  Student.updateMany(
    { rollNo: req.body.rollNo },
    {
      batch: req.body.batch,
      degree: req.body.degree,
      branch: req.body.branch,
      cgpa: req.body.cgpa,
      contactNumber: req.body.contactNumber,
      resume: req.body.resume,
      Gender: req.body.Gender,
      dob: req.body.dob,
    },
    function () {
      console.log("Updated!!!");
    }
  );
});

module.exports = router;

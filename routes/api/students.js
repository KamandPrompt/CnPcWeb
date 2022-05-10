const { google } = require("googleapis");
const fs = require("fs");
const generator = require("generate-password");
const path = require("path");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// import { accessSpreadsheet } from "../../test.js";
// Load input validation
const validateRegisterInput = require("../../validation/registerStudent");
const validateLoginInput = require("../../validation/loginStudent");
const nodemailer = require("nodemailer");
const validDegree = (degree) => {
  var str = degree.replace(/\s/g, "");
  return str.toUpperCase();
};
const contactEmail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  // service: "gmail",
  auth: {
    // user: "capibulladvisors@gmail.com",
    // pass: "capibull9550",
    user: "cpdashboard11@gmail.com",
    pass: "cp-dash@",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});
// Load Student model
const Student = require("../../models/StudentSchema");
const Form = require("../../models/FormSchema");
const sendPwdMail = async (email, pwd) => {
  // const email = req.body.email;
  console.log("Sending Mail");

  const mail = {
    from: `CnP Web Team`,
    to: `${email}`,
    subject: `Your Password for CnP Website`,
    html: `<p>Email: ${email}</p><p>Password: ${pwd}</p>`,
  };
  // console.log(mail);
  contactEmail.sendMail(mail, (error) => {
    // console.log("Hello");
    if (error) {
      // res.json({ status: "ERROR" });
      console.log(error);
    } else {
      console.log("Mail Sent");
      // res.json({ status: "Mail Sent" });
    }
  });
  // console.log("Hello1");
  return "Hello";
};
const accessSpreadsheet = async () => {
  console.log("Running test.js");
  const auth = new google.auth.GoogleAuth({
    keyFile: "fetching_data.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });
  const authClientObject = await auth.getClient();
  const googleSheetsInstance = google.sheets({
    version: "v4",
    auth: authClientObject,
  });
  const spreadsheetId = "1vtDWu_XI6_I2xP-ms6k5AkDjc3Epq9Yq3nhAawQnxQM";
  try {
    const readData = await googleSheetsInstance.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: "Sheet1",
    });
    let arrays = readData.data.values;
    const [keys, ...values] = arrays;
    const objects = values.map((array) =>
      array.reduce((a, v, i) => ({ ...a, [keys[i]]: v }), {})
    );
    objects.map((item) => {
      var password = generator.generate({
        length: 12,
        numbers: true,
      });
      console.log(item.rollNo);
      // sendPwdMail(item.email, password);
      return (item.password = password);
    });
    // fs.writeFileSync(
    //   "./client/src/output.json",
    //   JSON.stringify(objects),
    //   "utf-8"
    // );
    return objects;
  } catch (error) {
    console.log(error);
  }
};

router.post("/fetchOutput", (req, res) => {
  accessSpreadsheet()
    .then((a) => {
      // console.log(a);
      return res.json(a);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400);
    });
});
// @route POST api/students/register
// @desc Register user
// @access Public

router.post("/register", async (req, res) => {
  // console.log("hi");
  const rollNo = req.body.rollNo;
  console.log(typeof rollNo);
  var ans = await Student.findOne({ rollNo })
    .then((user) => {
      // console.log("h4i");
      if (user) {
        // console.log("h3i");
        console.log(`${user.rollNo} already exists`);
        // return res.status(400);
        return res.json({ name: "Hello" });
      } else {
        sendPwdMail(req.body.email, req.body.password);

        // console.log("h2i");
        const newStudent = new Student({
          name: req.body.name,
          rollNo: validDegree(req.body.rollNo),
          degree: validDegree(req.body.degree),
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
              .catch((err) => {
                console.log(err);
                return res.json({
                  error: err,
                  isError: true,
                  rollNo: req.body.rollNo,
                });
              });
          });
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });

  // console.log(ans);
  // console.log("h5i");
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

  const rollNo = req.body.rollNo.toUpperCase();
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
          batch: user.batch,
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
      name: req.body.name,
      rollNo: req.body.rollNo,
      email: req.body.email,
      batch: req.body.batch,
      degree: req.body.degree,
      branch: req.body.branch,
      cgpa: req.body.cgpa,
      contactNumber: req.body.contactNumber,
      resume: req.body.resume,
      Gender: req.body.Gender,
      dob: req.body.dob,
      verification_status: req.body.verification_status,
      role: req.body.role,
    },
    function () {
      console.log("Updated!!!");
    }
  );
  res.send("Profile updated Successfully!");
});

router.get("/noticeboard", async (req,res) => {
  try {
    const data = await Form.find({formStatus:'open'}).lean();
    console.log(data);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.get("/noticeboard/:id", async (req,res) => {
  const id = req.params.id; 
  try {
    const data = await Form.find({_id:id}).lean();
    console.log(data);
    if(data)
    {
      // console.log(student)
      return res.json({data})
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;

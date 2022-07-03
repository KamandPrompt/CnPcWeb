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
// const contactEmail = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   service: "gmail",
//   auth: {
//     // user: "capibulladvisors@gmail.com",
//     // pass: "capibull9550",
//     user: "cpdashboard11@gmail.com",
//     pass: "cp-dash@",
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });
// Load Student model
const Student = require("../../models/StudentSchema");
const Form = require("../../models/FormSchema");
const Response = require("../../models/ResponseSchema");
const Recruiters = require("../../models/RecruiterSchema");

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
const accessSpreadsheet = async (link) => {
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
  const spreadsheetId = link;
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
      // console.log(item.rollNo);
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

const updateSpreadsheet = async (link) => {
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
  const spreadsheetId = link;
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
  const link = req.body.updateSheet;
  console.log(link);
  let index1 = -1;
  let index2 = 0;
  for (let i = 2; i < link.length; i++) {
    if (link[i - 2] == "/" && link[i - 1] == "d" && link[i] == "/") {
      index1 = i + 1;
    } else if (link[i] == "/" && i > index1 && index1 != -1) {
      index2 = i - 1;
      break;
    }
  }
  let result = link.substr(index1, index2 - index1 + 1);
  console.log(result);
  accessSpreadsheet(result)
    .then((a) => {
      // console.log(a);
      return res.json(a);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400);
    });
});

router.post("/updateOutput", (req, res) => {
  const link = req.body.updateSheet;
  console.log(link);
  let index1 = -1;
  let index2 = 0;
  for (let i = 2; i < link.length; i++) {
    if (link[i - 2] == "/" && link[i - 1] == "d" && link[i] == "/") {
      index1 = i + 1;
    } else if (link[i] == "/" && i > index1 && index1 != -1) {
      index2 = i - 1;
      break;
    }
  }
  let result = link.substr(index1, index2 - index1 + 1);
  console.log(result);
  updateSpreadsheet(result)
    .then((a) => {
      return res.json(a);
    })
    .catch((err) => {
      return res.status(400);
    });
});
// @route POST api/students/register
// @desc Register user
// @access Public

router.post("/register", async (req, res) => {
  // console.log("hi");
  const rollNo = validDegree(req.body.rollNo);
  // console.log(typeof rollNo);
  await Student.findOne({ rollNo })
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
          gender: req.body.gender,
          resume1: req.body.resume1,
          resume2: req.body.resume2,
          resume3: req.body.resume3,
          password: req.body.password,
        });
        // console.log(req.body.password);
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
          gender: user.gender,
          resume1: user.resume1,
          resume2: user.resume2,
          resume3: user.resume3,
          isVerified: user.isVerified,
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

router.post("/update", async (req, res) => {
  // console.log(req.body.contactNumber);
  // console.log(req.body.rollNo);
  // const data = await Student.findOne({ rollNo: req.body.rollNo });
  // console.log(data);
  await Student.updateOne(
    { rollNo: req.body.rollNo },
    {
      contactNumber: req.body.contactNumber,
    },
    function () {
      console.log("Updated!!!");
    }
  );
  // const data2 = await Student.findOne({ rollNo: req.body.rollNo });
  // console.log(data2);
  res.send("Profile updated Successfully!");
});

router.post("/all-forms", async (req, res) => {
  const SID = req.body.SID;
  const studData = await Student.findOne({ _id: SID });
  const deg = studData.degree;
  const batch = studData.batch;
  const branch = studData.branch;
  // console.log(deg,batch,branch)
  try {
    const data = await Form.find({
      formStatus: "open",
      "eligibility.program": deg,
      "eligibility.batch": batch,
      eligibility: { $elemMatch: { branch: branch } },
    }).lean();
    // console.log(data);
    // let sendData = [];
    for (var i = 0; i < data.length; i++) {
      // console.log(data[i]);
      const query = { _id: data[i].CID };
      const company = await Recruiters.findOne(query).lean();
      data[i].companyName = company.name;
      // sendData.push(data[i]);
    }
    // console.log(data);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.post("/all-forms/:id", async (req, res) => {
  const id = req.params.id;
  const SID = req.body.SID;
  const studData = await Student.findOne({ _id: SID });
  const deg = studData.degree;
  const batch = studData.batch;
  const branch = studData.branch;
  try {
    let data = await Form.find({ _id: id }).lean();
    for (var i = 0; i < data[0].eligibility.length; i++) {
      // console.log(data[0].eligibility[i].program,data[0].eligibility[i].batch)
      if (
        data[0].eligibility[i].program == deg &&
        data[0].eligibility[i].batch == batch
      ) {
        // console.log(data);
        for (var j = 0; j < data[0].eligibility[i].branch.length; j++) {
          if (data[0].eligibility[i].branch[j] == branch) {
            // console.log(data);
            return res.json({ data });
          }
        }
      }
    }
    return res.json({ redirect: true });
  } catch (error) {
    res.send(error);
  }
});

router.post("/saveResponse", (req, res) => {
  // const data = await Response.find({SID:req.body.SID, FID:req.body.FID});
  // if(!data){

  // }
  // console.log("hi");
  // console.log(req.body);
  // console.log("394 -> ", req.body.FID)
  const newResponse = new Response({
    SID: req.body.SID,
    CID: req.body.CID,
    FID: req.body.FID,
    answers: req.body.answers,
  });
  console.log(newResponse);
  newResponse
    .save()
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

router.post("/updateResume", async (req, res) => {
  console.log(req.body);
  try {
    const data = await Student.findOne({ rollNo: req.body.rollNo }).lean();
    let resume1 = data.resume1,
      resume2 = data.resume2,
      resume3 = data.resume3;
    if (req.body.resume1) {
      if (req.body.resume1 != "") {
        resume1 = req.body.resume1;
      }
    }
    if (req.body.resume2) {
      if (req.body.resume2 != "") {
        resume2 = req.body.resume2;
      }
    }
    if (req.body.resume3) {
      if (req.body.resume3 != "") {
        resume3 = req.body.resume3;
      }
    }
    const updatedData = await Student.updateMany(
      { rollNo: req.body.rollNo },
      { resume1: resume1, resume2: resume2, resume3: resume3 },
      () => {
        console.log("Resume Links Updated!!!!");
      }
    );
    res.send(updatedData);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;

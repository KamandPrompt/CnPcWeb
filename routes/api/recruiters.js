const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validateRegisterInput = require("../../validation/registerRecruiter");
const validateLoginInput = require("../../validation/loginRecruiter");

// Load Recruiter model
const Recruiter = require("../../models/RecruiterSchema");
const INF = require("../../models/INFSchema");
const JNF = require("../../models/JNFSchema");
const Form = require("../../models/FormSchema");
const Response = require("../../models/ResponseSchema");
const Student = require("../../models/StudentSchema");

// @route POST api/recruiters/register
// @desc Register user
// @access Public

router.post("/register", (req, res) => {
  console.log("Registering...");
  //Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    console.log(errors);
    console.log("errors");
    return res.status(400).json(errors);
  }

  Recruiter.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newRecruiter = new Recruiter({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        contactPerson: req.body.contactPerson,
        designation: req.body.designation,
        telephone: req.body.telephone,
        mobile: req.body.mobile,
      });

      // Hash password before storing in database
      const rounds = 10;
      bcrypt.genSalt(rounds, (err, salt) => {
        bcrypt.hash(newRecruiter.password, salt, (err, hash) => {
          if (err) throw err;
          newRecruiter.password = hash;
          newRecruiter
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// @route POST api/recruiters/login
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
  Recruiter.findOne({ email }).then((user) => {
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
          contactPerson: user.contactPerson,
          email: user.email,
          designation: user.designation,
          telephone: user.telephone,
          mobile: user.mobile,
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

router.post("/createForm", (req, res) => {
  console.log("Adding...");
  //Form validation
  const newForm = new Form({
    title: req.body.title,
    JD: req.body.JD,
    type: req.body.type,
    isVerified: req.body.isVerified,
    fields: req.body.fields,
    CID: req.body.CID,
  });
  newForm
    .save()
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

router.post("/update", (req, res) => {
  Recruiter.updateMany(
    { email: req.body.email },
    {
      name: req.body.name,
      contactPerson: req.body.contactPerson,
      designation: req.body.designation,
      email: req.body.email,
      telephone: req.body.telephone,
      mobile: req.body.mobile,
      isVerified: req.body.isVerified,
      role: req.body.role,
    },
    function () {
      console.log("Updated!!!");
    }
  );
  res.send("Profile updated Successfully!");
});

router.post("/updatePassword", async (req, res) => {
  // console.log(req.body);
  const email = req.body.email;
  const currentPassword = req.body.currentPassword;
  const newPassword = req.body.newPassword;
  Recruiter.findOne({ email }).then(async (user) => {
    if (!user) {
      return res.status(404).json({ message: "Email not found" });
    }
    await bcrypt
      .compare(currentPassword, user.password)
      .then(async (isMatch) => {
        if (isMatch) {
          // Hash password before storing in database
          const hashPassword = async (password, rounds = 10) => {
            try {
              // Generate a salt
              const salt = await bcrypt.genSalt(rounds);
              // Hash password
              return await bcrypt.hash(password, salt);
            } catch (error) {
              console.log(error);
            }

            // Return null if error
            return null;
          };
          const hashedPassword = await hashPassword(newPassword);
          if (hashedPassword === null)
            return res.json({ message: "Some error occured" });
          user.password = hashedPassword;
          await user
            .save()
            .then(console.log("Updated"))
            .catch((err) => console.log(err));
          console.log("Password Updated Successfully");
          return res.json({ message: "Password Updated Successfully" });
        } else {
          return res.json({
            message: "Current Password is incorrect!",
          });
        }
      });
  });
});
router.get("/:email", async (req, res) => {
  const email = req.params.email;
  const recruiter = await Recruiter.findOne({ email: email }).lean();
  if (recruiter) {
    // console.log(student)
    return res.json({ status: "ok", details: recruiter });
  }
});

router.post("/getFormbyCID", async (req, res) => {
  console.log(req.body.id);
  try {
    const dataINF = await INF.find({ CID: req.body.id }).lean();
    const dataJNF = await JNF.find({CID: req.body.id}).lean();
    // console.log(dataINF);
    const objArr = [];
    for(let i=0;i<dataINF.length;i++){
      const obj = {
        id: dataINF[i]._id,
        type: "INF"
      }
      objArr.push(obj);
    }
    for(let i=0;i<dataJNF.length;i++){
      const obj = {
        id: dataJNF[i]._id,
        type: "JNF"
      }
      objArr.push(obj);
    }
    // console.log(objArr);
    res.send(objArr);
  } catch (error) {
    res.send(error);
  }
});

router.post("/getFormbyCID/:fid", async (req, res) => {
  const fid = req.params.fid;
  // console.log(req.body.role);
  try {
    let data = [];
    if (req.body.role === "recruiter") {
      data = await Response.find({ FID: fid, isVerified: true }).lean();
    } else if (
      req.body.role === "coordinator" ||
      req.body.role === "volunteer"
    ) {
      data = await Response.find({ FID: fid }).lean();
    }
    // console.log(data)
    let student_data = [];
    for (let i = 0; i < data.length; i++) {
      const studentData = await Student.findOne({ _id: data[i].SID }).lean();
      const newData = {
        FID: data[i].FID,
        name: studentData.name,
        rollNo: studentData.rollNo,
        cgpa: studentData.cgpa,
        SID: studentData._id,
        branch: studentData.branch,
      };
      student_data.push(newData);
    }
    // console.log(student_data);
    res.send(student_data);
  } catch (error) {
    res.send(error);
  }
});

router.post("/getResponsebySID/:fid/:sid", async (req, res) => {
  const fid = req.params.fid;
  const sid = req.params.sid;
  try {
    let data = [];
    // console.log(data)
    data = await Response.findOne({
      FID: fid,
      isVerified: true,
      SID: sid,
    }).lean();
    res.send(data.answers);
  } catch (error) {
    res.send(error);
  }
});

router.post("/fillINF", (req,res)=>{
  const INFform = new INF(req.body);
  INFform
    .save()
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
})

module.exports = router;

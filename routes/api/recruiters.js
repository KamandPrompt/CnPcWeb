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
const Form = require("../../models/FormSchema");

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

router.get("/:email", async (req, res) => {
  const email = req.params.email;
  const recruiter = await Recruiter.findOne({ email: email }).lean();
  if (recruiter) {
    // console.log(student)
    return res.json({ status: "ok", details: recruiter });
  }
});

router.post("/getFormbyCID", async (req,res)=>{
  console.log(req.body.id);
  try {
    const data = await Form.find({ CID: req.body.id }).lean();
    // console.log(data);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
})

module.exports = router;

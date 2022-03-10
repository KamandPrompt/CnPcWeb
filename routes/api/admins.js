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
          role: user.role
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926,
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

router.get("/all-students", async (req,res) => {
  const allStudents = await Students.find({}).select('rollNo name batch verification_status -_id').lean();
  // console.log(allStudents);
  return res.json(allStudents);
});
router.get("/student/:roll",async(req,res)=>{
  const roll = req.params.roll;
  const student = await Students.findOne({rollNo:roll}).lean();
  if(student)
  {
    // console.log(student)
    return res.json({status:"ok", details:student})
  }
})
module.exports = router;

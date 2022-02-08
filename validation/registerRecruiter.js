const Validator = require("validator");

const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.contactPerson = !isEmpty(data.contactPerson) ? data.contactPerson : "";
  data.designation = !isEmpty(data.designation) ? data.designation : "";
  data.telephone = !isEmpty(data.telephone) ? data.telephone : "";
  data.mobile = !isEmpty(data.mobile) ? data.mobile : "";

  //Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  if (Validator.isEmpty(data.contactPerson)) {
    errors.contactPerson = "Contact Person field is required";
  }
  if (Validator.isEmpty(data.designation)) {
    errors.designation = "Designation is required";
  }

  if (Validator.isEmpty(data.telephone)) {
    errors.telephone = "Telephone is required";
  }
  if (Validator.isEmpty(data.mobile)) {
    errors.mobile = "Mobile is required";
  }

  //Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  //Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

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

  let arr=[]
  //Password checks
  if (Validator.isEmpty(data.password)) {
    arr.push("Password field is required");
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password field is required";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
  if (data.password.length < 8) {
    arr.push("Your password must be at least 8 characters."); 
  }
  if (data.password.search(/[a-z]/i) < 0) {
    arr.push("Your password must contain at least one letter.");
  }
  if (data.password.search(/[0-9]/) < 0) {
      arr.push("Your password must contain at least one digit."); 
  }
  if (data.password.search(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) < 0) {
      arr.push("Your password must contain at least one special character."); 
  }
  errors.password=arr;

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

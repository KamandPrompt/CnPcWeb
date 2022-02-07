const Validator = require('validator');

const isEmpty = require('is-empty');

module.exports = function validateLoginInput(data){

    let errors = {};

    data.rollNo = !isEmpty(data.rollNo) ? data.rollNo : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    //Email checks
    if(Validator.isEmpty(data.rollNo)){
        errors.rollNo = "Email field is required";
    } 

    //Password checks
    if(Validator.isEmpty(data.password)){
        errors.password = "Password field is required";
    }

    return{
        errors,
        isValid: isEmpty(errors)
    };
};
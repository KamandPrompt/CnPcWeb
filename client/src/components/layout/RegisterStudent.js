import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { registerStudent } from "../../actions/authActions";
import classnames from "classnames";
import Navbar from "./Navbar";
// import jsonData from "../../output.json";
import axios from "axios";

const RegisterStudent = () => {
  const Dataloder = () => {
    // output.json shd be updated here
    axios
      .post("/api/students/fetchOutput", "hello")
      .then((res) => {
        console.log(res);
        // res.data.map((item) => {
        //   axios
        //     .post("/api/students/register", item)
        //     .then((res) => console.log(res))
        //     .catch((e) => {
        //       console.log(e);
        //     });
        // });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <div>Click the button to register Students</div>
      <button onClick={Dataloder}>click</button>
    </>
  );
};

export default RegisterStudent;

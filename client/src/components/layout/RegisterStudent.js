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
  const Dataloder = async () => {
    // output.json shd be updated here
    var data = [];
    await axios.post("/api/students/fetchOutput", "hello")
      .then((res) => {
        console.log(res);
        data = res.data;
      })
      .catch((e) => {
        console.log(e);
      });
      console.log(data);
      for(var i=0;i<data.length;i++)
      {
        await axios
          .post("/api/students/register", data[i])
          .then((res) => console.log(res))
          .catch((e) => {
            console.log(e);
          });
      }
  };
  return (
    <>
      <div>Click the button to register Students</div>
      <button onClick={Dataloder}>click</button>
    </>
  );
};

export default RegisterStudent;

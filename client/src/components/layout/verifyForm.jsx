import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "../admin.css";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

class VerifyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // DataisLoaded: false,
      DataisLoaded: true,
      respones: [],
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const id = params.get("id");
    console.log(this.props.auth.user);
    if (id === null) {
      await axios
        .get("/api/admin/responses")
        .then((res) => {
          this.setState({ studentsData: res.data, DataisLoaded: true });
          // console.log(this.state.studentsData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  // updateUser = (userData) => {
  //   axios
  //     .post("api/students/update", userData)
  //     .then((res) => {
  //       console.log(res);
  //       alert(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // onsubmit = (e) => {
  //   e.preventDefault();
  //   console.log(this.state);
  //   const user = {
  //     name: this.state.name,
  //     rollNo: this.state.rollNo,
  //     email: this.state.email,
  //     batch: this.state.batch,
  //     contactNumber: this.state.contactNumber,
  //     branch: this.state.branch,
  //     Gender: this.state.Gender,
  //     degree: this.state.degree,
  //     cgpa: this.state.cgpa,
  //     dob: this.state.dob,
  //     resume: this.state.resume,
  //     isVerified: this.state.isVerified,
  //     role: this.state.role,
  //   };
  //   console.log(user);
  //   this.updateUser(user);
  // };

  // onLogout = (e) => {
  //   e.preventDefault();
  //   this.props.logoutUser();
  // };
  // handleSubmit(event) {
  //   const {
  //     name,
  //     rollNo,
  //     batch,
  //     degree,
  //     branch,
  //     cgpa,
  //     email,
  //     contactNumber,
  //     dob,
  //     Gender,
  //     tenthPercentage,
  //     twelthPercentage,
  //     advanceRank,
  //     resume,
  //     isVerified,
  //   } = this.state;
  //   event.preventDefault();
  //   console.log(this.state);
  // }

  // handleChange(event) {
  //   this.setState({
  //     // Computed property names
  //     // keys of the objects are computed dynamically
  //     [event.target.name]: event.target.value,
  //   });
  // }
  // onchange = (e) => {
  //   this.setState({ [e.target.id]: e.target.value });
  //   // this.setState(e.target.id=e.target.value)
  //   // console.log(e.target.value);
  //   // console.log(e.target.id);
  // };
  // Dataloder = async () => {
  //   // output.json shd be updated here
  //   var data = [];
  //   await axios
  //     .post("/api/students/fetchOutput", "hello")
  //     .then((res) => {
  //       console.log(res);
  //       data = res.data;
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  //   console.log(data);
  //   for (var i = 0; i < data.length; i++) {
  //     await axios
  //       .post("/api/students/register", data[i])
  //       .then((res) => {
  //         console.log("Response", res);
  //         if (res.data.isError) {
  //           alert(
  //             "Roll Number Registration Failed: " +
  //               res.data.rollNo +
  //               "\nError: " +
  //               res.data.error.errors.branch.message
  //           );
  //         }
  //       })
  //       .catch((e) => {
  //         console.log("Error", e);
  //       });
  //   }
  // };
  render() {
    const { user } = this.props.auth;
    if (this.state.DataisLoaded === true) {
      return (
        <>
          <h1>Hi</h1>
        </>
      );
    } else {
      return <div>Wait for some time</div>;
    }
  }
}

VerifyForm.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(VerifyForm);

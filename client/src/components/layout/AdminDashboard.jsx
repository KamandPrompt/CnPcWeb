import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "../admin.css";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DataisLoaded: false,
      studentsData: [],
      name: "",
      rollNo: "",
      batch: "",
      degree: "",
      branch: "",
      cgpa: "",
      email: "",
      contactNumber: "",
      dob: "",
      Gender: "",
      tenthPercentage: "",
      twelthPercentage: "",
      advanceRank: "",
      resume: "",
      verification_status: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const roll = params.get("roll");
    if (roll === null) {
      await axios
        .get("/api/admins/all-students")
        .then((res) => {
          this.setState({ studentsData: res.data, DataisLoaded: true });
          // console.log(this.state.studentsData);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      await axios
        .get(`/api/admins/student/${roll}`)
        .then((res) => {
          this.setState({
            name: res.data.details.name,
            rollNo: roll,
            batch: res.data.details.batch,
            degree: res.data.details.degree,
            branch: res.data.details.branch,
            cgpa: res.data.details.cgpa,
            email: res.data.details.email,
            contactNumber: res.data.details.contactNumber,
            dob: res.data.details.dob,
            Gender: res.data.details.Gender,
            tenthPercentage: res.data.details.tenthPercentage,
            twelthPercentage: res.data.details.twelthPercentage,
            advanceRank: res.data.details.advanceRank,
            resume: res.data.details.resume,
            verification_status: res.data.details.verification_status,
            role: res.data.details.role,
            DataisLoaded: true,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  updateUser = (userData) => {
    axios
      .post("api/students/update", userData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  onsubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const user = {
      name: this.state.name,
      rollNo: rollNo.value,
      email: email.value,
      batch: batch.value,
      contactNumber: contactNumber.value,
      branch: branch.value,
      Gender: Gender.value,
      degree: degree.value,
      cgpa: cgpa.value,
      dob: dob.value,
      resume: resume.value,
      verification_status: verification_status.value,
      role: role.value,
    };
    console.log(user);
    this.updateUser(user);
  };

  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  handleSubmit(event) {
    const {
      name,
      rollNo,
      batch,
      degree,
      branch,
      cgpa,
      email,
      contactNumber,
      dob,
      Gender,
      tenthPercentage,
      twelthPercentage,
      advanceRank,
      resume,
      verification_status,
    } = this.state;
    event.preventDefault();
    console.log(this.state);
  }

  handleChange(event) {
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name]: event.target.value,
    });
  }
  Dataloder = async () => {
    // output.json shd be updated here
    var data = [];
    await axios
      .post("/api/students/fetchOutput", "hello")
      .then((res) => {
        console.log(res);
        data = res.data;
      })
      .catch((e) => {
        console.log(e);
      });
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      await axios
        .post("/api/students/register", data[i])
        .then((res) => {
          console.log("Response", res);
          if (res.data.isError) {
            alert(
              "Roll Number Registration Failed: " +
                res.data.rollNo +
                "\nError: " +
                res.data.error.errors.branch.message
            );
          }
        })
        .catch((e) => {
          console.log("Error", e);
        });
    }
  };
  render() {
    const { user } = this.props.auth;
    if (this.state.DataisLoaded === true) {
      if (this.state.rollNo === "") {
        const userRows = this.state.studentsData;
        const columns = [
          {
            field: "rollNo",
            headerName: "Roll No.",
            hideable: false,
            width: 230,
          },
          { field: "name", headerName: "Name", hideable: false, width: 230 },
          {
            field: "batch",
            headerName: "Batch",
            type: "number",
            width: 150,
            hideable: false,
          },
          {
            field: "verification_status",
            headerName: "Status",
            width: 190,
            hideable: false,
          },
          {
            field: "edit",
            headerName: "Edit/View",
            sortable: false,
            filterable: false,
            hideable: false,
            width: 180,
            renderCell: (params) => {
              return (
                <>
                  <Link to={"?roll=" + params.row.rollNo} target="_blank">
                    <button className="userEdit">Edit/View</button>
                  </Link>
                </>
              );
            },
          },
        ];
        return (
          <>
            <div className="container text-center mt-15">
              <div className="row">
                <div className="col-sm-12">
                  <div>
                    <h4>Register Students</h4>
                    <button
                      style={{
                        width: "120px",
                        height: "35px",
                        borderRadius: "50px",
                        color: "white",
                        backgroundColor: "#2196F3",
                        border: "none",
                      }}
                      onClick={this.Dataloder}
                    >
                      Register
                    </button>
                  </div>
                  <br />
                  <br />
                  <br />
                  <h3>Registered Students details</h3>
                  <div style={{ height: "400px", width: "90%" }} id="dataGrid">
                    <DataGrid
                      rows={userRows}
                      columns={[
                        ...columns,
                        {
                          field: "edit",
                          sortable: false,
                          filterable: false,
                          hideable: false,
                        },
                      ]}
                      pageSize={10}
                      rowsPerPageOptions={[10, 20, 30]}
                      getRowId={(row) => row.rollNo}
                    />
                  </div>
                  {/* <button
                  onClick={this.onLogout}
                  className="btn btn-large btn-light hoverable font-weight-bold"
                >
                  Logout
                </button> */}
                </div>
              </div>
            </div>
          </>
        );
      } else {
        //
        // console.log(values);
        return (
          <>
            <Container fluid>
              <Row>
                <Col md="12">
                  <Card>
                    <Card.Body>
                      <Form>
                        <Row>
                          <Col className="pr-1" md="5">
                            <Form.Group>
                              <label>RollNo</label>
                              <Form.Control
                                defaultValue={this.state.rollNo}
                                placeholder="RollNo"
                                type="text"
                                id="rollNo"
                                onChange={this.handleChange}
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                          <Col className="px-1" md="3">
                            <Form.Group>
                              <label>Name</label>
                              <Form.Control
                                onChange={this.handleChange}
                                id="name"
                                defaultValue={this.state.name}
                                placeholder="Name"
                                type="text"
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                          <Col className="pl-1" md="4">
                            <Form.Group>
                              <label htmlFor="exampleInputEmail1">
                                Email address
                              </label>
                              <Form.Control
                                onChange={this.handleChange}
                                id="email"
                                defaultValue={this.state.email}
                                placeholder="Email"
                                type="email"
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="12">
                            <Form.Group>
                              <label>Contact number</label>
                              <Form.Control
                                onChange={this.handleChange}
                                id="contactNumber"
                                defaultValue={this.state.contactNumber}
                                placeholder="Contact Number"
                                type="text"
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="pr-1" md="4">
                            <Form.Group>
                              <label>Branch</label>
                              <Form.Control
                                onChange={this.handleChange}
                                id="branch"
                                defaultValue={this.state.branch}
                                placeholder="Branch"
                                type="text"
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                          <Col className="px-1" md="4">
                            <Form.Group>
                              <label>Resume</label>
                              <Form.Control
                                onChange={this.handleChange}
                                id="resume"
                                defaultValue={this.state.resume}
                                placeholder="Drive link"
                                type="text"
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                          <Col className="pl-1" md="4">
                            <Form.Group>
                              <div>
                                <label>Gender</label>
                              </div>
                              <Form.Select
                                className="btn-primary"
                                aria-label="Default select example"
                                onChange={this.handleChange}
                                id="Gender"
                              >
                                <option>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="pr-1" md="4">
                            <Form.Group>
                              <label>Degree</label>
                              <Form.Control
                                onChange={this.handleChange}
                                id="degree"
                                defaultValue={this.state.degree}
                                placeholder="Degree"
                                type="text"
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                          <Col className="px-1" md="4">
                            <Form.Group>
                              <label>Batch</label>
                              <Form.Control
                                onChange={this.handleChange}
                                id="batch"
                                defaultValue={this.state.batch}
                                placeholder="batch"
                                type="text"
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                          <Col className="pl-1" md="4">
                            <Form.Group>
                              <label>CGPA</label>
                              <Form.Control
                                onChange={this.handleChange}
                                id="cgpa"
                                defaultValue={this.state.cgpa}
                                placeholder="CGPA"
                                type="text"
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="pr-1" md="4">
                            <Form.Group>
                              <label>Date of Birth</label>
                              <Form.Control
                                onChange={this.handleChange}
                                id="dob"
                                defaultValue={this.state.dob}
                                placeholder="Date of Birth"
                                type="text"
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                          <Col className="px-1" md="4">
                            <Form.Group>
                              <label>Role</label>
                              <Form.Control
                                onChange={this.handleChange}
                                id="role"
                                defaultValue={this.state.role}
                                placeholder="role"
                                type="text"
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                          <Col className="pl-1" md="4">
                            <Form.Group>
                              <div>
                                <label>Verification Status</label>
                              </div>
                              <Form.Select
                                className="btn-primary"
                                aria-label="Default select example"
                                onChange={this.handleChange}
                                id="verification_status"
                              >
                                {/* <option>Select Status</option> */}
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                        </Row>
                        <div
                          className="clearfix"
                          style={{ textAlign: "center", margin: "10px 0px" }}
                        >
                          <Button
                            className="btn-fill"
                            style={{ width: "200px" }}
                            type="submit"
                            variant="info"
                            onClick={this.onsubmit}
                          >
                            Update Profile
                          </Button>
                        </div>
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </>
        );
      }
    } else {
      return <div>Wait for some time</div>;
    }
  }
}

AdminDashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(AdminDashboard);

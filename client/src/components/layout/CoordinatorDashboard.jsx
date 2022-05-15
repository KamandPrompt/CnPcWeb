import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "../admin.css";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

class CoordinatorDashboard extends Component {
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
      gender: "",
      resume1: "",
      resume2: "",
      resume3: "",
      isVerified: "",
      resgisterSheet: "",
      updateSheet: "",
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
            gender: res.data.details.gender,
            resume1: res.data.details.resume1,
            resume2: res.data.details.resume2,
            resume3: res.data.details.resume3,
            isVerified: res.data.details.isVerified,
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
        alert(res.data);
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
      rollNo: this.state.rollNo,
      email: this.state.email,
      batch: this.state.batch,
      contactNumber: this.state.contactNumber,
      branch: this.state.branch,
      gender: this.state.gender,
      degree: this.state.degree,
      cgpa: this.state.cgpa,
      dob: this.state.dob,
      resume1: this.state.resume1,
      resume2: this.state.resume2,
      resume3: this.state.resume3,
      isVerified: this.state.isVerified,
      role: this.state.role,
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
      gender,
      resume1,
      resume2,
      resume3,
      isVerified,
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
  onchange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    // this.setState(e.target.id=e.target.value)
    // console.log(e.target.value);
    // console.log(e.target.id);
  };
  Dataloder = async () => {
    // output.json shd be updated here
    var data = [];
    await axios
      .post("/api/students/fetchOutput", {resgisterSheet: this.state.resgisterSheet})
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

  updateStudentResume = async ()=>{
    var updateData = [];
    await axios
      .post("/api/students/updateOutput", {updateSheet: this.state.updateSheet})
      .then((res) => {
        console.log(res);
        updateData = res.data;
      })
      .catch((e) => {
        console.log(e);
      });
      console.log(updateData);
      for (var i = 0; i < updateData.length; i++) {
        await axios
          .post("/api/students/updateResume", updateData[i])
          .then((res) => {
            console.log("Response", res);
            if (res.data.isError) {
              alert(
                "Roll Number Resume Updation Failed: " +
                  res.data.rollNo +
                  "\nError: " +
                  res.data.error.errors.branch.message
              );
            }else{
              alert("Resume of Students Updated!!!");
              this.setState({updateSheet:""});
            }
          })
          .catch((e) => {
            console.log("Error", e);
          });
      }
  }

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
            field: "isVerified",
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
                    <input type="text" id="resgisterSheet" onChange={this.onchange}/>
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
                    <h4>Update Student's Resume</h4>
                    <input type="text" id="updateSheet" onChange={this.onchange}/>
                    <button
                      style={{
                        width: "120px",
                        height: "35px",
                        borderRadius: "50px",
                        color: "white",
                        backgroundColor: "#2196F3",
                        border: "none",
                      }}
                      onClick={this.updateStudentResume}
                    >
                      Update
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
          gender,
          resume1,
          resume2,
          resume3,
          isVerified,
          role,
        } = this.state;
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
                                disabled
                                defaultValue={rollNo}
                                placeholder="RollNo"
                                type="text"
                                id="rollNo"
                                onChange={this.onchange}
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                          <Col className="px-1" md="3">
                            <Form.Group>
                              <label>Name</label>
                              <Form.Control
                                onChange={this.onchange}
                                id="name"
                                defaultValue={name}
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
                                onChange={this.onchange}
                                id="email"
                                defaultValue={email}
                                disabled
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
                                onChange={this.onchange}
                                id="contactNumber"
                                defaultValue={contactNumber}
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
                                onChange={this.onchange}
                                id="branch"
                                defaultValue={branch}
                                placeholder="Branch"
                                type="text"
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                          <Col className="px-1" md="4">
                            <Form.Group>
                              <label>Resume1</label>
                              <Form.Control
                                onChange={this.onchange}
                                id="resume1"
                                defaultValue={resume1}
                                placeholder="Drive link"
                                type="text"
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                          <Col className="px-1" md="4">
                            <Form.Group>
                              <label>Resume2</label>
                              <Form.Control
                                onChange={this.onchange}
                                id="resume2"
                                defaultValue={resume2}
                                placeholder="Drive link"
                                type="text"
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                          <Col className="px-1" md="4">
                            <Form.Group>
                              <label>Resume3</label>
                              <Form.Control
                                onChange={this.onchange}
                                id="resume3"
                                defaultValue={resume3}
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
                                className="btn-sm primary"
                                aria-label="Default select example"
                                onChange={this.onchange}
                                id="gender"
                                value={gender}
                              >
                                {gender === "Male" ? (
                                  <>
                                    <option value="Male" selected>
                                      Male
                                    </option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                  </>
                                ) : gender === "Female" ? (
                                  <>
                                    <option value="Female" selected>
                                      Female
                                    </option>
                                    <option value="Male">Male</option>
                                    <option value="Others">Others</option>
                                  </>
                                ) : (
                                  <>
                                    <option value="Others" selected>
                                      Others
                                    </option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                  </>
                                )}
                              </Form.Select>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="pr-1" md="4">
                            <Form.Group>
                              <label>Degree</label>
                              <Form.Control
                                onChange={this.onchange}
                                id="degree"
                                defaultValue={degree}
                                placeholder="Degree"
                                type="text"
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                          <Col className="px-1" md="4">
                            <Form.Group>
                              <label>Batch</label>
                              <Form.Control
                                onChange={this.onchange}
                                id="batch"
                                defaultValue={batch}
                                placeholder="batch"
                                type="text"
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                          <Col className="pl-1" md="4">
                            <Form.Group>
                              <label>CGPA</label>
                              <Form.Control
                                onChange={this.onchange}
                                id="cgpa"
                                defaultValue={cgpa}
                                placeholder="Cgpa"
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
                                onChange={this.onchange}
                                id="dob"
                                defaultValue={dob}
                                placeholder="Date of Birth"
                                type="text"
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                          {/* <Col className="px-1" md="4">
                            <Form.Group>
                              <label>Role</label>
                              <Form.Control
                                onChange={this.onchange}
                                id="role"
                                defaultValue={role}
                                placeholder="role"
                                type="text"
                              ></Form.Control>
                            </Form.Group>
                          </Col> */}
                          <Col className="pl-1" md="4">
                            <Form.Group>
                              <label>Verification status</label>
                              <Form.Control
                                onChange={this.onchange}
                                id="isVerified"
                                defaultValue={isVerified}
                                placeholder="isVerified"
                                type="text"
                              ></Form.Control>
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
      return (
        <>
          <div class="loaderContainer">
            <div class="loader"></div>
          </div>
        </>
      );
    }
  }
}

CoordinatorDashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(CoordinatorDashboard);

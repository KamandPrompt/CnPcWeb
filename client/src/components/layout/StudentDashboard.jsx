import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
// import { updateUser } from "../../actions/authActions";

class StudentDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      role: "",
      DataisLoaded: false,
    };
  }
  // constructor() {
  //   super();
  //   this.state = {
  //     name: this.props.auth.name,
  //     rollNo: this.props.auth.rollNo,
  //     batch: this.props.auth.batch,
  //     degree: this.props.auth.degree,
  //     branch: this.props.auth.branch,
  //     cgpa: this.props.auth.cgpa,
  //     email: this.props.auth.email,
  //     contactNumber: this.props.auth.contactNumber,
  //     dob:this.props.auth.dob,
  //     gender: this.props.auth.gender,
  //     resume: this.props.auth.resume,
  //     password: this.props.auth.password,
  //     isVerified: this.props.auth.isVerified,
  //     role: this.props.auth.role,
  //   };
  // }
  async componentDidMount() {
    const roll = this.props.auth.user.rollNo;
    if (roll != null) {
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
          // console.log(this.state.studentsData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  onchange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    // this.setState(e.target.id=e.target.value)
    // console.log(e.target.value);
    // console.log(e.target.id);
  };
  updateUser = (userData) => {
    console.log("hello");
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
    this.updateUser(user);
  };

  render() {
    const { user } = this.props.auth;

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
                      <Col className="pr-1" md="4">
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
                      <Col className="px-1" md="4">
                        <Form.Group>
                          <label>Name</label>
                          <Form.Control
                            onChange={this.onchange}
                            id="name"
                            defaultValue={name}
                            disabled
                            placeholder="Name"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pr-1" md="4">
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
                    {/* <Row>
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
                    </Row> */}
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
                            disabled
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
                            disabled
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
                            disabled
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
                            disabled
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="4">
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
                      {/* <Col className="pl-1" md="4">
                        <Form.Group>
                          <div>
                            <label>gender</label>
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
                      </Col> */}
                    </Row>
                    <Row>
                      <Col className="pr-1" md="3">
                        <Form.Group>
                          <label>Degree</label>
                          <Form.Control
                            onChange={this.onchange}
                            id="degree"
                            defaultValue={degree}
                            placeholder="Degree"
                            disabled
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="3">
                        <Form.Group>
                          <label>Batch</label>
                          <Form.Control
                            onChange={this.onchange}
                            id="batch"
                            disabled
                            defaultValue={batch}
                            placeholder="batch"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="3">
                        <Form.Group>
                          <label>CGPA</label>
                          <Form.Control
                            onChange={this.onchange}
                            id="cgpa"
                            defaultValue={cgpa}
                            placeholder="Cgpa"
                            type="text"
                            disabled
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pr-1" md="3">
                        <Form.Group>
                          <div>
                            <label>Gender</label>
                          </div>
                          <Form.Select
                            className="btn-sm primary"
                            aria-label="Default select example"
                            onChange={this.onchange}
                            id="gender"
                            disabled
                            value={gender}
                            style={{ width: "100%", height: "40px" }}
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
                          <label>Date of Birth</label>
                          <Form.Control
                            onChange={this.onchange}
                            id="dob"
                            defaultValue={dob}
                            placeholder="Date of Birth"
                            type="text"
                            disabled
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
                          <div>
                            <label>Verification Status</label>
                          </div>
                          <Form.Select
                            disabled
                            className="btn-sm primary"
                            aria-label="Default select example"
                            onChange={this.onchange}
                            id="isVerified"
                            value={isVerified}
                          >
                            {isVerified ? (
                              <>
                                <option value="Yes" selected>
                                  Verified
                                </option>
                                <option value="No">Not verified</option>
                              </>
                            ) : (
                              <>
                                <option value="No" selected>
                                  Not verified
                                </option>
                                <option value="Yes">Verified</option>
                              </>
                            )}
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
}

StudentDashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(StudentDashboard);

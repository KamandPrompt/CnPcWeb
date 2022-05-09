import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
// import { updateUser } from "../../actions/authActions";

class StudentDashboard extends Component {
  constructor() {
    super();
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
      Gender: "",
      resume: "",
      password: "",
      verification_status: "",
      role: "",
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
  //     Gender: this.props.auth.Gender,
  //     resume: this.props.auth.resume,
  //     password: this.props.auth.password,
  //     verification_status: this.props.auth.verification_status,
  //     role: this.props.auth.role,
  //   };
  // }
  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  onchange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    // this.setState(e.target.id=e.target.value)
    // console.log(e.target.value);
    // console.log(e.target.id);
  }
  updateUser = (userData) => {
    console.log("hello");
    axios.post("api/students/update", userData).then((res)=>{
      console.log(res);
      alert(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  };

  onsubmit = (e) => {
    e.preventDefault();
    const user = {
        name : this.state.name,
        rollNo: rollNo.value,
        email : email.value,
        batch:batch.value,
        contactNumber: contactNumber.value,
        branch: branch.value,
        Gender: Gender.value,
        degree: degree.value,
        cgpa: cgpa.value,
        dob: dob.value,
        resume: resume.value,
        verification_status : this.state.verification_status,
        role : role.value
    };
    this.updateUser(user);
  }

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
      Gender,
      resume,
      password,
      verification_status,
      role
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
                            defaultValue={user.rollNo}
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
                            defaultValue={user.name}
                            disabled
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
                            defaultValue={user.email}
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
                            defaultValue={user.contactNumber}
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
                            defaultValue={user.branch}
                            placeholder="Branch"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="4">
                        <Form.Group>
                          <label>Resume</label>
                          <Form.Control
                            onChange={this.onchange}
                            id="resume"
                            defaultValue={user.resume}
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
                          <Form.Select className="btn-sm primary" aria-label="Default select example" onChange={this.onchange} id="Gender">
                            <option value={user.Gender} selected>{user.Gender}</option>
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
                            onChange={this.onchange}
                            id="degree"
                            defaultValue={user.degree}
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
                            defaultValue={user.batch}
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
                            defaultValue={user.cgpa}
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
                            defaultValue={user.dob}
                            placeholder="Date of Birth"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="4">
                        <Form.Group>
                          <label>Role</label>
                          <Form.Control
                            onChange={this.onchange}
                            id="role"
                            defaultValue={user.role}
                            placeholder="role"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <label>Verification status</label>
                          <Form.Control
                            disabled
                            defaultValue="No"
                            placeholder="Verification Code"
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
}

StudentDashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(StudentDashboard);

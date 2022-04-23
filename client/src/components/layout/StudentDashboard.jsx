import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

class StudentDashboard extends Component {
  constructor() {
    super();
    this.state = {
      name:  "",
      rollNo:  "",
      batch:  "",
      degree:  "",
      branch:  "",
      cgpa:  "",
      email:  "",
      contactNumber:  "",
      dob: "",
      Gender:  "",
      resume:  "",
      password:  "",
      verification_status:  "",
      role:  "",
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
    console.log(e.target.value);
  }

  render() {
    const {user} = this.props.auth;

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
                            defaultValue={user.contactNumber}
                            placeholder="Home Address"
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
                            defaultValue=""
                            placeholder="City"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="4">
                        <Form.Group>
                          <label>Resume</label>
                          <Form.Control
                            defaultValue="Enter the drive link"
                            placeholder="Country"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <label>Gender</label>
                            {/* <Form.Check
                              inline
                              label="Male"
                              name="group1"
                              type="radio"
                              id="inline-radio-1"
                            />
                            <Form.Check
                              inline
                              label="Female"
                              name="group1"
                              type="radio"
                              id="inline-radio-2"
                            />
                            <Form.Check
                              inline
                              label="Others"
                              type="radio"
                              id="inline-radio-3"
                            /> */}
                          <Form.Check
                            inline="true"
                            type="radio"
                            name="group1"
                            id={`default-radio`}
                            label={"Male"}
                          />
                          <Form.Check
                            inline="true"
                            type="radio"
                            name="group1"
                            id={`default-radio`}
                            label={"Male"}
                          />
                          <Form.Check
                            inline="true"
                            type="radio"
                            name="group1"
                            id={`default-radio`}
                            label={"Others"}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <Form.Group>
                          <label>Degree</label>
                          <Form.Control
                            defaultValue=""
                            placeholder="City"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="4">
                        <Form.Group>
                          <label>Batch</label>
                          <Form.Control
                            defaultValue=""
                            placeholder="Country"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <label>CGPA</label>
                          <Form.Control
                            placeholder="ZIP Code"
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
                            defaultValue=""
                            placeholder="City"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="4">
                        <Form.Group>
                          <label>Role</label>
                          <Form.Control
                            defaultValue=""
                            placeholder="Country"
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
                            placeholder="ZIP Code"
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

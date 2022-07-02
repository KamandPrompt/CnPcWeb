import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

class RecruiterDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      contactPerson: "",
      designation: "",
      telephone: "",
      mobile: "",
      isVerified: "",
      role: "",
      DataisLoaded: false,
      CID: this.props.auth.user.id,
      currrentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      POCName: "",
      POCMobile: "",
    };
  }

  async componentDidMount() {
    const email = this.props.auth.user.email;
    // console.log(this.props.auth.user);
    // console.log(email);
    if (email != null) {
      await axios
        .get(`/api/recruiters/${email}`)
        .then((res) => {
          this.setState({
            name: res.data.details.name,
            contactPerson: res.data.details.contactPerson,
            designation: res.data.details.designation,
            email: email,
            telephone: res.data.details.telephone,
            mobile: res.data.details.mobile,
            isVerified: res.data.details.isVerified,
            role: res.data.details.role,
            POCName: res.data.details.POCName,
            POCMobile: res.data.details.POCMobile,
            DataisLoaded: true,
          });
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
    // console.log("hello");
    axios
      .post("/api/recruiters/update", userData)
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
      contactPerson: this.state.contactPerson,
      designation: this.state.designation,
      email: this.state.email,
      telephone: this.state.telephone,
      mobile: this.state.mobile,
      isVerified: this.state.isVerified === "Yes" ? true : false,
      role: this.state.role,
      POCMobile: this.state.POCMobile,
      POCName: this.state.POCName,
    };
    this.updateUser(user);
  };
  onSubmitPassword = (e) => {
    const data = {
      email: this.state.email,
      currentPassword: this.state.currentPassword,
      newPassword: this.state.newPassword,
    };
    const newPassword = this.state.newPassword;
    if (this.state.currentPassword === "" || this.state.newPassword === "") {
      alert("Empty Passwords not allowed!!");
    } else if (this.state.newPassword != this.state.confirmNewPassword) {
      alert("New Passwords don't match");
    } else if (newPassword.length < 8) {
      alert("Your password must be at least 8 characters.");
    } else if (newPassword.search(/[a-z]/i) < 0) {
      alert("Your password must contain at least one letter.");
    } else if (newPassword.search(/[0-9]/) < 0) {
      alert("Your password must contain at least one digit.");
    } else if (
      newPassword.search(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) < 0
    ) {
      alert("Your password must contain at least one special character.");
    } else {
      axios.post("api/recruiters/updatePassword", data).then((res) => {
        alert(res.data.message);
      });
    }
  };
  render() {
    const { user } = this.props.auth;

    const {
      name,
      email,
      contactPerson,
      designation,
      telephone,
      mobile,
      isVerified,
      role,
      POCName,
      POCMobile,
    } = this.state;

    return (
      <>
        <Container fluid>
          {isVerified ? (
            <center>
              <Button
                className="btn-fill"
                style={{ width: "230px", margin: "40px" }}
                href="/fillINF"
                variant="info"
              >
                Fill INF Form
              </Button>
              <Button
                className="btn-fill"
                style={{ width: "230px", margin: "40px" }}
                href="/fillJNF"
                variant="info"
              >
                Fill JNF Form
              </Button>

              <Button
                className="btn-fill"
                style={{ width: "230px", margin: "40px" }}
                href="/formresponses"
                variant="info"
              >
                View Forms and Responses
              </Button>
            </center>
          ) : null}
          <Row>
            <Col md="12">
              <Card>
                <Card.Body>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="5">
                        <Form.Group>
                          <label>Company name</label>
                          <Form.Control
                            disabled
                            defaultValue={name}
                            placeholder="Company name"
                            type="text"
                            id="name"
                            onChange={this.onchange}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="3">
                        <Form.Group>
                          <label>Contact Person</label>
                          <Form.Control
                            onChange={this.onchange}
                            id="contactPerson"
                            defaultValue={contactPerson}
                            placeholder="Contact Person"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <label>Email address</label>
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
                      <Col className="pr-1" md="4">
                        <Form.Group>
                          <label>Designation</label>
                          <Form.Control
                            onChange={this.onchange}
                            id="designation"
                            Value={designation}
                            placeholder="Designation"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="4">
                        <Form.Group>
                          <label>Telephone</label>
                          <Form.Control
                            onChange={this.onchange}
                            id="telephone"
                            defaultValue={telephone}
                            placeholder="telephone"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <label>Mobile</label>
                          <Form.Control
                            onChange={this.onchange}
                            id="mobile"
                            defaultValue={mobile}
                            placeholder="mobile"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <Form.Group>
                          <label>Volunteer Name</label>
                          <Form.Control
                            disabled
                            onChange={this.onchange}
                            id="POCName"
                            Value={POCName}
                            placeholder="Volunteer name"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="4">
                        <Form.Group>
                          <label>Volunteer Contact number</label>
                          <Form.Control
                            disabled
                            onChange={this.onchange}
                            id="POCMobile"
                            Value={POCMobile}
                            placeholder="Volunteer mobile number"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
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
                        // type="submit"
                        variant="info"
                        onClick={this.onsubmit}
                      >
                        Update Profile
                      </Button>
                    </div>
                    <br></br>
                    <h3 style={{ marginLeft: "20px 0px" }}>
                      Want to change password?
                    </h3>
                    <Row>
                      <Col>
                        <Form.Control
                          onChange={this.onchange}
                          id="currentPassword"
                          placeholder="Current Password"
                          type="password"
                        ></Form.Control>
                      </Col>
                      <Col>
                        <Form.Control
                          onChange={this.onchange}
                          id="newPassword"
                          placeholder="New Password"
                          type="password"
                        ></Form.Control>
                      </Col>
                      <Col>
                        <Form.Control
                          onChange={this.onchange}
                          id="confirmNewPassword"
                          placeholder="New Password"
                          type="password"
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Button
                      className="btn-fill"
                      style={{ width: "200px" }}
                      variant="info"
                      onClick={this.onSubmitPassword}
                    >
                      Update Password
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <br />
        <br />
      </>
    );
  }
}

RecruiterDashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(RecruiterDashboard);

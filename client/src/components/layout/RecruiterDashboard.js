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
    };
  }

  async componentDidMount() {
    const email = this.props.auth.user.email;
    console.log(this.props.auth.user)
    console.log(email)
    if (email != null) {
      console.log("!imp")
      await axios
        .get(`/api/recruiters/${email}`)
        .then((res) => {
          console.log("Hello")
          this.setState({
            name: res.data.details.name,
            contactPerson: res.data.details.contactPerson,
            designation: res.data.details.designation,
            email: email,
            telephone: res.data.details.telephone,
            mobile: res.data.details.mobile,
            isVerified: res.data.details.isVerified,
            role: res.data.details.role,
            DataisLoaded: true,
          });
          console.log(this.state.user);
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
      isVerified: (this.state.isVerified === "Yes"),
      role: this.state.role,
    };
    this.updateUser(user);
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
                          <label >
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
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <div>
                            <label>Verification Status</label>
                          </div>
                          <Form.Select
                            className="btn-sm primary"
                            aria-label="Default select example"
                            onChange={this.onchange}
                            id="isVerified"
                            value={isVerified}
                          >
                            {isVerified === "Yes" ? (
                              <>
                                <option value="Yes" selected>
                                  Yes
                                </option>
                                <option value="No">No</option>
                              </>
                            ) : (
                              <>
                                <option value="No" selected>
                                  No
                                </option>
                                <option value="Yes">Yes</option>
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
        <Button
          className="btn-fill"
          style={{ width: "200px" }}
          href="/createForm"
          variant="info"
        >
          Create Form
        </Button>
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

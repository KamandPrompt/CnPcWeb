import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "../admin.css";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

class ManageRecruiters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recruitersData: [],
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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const email = params.get("email");
    if (email === null) {
      await axios
        .get("/api/admins/all-recruiters")
        .then((res) => {
          this.setState({ recruitersData: res.data, DataisLoaded: true });
          // console.log(this.state.recruitersData);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      await axios
        .get(`/api/admins/recruiter/${email}`)
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
      .post("api/recruiters/update", userData)
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
      contactPerson: this.state.contactPerson,
      designation: this.state.designation,
      email: this.state.email,
      telephone: this.state.telephone,
      mobile: this.state.mobile,
      isVerified: this.state.isVerified === "Yes" ? true : false,
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
      email,
      contactPerson,
      designation,
      telephone,
      mobile,
      isVerified,
      role,
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

  render() {
    const { user } = this.props.auth;
    if (this.state.DataisLoaded === true) {
      if (this.state.email === "") {
        const userRows = this.state.recruitersData;
        for (const [i, obj] of userRows.entries()) {
          obj.isVerified = obj.isVerified ? "Verified" : "Not Verified";
        }
        const columns = [
          { field: "name", headerName: "Name", hideable: false, width: 100 },
          {
            field: "email",
            headerName: "Email",
            hideable: false,
            width: 200,
          },
          {
            field: "isVerified",
            headerName: "Verification Status",
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
                  <Link to={"?email=" + params.row.email} target="_blank">
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
                  <h3>Registered Recruiters details</h3>
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
                      getRowId={(row) => row.email}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      } else {
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

ManageRecruiters.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(ManageRecruiters);

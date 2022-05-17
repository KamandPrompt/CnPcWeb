import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
// import { updateUser } from "../../actions/authActions";

class INF extends Component {
    //   constructor(props) {
    //     super(props);
    //     this.state = {
    //       name: "",
    //       rollNo: "",
    //       batch: "",
    //       degree: "",
    //       branch: "",
    //       cgpa: "",
    //       email: "",
    //       contactNumber: "",
    //       dob: "",
    //       gender: "",
    //       resume1: "",
    //       resume2: "",
    //       resume3: "",
    //       isVerified: "",
    //       role: "",
    //       DataisLoaded: false,
    //     };
    //   }

    async componentDidMount() {

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

    //   onsubmit = (e) => {
    //     e.preventDefault();
    //     const user = {
    //       name: this.state.name,
    //       rollNo: this.state.rollNo,
    //       email: this.state.email,
    //       batch: this.state.batch,
    //       contactNumber: this.state.contactNumber,
    //       branch: this.state.branch,
    //       gender: this.state.gender,
    //       degree: this.state.degree,
    //       cgpa: this.state.cgpa,
    //       dob: this.state.dob,
    //       resume1: this.state.resume1,
    //       resume2: this.state.resume2,
    //       resume3: this.state.resume3,
    //       isVerified: this.state.isVerified,
    //       role: this.state.role,
    //     };
    //     this.updateUser(user);
    //   };

    render() {
        const { user } = this.props.auth;
        const orgs = ["Govt. Owned", "MNC(Indian origin)", "MNC(Indian origin)", "Private sector", "Public sector", "Start-up", "Others"];
        const buisness = ["Analytics", "Consulting", "Core (Technical)", "I.T/ITES", "FMCG", "Finance", "Management", "Research", "Education (Teaching)", "Others"];
        const test =["Paper Based", "Online","Aptitude test","Technical test"]
        const interview =["In Person", "Video Conferencing","Skype","Technical Interview","HR Interview"]
        const btech =["Computer Science and Engineering","Data Science and Engineering","Electrical Engineering","Mechanical Engineering","Civil Engineering","Engineering Physics","Bio-Engineering (B.Tech.-M.Tech. Dual Degree)"]
        const mtech =["Energy Engineering with specialization in Materials (EEM)","Mechanical Engineering with specialization in Energy systems (MES)","EE (VLSI)","Biotech","Power Electronics and Drives","Communications and Signal Processing","Structural Engineering"]
        const msc =["Chemistry","Applied Mathematics","Physics"]
        const ms =["School of Engineering","School of Computing & Electrical Engineering"]
        const phd =["School of Engineering","School of Computing & Electrical Engineering","School of Basic Sciences","School of Humanities and Social Sciences"]
        const internDuration =["2 months winter","2 months Summer","6 months winter","6 months Summer"]

        // const {
        //   name,
        //   rollNo,
        //   batch,
        //   degree,
        //   branch,
        //   cgpa,
        //   email,
        //   contactNumber,
        //   dob,
        //   gender,
        //   resume1,
        //   resume2,
        //   resume3,
        //   isVerified,
        //   role,
        // } = this.state;
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col md="12">
                            <Card>
                                <Card.Body>
                                    <Form>
                                        <h2>Company Details</h2>
                                        <Row>
                                            <Col className="pr-1" md="6">
                                                <Form.Group>
                                                    <label>Company name</label>
                                                    <Form.Control
                                                        // defaultValue={rollNo}
                                                        placeholder="Company name"
                                                        type="text"
                                                        id="companyName"
                                                        onChange={this.onchange}
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col className="px-1" md="6">
                                                <Form.Group>
                                                    <label>Website</label>
                                                    <Form.Control
                                                        onChange={this.onchange}
                                                        id="website"
                                                        // defaultValue={name}
                                                        placeholder="Website"
                                                        type="text"
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                <Form.Group>
                                                    <label>Postal Address</label>
                                                    <Form.Control
                                                        onChange={this.onchange}
                                                        id="postalAddress"
                                                        // defaultValue={contactNumber}
                                                        placeholder="Postal Address"
                                                        type="text"
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="px-1" md="6">
                                                <Form.Group>
                                                    <label>Country</label>
                                                    <Form.Control
                                                        onChange={this.onchange}
                                                        id="country"
                                                        // defaultValue={name}
                                                        placeholder="Country"
                                                        type="text"
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col className="px-1" md="6">
                                                <Form.Group>
                                                    <label>Pin/Zip code</label>
                                                    <Form.Control
                                                        onChange={this.onchange}
                                                        id="code"
                                                        // defaultValue={name}
                                                        placeholder="Pin/Zip code"
                                                        type="text"
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="px-1" md="12">
                                                <Form.Group>
                                                    <label>Type of organization</label>
                                                    <br />
                                                    <div className="container">
                                                        <Row>
                                                            {orgs.map((item, i) => {
                                                                return (
                                                                    <Col className="px-1" md="2" >
                                                                        <Form.Check
                                                                            inline
                                                                            label={item}
                                                                            name="group1"
                                                                            type="checkbox"
                                                                            id={`inline-checkbox-${i}`}
                                                                        />
                                                                    </Col>
                                                                )
                                                            })}
                                                        </Row>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row>
                                            <Col className="px-1" md="12">
                                                <Form.Group>
                                                    <label>Nature of Buisness</label>
                                                    <br />
                                                    <div className="container">
                                                        <Row>
                                                            {buisness.map((item, i) => {
                                                                return (
                                                                    <Col className="px-1" md="3" >
                                                                        <Form.Check
                                                                            inline
                                                                            label={item}
                                                                            name="group1"
                                                                            type="checkbox"
                                                                            id={`inline-checkbox-${i}`}
                                                                        />
                                                                    </Col>
                                                                )
                                                            })}
                                                        </Row>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <br />
                                        <br />
                                        <h2>Contact Details</h2>
                                        <br />
                                        <Row>
                                            <Col className="px-1" md="4">
                                                <Form.Group>
                                                    <label>Contact Person</label>
                                                    <Form.Control
                                                        onChange={this.onchange}
                                                        id="contactPerson"
                                                        // defaultValue={contactPerson}
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
                                                        // defaultValue={email}
                                                        placeholder="Email"
                                                        type="email"
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col className="pr-1" md="4">
                                                <Form.Group>
                                                    <label>Designation</label>
                                                    <Form.Control
                                                        onChange={this.onchange}
                                                        id="designation"
                                                        // Value={designation}
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
                                                        // defaultValue={telephone}
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
                                                        // defaultValue={mobile}
                                                        placeholder="mobile"
                                                        type="text"
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <h2>Internship Profile</h2>
                                        <br />
                                        <Row>
                                            <Col className="px-1" md="4">
                                                <Form.Group>
                                                    <label>Internship profile</label>
                                                    <Form.Control
                                                        onChange={this.onchange}
                                                        id="contactPerson"
                                                        // defaultValue={contactPerson}
                                                        placeholder="Contact Person"
                                                        type="text"
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col className="pl-1" md="4">
                                                <Form.Group>
                                                    <label>Skill set required</label>
                                                    <Form.Control
                                                        onChange={this.onchange}
                                                        id="skillSet"
                                                        // defaultValue={email}
                                                        placeholder="Skill set required"
                                                        as="textarea"
                                                        type="text"
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col className="pr-1" md="4">
                                                <Form.Group>
                                                    <label>Tentative number of Interns</label>
                                                    <Form.Control
                                                        onChange={this.onchange}
                                                        id="interns"
                                                        // Value={designation}
                                                        placeholder="Number of Interns"
                                                        type="text"
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col className="px-1" md="4">
                                                <Form.Group>
                                                    <label>Tentative Job Location(s)</label>
                                                    <Form.Control
                                                        onChange={this.onchange}
                                                        id="jobLocation"
                                                        // defaultValue={telephone}
                                                        placeholder="Tentative Job Location(s)"
                                                        type="text"
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col className="pl-1" md="4">
                                                <Form.Group>
                                                    <label>Stipend(per month)</label>
                                                    <Form.Control
                                                        onChange={this.onchange}
                                                        id="stipend"
                                                        // defaultValue={mobile}
                                                        placeholder="Stipend"
                                                        type="text"
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col className="pl-1" md="4">
                                                <Form.Group>
                                                    <label>Accommodation Provided</label>
                                                    <Form.Control
                                                        onChange={this.onchange}
                                                        id="mobile"
                                                        // defaultValue={mobile}
                                                        as="textarea"
                                                        placeholder="mobile"
                                                        type="text"
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pl-1" md="4">
                                                <Form.Group>
                                                    <label>Bonus/Perks/Travel</label>
                                                    <Form.Control
                                                        onChange={this.onchange}
                                                        id="mobile"
                                                        // defaultValue={mobile}
                                                        as="textarea"
                                                        placeholder="mobile"
                                                        type="text"
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col className="pl-1" md="12">
                                                <Form.Group>
                                                    <label>Duration of Internship</label>
                                                    <br />
                                                    <div className="container">
                                                        <Row>
                                                            {internDuration.map((item, i) => {
                                                                return (
                                                                    <Col className="px-1" md="12" >
                                                                        <Form.Check
                                                                            inline
                                                                            label={item}
                                                                            name="group1"
                                                                            type="checkbox"
                                                                            id={`inline-checkbox-${i}`}
                                                                        />
                                                                    </Col>
                                                                )
                                                            })}
                                                        </Row>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <br />
                                        <br />
                                        <br />
                                        <h2>Selection Process</h2>
                                        {/* <br /> */}
                                        <Row>
                                            <Col className="px-1" md="12">
                                                <Form.Group>
                                                    <label>Eligibility Criteria( like minimum CGPA, etc.. )</label>
                                                    <Form.Control
                                                        onChange={this.onchange}
                                                        id="eligibility"
                                                        // defaultValue={contactPerson}
                                                        placeholder="Eligibility Criteria"
                                                        type="text"
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col className="pl-1" md="4">
                                                <Form.Group>
                                                    <label>Resuume Shortlisting</label>
                                                    <Form.Control
                                                        onChange={this.onchange}
                                                        id="resumeShortlist"
                                                        // defaultValue={email}
                                                        placeholder="Criteria for resume shortlisting"
                                                        type="text"
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col className="pr-1" md="4">
                                                <Form.Group>
                                                    <label>Pre-Placement Talk</label>
                                                    <Form.Control
                                                        onChange={this.onchange}
                                                        id="placementTalk"
                                                        // Value={designation}
                                                        placeholder="Number of Interns"
                                                        type="text"
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col className="px-1" md="4">
                                                <Form.Group>
                                                    <label>Group Discussion</label>
                                                    <Form.Control
                                                        onChange={this.onchange}
                                                        id="groupDiscussion"
                                                        // defaultValue={telephone}
                                                        placeholder="Mention group size and other details"
                                                        type="text"
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col className="pl-1" md="12">
                                            <Form.Group>
                                                    <br />
                                                    <label>Mode of Test</label>
                                                    <br />
                                                    <div className="container">
                                                        <Row>
                                                            {test.map((item, i) => {
                                                                return (
                                                                    <Col className="px-1" md="2" >
                                                                        <Form.Check
                                                                            inline
                                                                            label={item}
                                                                            name="group1"
                                                                            type="checkbox"
                                                                            id={`inline-checkbox-${i}`}
                                                                        />
                                                                    </Col>
                                                                )
                                                            })}
                                                        </Row>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                            <Col className="px-1" md="4">
                                                <Form.Group>
                                                    <label>Test Duration</label>
                                                    <Form.Control
                                                        onChange={this.onchange}
                                                        id="testDuration"
                                                        // defaultValue={telephone}
                                                        placeholder="Please specify the duration for the selected tests."
                                                        type="text"
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col className="pl-1" md="12">
                                            <Form.Group>
                                                    <br />
                                                    <label>Mode of Interview</label>
                                                    <br />
                                                    <div className="container">
                                                        <Row>
                                                            {interview.map((item, i) => {
                                                                return (
                                                                    <Col className="px-1" md="2" >
                                                                        <Form.Check
                                                                            inline
                                                                            label={item}
                                                                            name="group1"
                                                                            type="checkbox"
                                                                            id={`inline-checkbox-${i}`}
                                                                        />
                                                                    </Col>
                                                                )
                                                            })}
                                                        </Row>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                            <Col className="px-1" md="12">
                                                <Form.Group>
                                                    <br />
                                                    <label>Interview Duration and rounds</label>
                                                    <Form.Control
                                                        onChange={this.onchange}
                                                        id="testDuration"
                                                        // defaultValue={telephone}
                                                        placeholder="Please specify the and number of rounds for the selected mode of Interviews."
                                                        as="textarea"
                                                        type="text"
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <br />
                                        <br />
                                        <h2>Programme Details</h2>
                                        <p>Please tick mark the required degree and discipline in which you are interested to recruit</p>
                                        <br />
                                        <Row>
                                            <Col className="pl-1" md="12">
                                            <Form.Group>
                                                    <br />
                                                    <label>B.Tech</label>
                                                    <br />
                                                    <div className="container">
                                                        <Row>
                                                            {btech.map((item, i) => {
                                                                return (
                                                                    <Col className="px-1" md="4" >
                                                                        <Form.Check
                                                                            inline
                                                                            label={item}
                                                                            name="group1"
                                                                            type="checkbox"
                                                                            id={`inline-checkbox-${i}`}
                                                                        />
                                                                    </Col>
                                                                )
                                                            })}
                                                        </Row>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                            <Col className="pl-1" md="12">
                                            <Form.Group>
                                                    <br />
                                                    <label>M.Tech</label>
                                                    <br />
                                                    <div className="container">
                                                        <Row>
                                                            {mtech.map((item, i) => {
                                                                return (
                                                                    <Col className="px-1" md="6" >
                                                                        <Form.Check
                                                                            inline
                                                                            label={item}
                                                                            name="group1"
                                                                            type="checkbox"
                                                                            id={`inline-checkbox-${i}`}
                                                                        />
                                                                    </Col>
                                                                )
                                                            })}
                                                        </Row>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                            <Col className="pl-1" md="12">
                                            <Form.Group>
                                                    <br />
                                                    <label>M.Sc</label>
                                                    <br />
                                                    <div className="container">
                                                        <Row>
                                                            {msc.map((item, i) => {
                                                                return (
                                                                    <Col className="px-1" md="4" >
                                                                        <Form.Check
                                                                            inline
                                                                            label={item}
                                                                            name="group1"
                                                                            type="checkbox"
                                                                            id={`inline-checkbox-${i}`}
                                                                        />
                                                                    </Col>
                                                                )
                                                            })}
                                                        </Row>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                            <Col className="pl-1" md="12">
                                            <Form.Group>
                                                    <br />
                                                    <label>M.A.</label>
                                                    <br />
                                                    <div className="container">
                                                        <Row>
                                                            <Col className="px-1" md="4" >
                                                                <Form.Check
                                                                    inline
                                                                    label="Development Studies"
                                                                    name="group1"
                                                                    type="checkbox"
                                                                    id={`inline-checkbox-1`}
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                            <Col className="pl-1" md="12">
                                            <Form.Group>
                                                    <br />
                                                    <label>M.S.</label>
                                                    <br />
                                                    <div className="container">
                                                        <Row>
                                                            {ms.map((item, i) => {
                                                                return (
                                                                    <Col className="px-1" md="4" >
                                                                        <Form.Check
                                                                            inline
                                                                            label={item}
                                                                            name="group1"
                                                                            type="checkbox"
                                                                            id={`inline-checkbox-${i}`}
                                                                        />
                                                                    </Col>
                                                                )
                                                            })}
                                                        </Row>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                            <Col className="pl-1" md="12">
                                            <Form.Group>
                                                    <br />
                                                    <label>PhD.</label>
                                                    <br />
                                                    <div className="container">
                                                        <Row>
                                                            {phd.map((item, i) => {
                                                                return (
                                                                    <Col className="px-1" md="4" >
                                                                        <Form.Check
                                                                            inline
                                                                            label={item}
                                                                            name="group1"
                                                                            type="checkbox"
                                                                            id={`inline-checkbox-${i}`}
                                                                        />
                                                                    </Col>
                                                                )
                                                            })}
                                                        </Row>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <br />
                                        <br />
                                        <h3>Logistic Requirements (on Campus Drive)</h3>
                                        <br />
                                        <Row>
                                            <Col className="px-1" md="6">
                                                <Form.Group>
                                                    <label>Number of Members</label>
                                                    <Form.Control
                                                        onChange={this.onchange}
                                                        id="members"
                                                        // defaultValue={contactPerson}
                                                        placeholder="Contact Person"
                                                        type="text"
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col className="pl-1" md="6">
                                                <Form.Group>
                                                    <label>Number of Rooms required for selection process</label>
                                                    <Form.Control
                                                        onChange={this.onchange}
                                                        id="rooms"
                                                        // defaultValue={email}
                                                        placeholder="No of rooms"
                                                        type="text"
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col className="pr-1" md="12">
                                                <Form.Group>
                                                    <label>Other Requirments</label>
                                                    <Form.Control
                                                        onChange={this.onchange}
                                                        id="designation"
                                                        // Value={designation}
                                                        placeholder="Other Requirements"
                                                        as="textarea"
                                                        type="text"
                                                    ></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <br />
                                        <br />
                                        <h3>Logistic Requirements (Virtual Drive)</h3>
                                        <br />
                                        <Row>
                                            <Col className="pr-1" md="12">
                                                <Form.Group>
                                                    <label>Virtual Drive Requirments</label>
                                                    <Form.Control
                                                        onChange={this.onchange}
                                                        id="designation"
                                                        // Value={designation}
                                                        placeholder="Virtual Drive Requirments"
                                                        as="textarea"
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
                <div>
                Students' choices will be governed by the information you provide in this form. Therefore, please be as clear and detailed as possible.
Before filling the form kindly refer to the placement brochure and placement website for selection process and rules & regulations.
For any queries, you may contact the placement cell.

                </div>
            </>
        );
    }
}

INF.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(INF);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { fillJNF } from "../../actions/authActions";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link, Navigate } from "react-router-dom";

// import { updateUser } from "../../actions/authActions";

class JNF extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CID: this.props.auth.user.id,
      nameOfTheCompany: "",
      postalAddress: "",
      country: "",
      PINZIP: "",
      website: "",
      typeOfOrganization: Array(7).fill(false),
      natureOfBusiness: Array(10).fill(false),
      contactPerson: "",
      designation: "",
      emailAddress: "",
      telephone: "",
      mobile: "",
      jobDesignationOffered: "",
      skillSetRequired: "",
      tentativeNoOfVacancies: "",
      tentativeJobLocations: "",
      tentativeDateOfJoining: "",
      bonusPerksTravel: "",
      eligibilityCriteria: "",
      prePlacementTalk: "",
      resumeShortlisting: "",
      groupDiscussion: "",
      modeOfTest: Array(2).fill(false),
      modeOfInterview: Array(3).fill(false),
      typeOfTest: Array(2).fill(false),
      aptitudeTest: "",
      technicalTest: "",
      typeOfInterview: Array(2).fill(false),
      numberOfMembers: "",
      numberOfRoomsRequired: "",
      otherRequirements: "",
      virtualDriveRequirements: "",
      durationOfEachRoundHR: "",
      durationOfEachRoundTech: "",
      noOfRoundsHR: "",
      noOfRoundsTech: "",
      eligibility: [],
      btech: Array(7).fill(false),
      mtech: Array(7).fill(false),
      msc: Array(3).fill(false),
      ms: Array(2).fill(false),
      phd: Array(4).fill(false),
      ma: Array(1).fill(false),
      ctcBtech: "",
      grossBtech: "",
      takeHomeBtech: "",
      bonusBtech: "",
      ctcMtech: "",
      grossMtech: "",
      takeHomeMtech: "",
      bonusMtech: "",
      ctcMSc: "",
      grossMSc: "",
      takeHomeMSc: "",
      bonusMSc: "",
      ctcMS: "",
      grossMS: "",
      takeHomeMS: "",
      bonusMS: "",
      ctcPhD: "",
      grossPhD: "",
      takeHomePhD: "",
      bonusPhD: "",
      ctcMA: "",
      grossMA: "",
      takeHomeMA: "",
      bonusMA: "",
      DataisLoaded: false,
      otherBusi: "",
      otherOrgs: "",
    };
    this.onchange = this.onchange.bind(this);
    this.onchangeRadio = this.onchangeRadio.bind(this);
  }

  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  createData = (
    programme,
    ctc,
    grossCompensation,
    takeHomeCompensation,
    bonus
  ) => {
    return { programme, ctc, grossCompensation, takeHomeCompensation, bonus };
  };
  createInput = (ID, Placeholder) => {
    return (
      <>
        <Form.Control
          onChange={this.onchange}
          id={ID}
          // defaultValue={name}
          placeholder={Placeholder}
          type="text"
        ></Form.Control>
      </>
    );
  };

  onchange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    // this.setState(e.target.id=e.target.value)
    // console.log(e.target.value);
    // console.log(e.target.id);
  };

  onchangeRadio = (e, arr) => {
    let idx = e.target.value;
    this.setState({ [e.target.name]: arr[idx] });
  };

  onchangeCheck = (e, arr) => {
    let idx = e.target.value;
    let val = e.target.name;
    let arr1 = this.state[val];
    arr1[idx] = !arr1[idx];
    this.setState({ [e.target.name]: arr1 });
  };

  onsubmit = (e) => {
    e.preventDefault();
    let typeofTest = ["Aptitude test", "Technical test"];
    let test = [];
    for (let i = 0; i < typeofTest.length; i++) {
      if (this.state.typeOfTest[i]) {
        test.push(typeofTest[i]);
      }
    }
    let typeofInterview = ["Technical Interview", "HR Interview"];
    let interviewType = [];
    for (let i = 0; i < typeofInterview.length; i++) {
      if (this.state.typeOfInterview[i]) {
        interviewType.push(typeofInterview[i]);
      }
    }
    const programs = [
      {
        name: "BTECH",
        branches: [
          "Computer Science and Engineering",
          "Data Science and Engineering",
          "Electrical Engineering",
          "Mechanical Engineering",
          "Civil Engineering",
          "Engineering Physics",
          "Bio-Engineering (B.Tech.-M.Tech. Integrated Dual Degree)",
        ],
        branchIDs: ["CSE", "DSE", "EE", "ME", "CE", "EP", "BIOE"],
      },
      {
        name: "MTECH",
        branches: [
          "Energy Engineering with specialization in Materials (EEM)",
          "Mechanical Engineering with specialization in Energy systems (MES)",
          "EE (VLSI)",
          "Biotech",
          "Power Electronics and Drives",
          "Communications and Signal Processing",
          "Structural Engineering",
        ],
        branchIDs: ["EEM", "MES", "VLSI", "BIOT", "PED", "CSP", "SE"],
      },
      {
        name: "MSC",
        branches: ["Chemistry", "Applied Mathematics", "Physics"],
        branchIDs: ["CM", "AM", "PY"],
      },
      {
        name: "MS",
        branches: [
          "School of Engineering",
          "School of Computing & Electrical   Engineering",
        ],
        branchIDs: ["SE", "SCEE"],
      },
      {
        name: "MA",
        branches: ["Development Studies"],
        branchIDs: ["DS"],
      },
      {
        name: "PHD",
        branches: [
          "School of Engineering",
          "School of Computing & Electrical Engineering",
          "School of Basic Sciences",
          "School of Humanities and Social Sciences",
        ],
        branchIDs: ["SE", "SCEE", "SBS", "SHS"],
      },
    ];
    const orgs = [
      "Govt. Owned",
      "MNC(Indian origin)",
      "MNC(Foreign origin)",
      "Private sector",
      "Public sector",
      "Start-up",
      "Others",
    ];
    const typeOrgs = [];
    for (let i = 0; i < orgs.length; i++) {
      if (this.state.typeOfOrganization[i] && i == 6) {
        typeOrgs.push(this.state.otherOrgs);
      }
      if (this.state.typeOfOrganization[i] && i != 6) {
        typeOrgs.push(orgs[i]);
      }
    }
    const business = [
      "Analytics",
      "Consulting",
      "Core (Technical)",
      "I.T/ITES",
      "FMCG",
      "Finance",
      "Management",
      "Research",
      "Education (Teaching)",
      "Others",
    ];
    const natureBusi = [];
    for (let i = 0; i < business.length; i++) {
      if (this.state.natureOfBusiness[i] && i == 9) {
        natureBusi.push(this.state.otherBusi);
      }
      if (this.state.natureOfBusiness[i] && i != 9) {
        natureBusi.push(business[i]);
      }
    }
    const typeTest = [];
    const Test = ["Paper Based", "Online"];
    for (let i = 0; i < Test.length; i++) {
      if (this.state.modeOfTest[i]) {
        typeTest.push(Test[i]);
      }
    }
    const interview = ["In Person", "Video Conferencing", "Skype"];
    const modeInterview = [];
    for (let i = 0; i < interview.length; i++) {
      if (this.state.modeOfInterview[i]) {
        modeInterview.push(interview[i]);
      }
    }
    let dept = [];
    for (let i = 0; i < programs.length; i++) {
      dept.push(programs[i].branchIDs);
    }
    let deptName = ["btech", "mtech", "msc", "ms", "ma", "phd"];
    let eligibility = [];
    for (let i = 0; i < deptName.length; i++) {
      let deptArr = [];
      let temp = this.state[deptName[i]];
      for (let j = 0; j < temp.length; j++) {
        if (temp[j]) {
          deptArr.push(dept[i][j]);
        }
      }
      const newData = {
        program: deptName[i].toUpperCase(),
        branch: deptArr,
      };
      eligibility.push(newData);
    }
    let technicalInterview = {
      noOfRounds: this.state.noOfRoundsTech,
      durationOfEachRound: this.state.durationOfEachRoundTech,
    };
    let hRInterview = {
      noOfRounds: this.state.noOfRoundsHR,
      durationOfEachRound: this.state.durationOfEachRoundHR,
    };
    let compensation = [
      {
        program: "BTECH",
        CTC: this.state.ctcBtech,
        gross: this.state.grossBtech,
        takeHome: this.state.takeHomeBtech,
        bonusIncentives: this.state.bonusBtech,
      },
      {
        program: "MTECH",
        CTC: this.state.ctcMtech,
        gross: this.state.grossMtech,
        takeHome: this.state.takeHomeMtech,
        bonusIncentives: this.state.bonusMtech,
      },
      {
        program: "MSC",
        CTC: this.state.ctcMSc,
        gross: this.state.grossMSc,
        takeHome: this.state.takeHomeMSc,
        bonusIncentives: this.state.bonusMSc,
      },
      {
        program: "MS",
        CTC: this.state.ctcMS,
        gross: this.state.grossMS,
        takeHome: this.state.takeHomeMS,
        bonusIncentives: this.state.bonusMS,
      },
      {
        program: "PHD",
        CTC: this.state.ctcPhD,
        gross: this.state.grossPhD,
        takeHome: this.state.takeHomePhD,
        bonusIncentives: this.state.bonusPhD,
      },
      {
        program: "MA",
        CTC: this.state.ctcMA,
        gross: this.state.grossMA,
        takeHome: this.state.takeHomeMA,
        bonusIncentives: this.state.bonusMA,
      },
    ];
    const user = {
      CID: this.state.CID,
      technicalInterview: technicalInterview,
      hRInterview: hRInterview,
      nameOfTheCompany: this.state.nameOfTheCompany,
      postalAddress: this.state.postalAddress,
      country: this.state.country,
      PINZIP: this.state.PINZIP,
      website: this.state.website,
      typeOfOrganization: typeOrgs,
      natureOfBusiness: natureBusi,
      contactPerson: this.state.contactPerson,
      designation: this.state.designation,
      emailAddress: this.state.emailAddress,
      telephone: this.state.telephone,
      mobile: this.state.mobile,
      jobDesignationOffered: this.state.jobDesignationOffered,
      skillSetRequired: this.state.skillSetRequired,
      tentativeNoOfVacancies: this.state.tentativeNoOfVacancies,
      tentativeJobLocations: this.state.tentativeJobLocations,
      tentativeDateOfJoining: this.state.tentativeDateOfJoining,
      eligibilityCriteria: this.state.eligibilityCriteria,
      prePlacementTalk: this.state.prePlacementTalk,
      resumeShortlisting: this.state.resumeShortlisting,
      groupDiscussion: this.state.groupDiscussion,
      modeOfTest: typeTest,
      typeOfTest: test,
      aptitudeTest: this.state.aptitudeTest,
      technicalTest: this.state.technicalTest,
      modeOfInterview: modeInterview,
      typeOfInterview: interviewType,
      numberOfMembers: this.state.numberOfMembers,
      numberOfRoomsRequired: this.state.numberOfRoomsRequired,
      otherRequirements: this.state.otherRequirements,
      virtualDriveRequirements: this.state.virtualDriveRequirements,
      technicalInterview: technicalInterview,
      hRInterview: hRInterview,
      eligibility: eligibility,
      compensation: compensation,
    };
    // console.log(user);
    this.props.fillJNF(user, this.props.history);
  };

  render() {
    const { user } = this.props.auth;
    console.log(this.state);
    const rows = [
      this.createData(
        "B.Tech.",
        this.createInput("ctcBtech", "Cost to company", this.onchange),
        this.createInput("grossBtech", "Gross compentation", this.onchange),
        this.createInput("takeHomeBtech", "Take Home", this.onchange),
        this.createInput("bonusBtech", "Bonus B.tech", this.onchange)
      ),
      this.createData(
        "M.Tech.",
        this.createInput("ctcMtech", "Cost to company", this.onchange),
        this.createInput("grossMtech", "Gross compentation", this.onchange),
        this.createInput("takeHomeMtech", "Take Home", this.onchange),
        this.createInput("bonusMtech", "Bonus M.tech", this.onchange)
      ),
      this.createData(
        "M.Sc",
        this.createInput("ctcMSc", "Cost to company", this.onchange),
        this.createInput("grossMSc", "Gross compentation", this.onchange),
        this.createInput("takeHomeMSc", "Take Home", this.onchange),
        this.createInput("bonusMSc", "Bonus M.Sc", this.onchange)
      ),
      this.createData(
        "M.S.",
        this.createInput("ctcMS", "Cost to company", this.onchange),
        this.createInput("grossMS", "Gross compentation", this.onchange),
        this.createInput("takeHomeMS", "Take Home", this.onchange),
        this.createInput("bonusMS", "Bonus MS", this.onchange)
      ),
      this.createData(
        "PhD",
        this.createInput("ctcPhD", "Cost to company", this.onchange),
        this.createInput("grossPhD", "Gross compentation", this.onchange),
        this.createInput("takeHomePhD", "Take Home", this.onchange),
        this.createInput("bonusPhD", "Bonus PhD", this.onchange)
      ),
      this.createData(
        "M.A.",
        this.createInput("ctcMA", "Cost to company", this.onchange),
        this.createInput("grossMA", "Gross compentation", this.onchange),
        this.createInput("takeHomeMA", "Take Home", this.onchange),
        this.createInput("bonusMA", "Bonus MA", this.onchange)
      ),
    ];
    const orgs = [
      "Govt. Owned",
      "MNC(Indian origin)",
      "MNC(Foreign origin)",
      "Private sector",
      "Public sector",
      "Start-up",
      "Others",
    ];
    const business = [
      "Analytics",
      "Consulting",
      "Core (Technical)",
      "I.T/ITES",
      "FMCG",
      "Finance",
      "Management",
      "Research",
      "Education (Teaching)",
      "Others",
    ];
    const test = ["Paper Based", "Online"];
    const typeofTest = ["Aptitude test", "Technical test"];
    const interview = ["In Person", "Video Conferencing", "Skype"];
    const typeofInterview = ["Technical Interview", "HR Interview"];
    const btech = [
      "Computer Science and Engineering",
      "Data Science and Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Engineering Physics",
      "Bio-Engineering (B.Tech.-M.Tech. Dual Degree)",
    ];
    const mtech = [
      "Energy Engineering with specialization in Materials (EEM)",
      "Mechanical Engineering with specialization in Energy systems (MES)",
      "EE (VLSI)",
      "Biotech",
      "Power Electronics and Drives",
      "Communications and Signal Processing",
      "Structural Engineering",
    ];
    const msc = ["Chemistry", "Applied Mathematics", "Physics"];
    const ms = [
      "School of Engineering",
      "School of Computing & Electrical Engineering",
    ];
    const phd = [
      "School of Engineering",
      "School of Computing & Electrical Engineering",
      "School of Basic Sciences",
      "School of Humanities and Social Sciences",
    ];
    const ma = ["Development Studies"];

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
    // console.log(this.state);
    if (!this.props.auth.user.isVerified) {
      return <Navigate to="/dashboardRecruiter" />;
    } else {
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
                              id="nameOfTheCompany"
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
                              id="PINZIP"
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
                                  if (
                                    this.state.typeOfOrganization[6] &&
                                    i == 6
                                  ) {
                                    return (
                                      <Col className="px-1" md="2">
                                        <Form.Check
                                          inline
                                          label={item}
                                          value={i}
                                          type="checkbox"
                                          name="typeOfOrganization"
                                          id={`org${i}`}
                                          onChange={(e) => {
                                            this.onchangeCheck(e, orgs);
                                          }}
                                        />
                                        <input
                                          type="text"
                                          id="otherOrgs"
                                          onChange={this.onchange}
                                        />
                                      </Col>
                                    );
                                  } else {
                                    return (
                                      <Col className="px-1" md="2">
                                        <Form.Check
                                          inline
                                          label={item}
                                          value={i}
                                          type="checkbox"
                                          name="typeOfOrganization"
                                          id={`org${i}`}
                                          onChange={(e) => {
                                            this.onchangeCheck(e, orgs);
                                          }}
                                        />
                                      </Col>
                                    );
                                  }
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
                            <label>Nature of Business</label>
                            <br />
                            <div className="container">
                              <Row>
                                {business.map((item, i) => {
                                  if (
                                    this.state.natureOfBusiness[i] &&
                                    i == 9
                                  ) {
                                    return (
                                      <Col className="px-1" md="3">
                                        <Form.Check
                                          inline
                                          label={item}
                                          name="natureOfBusiness"
                                          value={i}
                                          type="checkbox"
                                          id={`business${i}`}
                                          onChange={(e) => {
                                            this.onchangeCheck(e, business);
                                          }}
                                        />
                                        <input
                                          type="text"
                                          id="otherBusi"
                                          onChange={this.onchange}
                                        />
                                      </Col>
                                    );
                                  } else {
                                    return (
                                      <Col className="px-1" md="3">
                                        <Form.Check
                                          inline
                                          label={item}
                                          name="natureOfBusiness"
                                          value={i}
                                          type="checkbox"
                                          id={`business${i}`}
                                          onChange={(e) => {
                                            this.onchangeCheck(e, business);
                                          }}
                                        />
                                      </Col>
                                    );
                                  }
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
                              id="emailAddress"
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
                      <h2>Job Profile</h2>
                      <br />
                      <Row>
                        <Col className="px-1" md="4">
                          <Form.Group>
                            <label>Job Designation Offered</label>
                            <Form.Control
                              onChange={this.onchange}
                              id="jobDesignationOffered"
                              // defaultValue={contactPerson}
                              placeholder="Job Designation"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="4">
                          <Form.Group>
                            <label>Job Description (Skill set required)</label>
                            <Form.Control
                              onChange={this.onchange}
                              id="skillSetRequired"
                              // defaultValue={email}
                              placeholder="Skill set required"
                              as="textarea"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pr-1" md="4">
                          <Form.Group>
                            <label>Tentative number Vacancies</label>
                            <Form.Control
                              onChange={this.onchange}
                              id="tentativeNoOfVacancies"
                              // Value={designation}
                              placeholder="Number of Vacancies"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="px-1" md="4">
                          <Form.Group>
                            <label>Tentative Job Location(s)</label>
                            <Form.Control
                              onChange={this.onchange}
                              id="tentativeJobLocations"
                              // defaultValue={telephone}
                              placeholder="Tentative Job Location(s)"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="4">
                          <Form.Group>
                            <label>Tentative Date of Joining</label>
                            <Form.Control
                              onChange={this.onchange}
                              id="tentativeDateOfJoining"
                              // defaultValue={mobile}
                              placeholder="Tentative Date of joining"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                      <h2>Salary Details</h2>
                      <br />
                      <Row>
                        <TableContainer component={Paper}>
                          <Table
                            sx={{ minWidth: 650 }}
                            aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell>Programmes</TableCell>
                                <TableCell align="right">
                                  Cost to Company
                                </TableCell>
                                <TableCell align="right">
                                  Gross Compensation(INR)
                                </TableCell>
                                <TableCell align="right">
                                  Take Home Compensation(INR)
                                </TableCell>
                                <TableCell align="right">
                                  Bonus/Incentives(if any)
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {console.log(rows)}
                              {rows.map((row) => (
                                <TableRow
                                  key={row.programme}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    {row.programme}
                                  </TableCell>
                                  <TableCell align="right">{row.ctc}</TableCell>
                                  <TableCell align="right">
                                    {row.grossCompensation}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.takeHomeCompensation}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.bonus}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Row>
                      <br />
                      <br />
                      <br />
                      <h2>Selection Process</h2>
                      {/* <br /> */}
                      <Row>
                        <Col className="px-1" md="12">
                          <Form.Group>
                            <label>
                              Eligibility Criteria( like minimum CGPA, etc.. )
                            </label>
                            <Form.Control
                              onChange={this.onchange}
                              id="eligibilityCriteria"
                              // defaultValue={contactPerson}
                              placeholder="Eligibility Criteria"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="4">
                          <Form.Group>
                            <label>Resume Shortlisting</label>
                            <Form.Control
                              onChange={this.onchange}
                              id="resumeShortlisting"
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
                              id="prePlacementTalk"
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
                                    <Col className="px-1" md="2">
                                      <Form.Check
                                        inline
                                        label={item}
                                        name="modeOfTest"
                                        value={i}
                                        type="checkbox"
                                        id={`test${i}`}
                                        onChange={(e) => {
                                          this.onchangeCheck(e, test);
                                        }}
                                      />
                                    </Col>
                                  );
                                })}
                              </Row>
                            </div>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="12">
                          <Form.Group>
                            <br />
                            <label>Type of Test</label>
                            <br />
                            <div className="container">
                              <Row>
                                {typeofTest.map((item, i) => {
                                  return (
                                    <Col className="px-1" md="2">
                                      <Form.Check
                                        inline
                                        label={item}
                                        name="typeOfTest"
                                        type="checkbox"
                                        id={`typeOfTest${i}`}
                                        value={i}
                                        onChange={(e) => {
                                          this.onchangeCheck(e, typeofTest);
                                        }}
                                      />
                                    </Col>
                                  );
                                })}
                              </Row>
                            </div>
                          </Form.Group>
                        </Col>
                        {this.state.typeOfTest[0] &&
                        this.state.typeOfTest[1] ? (
                          <>
                            <Col className="px-1" md="4">
                              <Form.Group>
                                <label>Aptitude Test Duration</label>
                                <Form.Control
                                  onChange={this.onchange}
                                  id="aptitudeTest"
                                  // defaultValue={telephone}
                                  placeholder="Please specify the duration for the selected tests."
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                            <Col className="px-1" md="4">
                              <Form.Group>
                                <label>Technical Test Duration</label>
                                <Form.Control
                                  onChange={this.onchange}
                                  id="technicalTest"
                                  // defaultValue={telephone}
                                  placeholder="Please specify the duration for the selected tests."
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                          </>
                        ) : this.state.typeOfTest[0] ? (
                          <>
                            <Col className="px-1" md="4">
                              <Form.Group>
                                <label>Aptitude Test Duration</label>
                                <Form.Control
                                  onChange={this.onchange}
                                  id="aptitudeTest"
                                  // defaultValue={telephone}
                                  placeholder="Please specify the duration for the selected tests."
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                            <Col className="px-1" md="4">
                              <Form.Group>
                                <label>Technical Test Duration</label>
                                <Form.Control
                                  onChange={this.onchange}
                                  id="technicalTest"
                                  // defaultValue={telephone}
                                  placeholder="Please specify the duration for the selected tests."
                                  type="text"
                                  disabled
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                          </>
                        ) : this.state.typeOfTest[1] ? (
                          <>
                            <Col className="px-1" md="4">
                              <Form.Group>
                                <label>Aptitude Test Duration</label>
                                <Form.Control
                                  onChange={this.onchange}
                                  id="aptitudeTest"
                                  // defaultValue={telephone}
                                  placeholder="Please specify the duration for the selected tests."
                                  type="text"
                                  disabled
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                            <Col className="px-1" md="4">
                              <Form.Group>
                                <label>Technical Test Duration</label>
                                <Form.Control
                                  onChange={this.onchange}
                                  id="technicalTest"
                                  // defaultValue={telephone}
                                  placeholder="Please specify the duration for the selected tests."
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                          </>
                        ) : (
                          <>
                            <Col className="px-1" md="4">
                              <Form.Group>
                                <label>Aptitude Test Duration</label>
                                <Form.Control
                                  onChange={this.onchange}
                                  id="aptitudeTest"
                                  // defaultValue={telephone}
                                  placeholder="Please specify the duration for the selected tests."
                                  type="text"
                                  disabled
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                            <Col className="px-1" md="4">
                              <Form.Group>
                                <label>Technical Test Duration</label>
                                <Form.Control
                                  onChange={this.onchange}
                                  id="technicalTest"
                                  // defaultValue={telephone}
                                  placeholder="Please specify the duration for the selected tests."
                                  type="text"
                                  disabled
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                          </>
                        )}
                        <Col className="pl-1" md="12">
                          <Form.Group>
                            <br />
                            <label>Mode of Interview</label>
                            <br />
                            <div className="container">
                              <Row>
                                {interview.map((item, i) => {
                                  return (
                                    <Col className="px-1" md="2">
                                      <Form.Check
                                        inline
                                        label={item}
                                        value={i}
                                        name="modeOfInterview"
                                        type="checkbox"
                                        id={`interview${i}`}
                                        onChange={(e) => {
                                          this.onchangeCheck(e, interview);
                                        }}
                                      />
                                    </Col>
                                  );
                                })}
                              </Row>
                            </div>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="12">
                          <Form.Group>
                            <br />
                            <label>Type of Interview</label>
                            <br />
                            <div className="container">
                              <Row>
                                {typeofInterview.map((item, i) => {
                                  return (
                                    <Col className="px-1" md="2">
                                      <Form.Check
                                        inline
                                        label={item}
                                        name="typeOfInterview"
                                        type="checkbox"
                                        value={i}
                                        id={`typeOfInterview${i}`}
                                        onChange={(e) => {
                                          this.onchangeCheck(
                                            e,
                                            typeofInterview
                                          );
                                        }}
                                      />
                                    </Col>
                                  );
                                })}
                              </Row>
                            </div>
                          </Form.Group>
                        </Col>
                        {this.state.typeOfInterview[0] &&
                        this.state.typeOfInterview[1] ? (
                          <>
                            <Col className="px-1" md="12">
                              <Form.Group>
                                <br />
                                <label>HR Interview Duration</label>
                                <Form.Control
                                  onChange={this.onchange}
                                  id="durationOfEachRoundHR"
                                  // defaultValue={telephone}
                                  placeholder="Please specify the and number of rounds for the selected mode of Interviews."
                                  as="textarea"
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                            <Col className="px-1" md="12">
                              <Form.Group>
                                <br />
                                <label>HR Interview Rounds</label>
                                <Form.Control
                                  onChange={this.onchange}
                                  id="noOfRoundsHR"
                                  // defaultValue={telephone}
                                  placeholder="Please specify the and number of rounds for the selected mode of Interviews."
                                  as="textarea"
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                            <Col className="px-1" md="12">
                              <Form.Group>
                                <br />
                                <label>Technical Interview Duration</label>
                                <Form.Control
                                  onChange={this.onchange}
                                  id="durationOfEachRoundTech"
                                  // defaultValue={telephone}
                                  placeholder="Please specify the and number of rounds for the selected mode of Interviews."
                                  as="textarea"
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                            <Col className="px-1" md="12">
                              <Form.Group>
                                <br />
                                <label>Technical Interview Rounds</label>
                                <Form.Control
                                  onChange={this.onchange}
                                  id="noOfRoundsTech"
                                  // defaultValue={telephone}
                                  placeholder="Please specify the and number of rounds for the selected mode of Interviews."
                                  as="textarea"
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                          </>
                        ) : this.state.typeOfInterview[0] ? (
                          <>
                            <Col className="px-1" md="12">
                              <Form.Group>
                                <br />
                                <label>HR Interview Duration</label>
                                <Form.Control
                                  onChange={this.onchange}
                                  id="durationOfEachRoundHR"
                                  // defaultValue={telephone}
                                  placeholder="Please specify the and number of rounds for the selected mode of Interviews."
                                  as="textarea"
                                  type="text"
                                  disabled
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                            <Col className="px-1" md="12">
                              <Form.Group>
                                <br />
                                <label>HR Interview Rounds</label>
                                <Form.Control
                                  onChange={this.onchange}
                                  id="noOfRoundsHR"
                                  // defaultValue={telephone}
                                  placeholder="Please specify the and number of rounds for the selected mode of Interviews."
                                  as="textarea"
                                  type="text"
                                  disabled
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                            <Col className="px-1" md="12">
                              <Form.Group>
                                <br />
                                <label>Technical Interview Duration</label>
                                <Form.Control
                                  onChange={this.onchange}
                                  id="durationOfEachRoundTech"
                                  // defaultValue={telephone}
                                  placeholder="Please specify the and number of rounds for the selected mode of Interviews."
                                  as="textarea"
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                            <Col className="px-1" md="12">
                              <Form.Group>
                                <br />
                                <label>Technical Interview Rounds</label>
                                <Form.Control
                                  onChange={this.onchange}
                                  id="noOfRoundsTech"
                                  // defaultValue={telephone}
                                  placeholder="Please specify the and number of rounds for the selected mode of Interviews."
                                  as="textarea"
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                          </>
                        ) : this.state.typeOfInterview[1] ? (
                          <>
                            <Col className="px-1" md="12">
                              <Form.Group>
                                <br />
                                <label>HR Interview Duration</label>
                                <Form.Control
                                  onChange={this.onchange}
                                  id="durationOfEachRoundHR"
                                  // defaultValue={telephone}
                                  placeholder="Please specify the and number of rounds for the selected mode of Interviews."
                                  as="textarea"
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                            <Col className="px-1" md="12">
                              <Form.Group>
                                <br />
                                <label>HR Interview Rounds</label>
                                <Form.Control
                                  onChange={this.onchange}
                                  id="noOfRoundsHR"
                                  // defaultValue={telephone}
                                  placeholder="Please specify the and number of rounds for the selected mode of Interviews."
                                  as="textarea"
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                            <Col className="px-1" md="12">
                              <Form.Group>
                                <br />
                                <label>Technical Interview Duration</label>
                                <Form.Control
                                  onChange={this.onchange}
                                  id="durationOfEachRoundTech"
                                  // defaultValue={telephone}
                                  placeholder="Please specify the and number of rounds for the selected mode of Interviews."
                                  as="textarea"
                                  type="text"
                                  disabled
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                            <Col className="px-1" md="12">
                              <Form.Group>
                                <br />
                                <label>Technical Interview Rounds</label>
                                <Form.Control
                                  onChange={this.onchange}
                                  id="noOfRoundsTech"
                                  // defaultValue={telephone}
                                  placeholder="Please specify the and number of rounds for the selected mode of Interviews."
                                  as="textarea"
                                  type="text"
                                  disabled
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                          </>
                        ) : (
                          <>
                            <Col className="px-1" md="12">
                              <Form.Group>
                                <br />
                                <label>HR Interview Duration</label>
                                <Form.Control
                                  onChange={this.onchange}
                                  id="durationOfEachRoundHR"
                                  // defaultValue={telephone}
                                  placeholder="Please specify the and number of rounds for the selected mode of Interviews."
                                  as="textarea"
                                  type="text"
                                  disabled
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                            <Col className="px-1" md="12">
                              <Form.Group>
                                <br />
                                <label>HR Interview Rounds</label>
                                <Form.Control
                                  onChange={this.onchange}
                                  id="noOfRoundsHR"
                                  // defaultValue={telephone}
                                  placeholder="Please specify the and number of rounds for the selected mode of Interviews."
                                  as="textarea"
                                  type="text"
                                  disabled
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                            <Col className="px-1" md="12">
                              <Form.Group>
                                <br />
                                <label>Technical Interview Duration</label>
                                <Form.Control
                                  onChange={this.onchange}
                                  id="durationOfEachRoundTech"
                                  // defaultValue={telephone}
                                  placeholder="Please specify the and number of rounds for the selected mode of Interviews."
                                  as="textarea"
                                  type="text"
                                  disabled
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                            <Col className="px-1" md="12">
                              <Form.Group>
                                <br />
                                <label>Technical Interview Rounds</label>
                                <Form.Control
                                  onChange={this.onchange}
                                  id="noOfRoundsTech"
                                  // defaultValue={telephone}
                                  placeholder="Please specify the and number of rounds for the selected mode of Interviews."
                                  as="textarea"
                                  type="text"
                                  disabled
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                          </>
                        )}
                      </Row>
                      <br />
                      <br />
                      <h2>Programme Details</h2>
                      <p>
                        Please tick mark the required degree and discipline in
                        which you are interested to recruit
                      </p>
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
                                    <Col className="px-1" md="4">
                                      <Form.Check
                                        inline
                                        label={item}
                                        value={i}
                                        name="btech"
                                        type="checkbox"
                                        id={`btech${i}`}
                                        onChange={(e) => {
                                          this.onchangeCheck(e, btech);
                                        }}
                                      />
                                    </Col>
                                  );
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
                                    <Col className="px-1" md="4">
                                      <Form.Check
                                        inline
                                        label={item}
                                        value={i}
                                        name="mtech"
                                        type="checkbox"
                                        id={`mtech${i}`}
                                        onChange={(e) => {
                                          this.onchangeCheck(e, mtech);
                                        }}
                                      />
                                    </Col>
                                  );
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
                                    <Col className="px-1" md="4">
                                      <Form.Check
                                        inline
                                        label={item}
                                        value={i}
                                        name="msc"
                                        type="checkbox"
                                        id={`msc${i}`}
                                        onChange={(e) => {
                                          this.onchangeCheck(e, msc);
                                        }}
                                      />
                                    </Col>
                                  );
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
                                {ma.map((item, i) => {
                                  return (
                                    <Col className="px-1" md="4">
                                      <Form.Check
                                        inline
                                        label={item}
                                        value={i}
                                        name="ma"
                                        type="checkbox"
                                        id={`ma${i}`}
                                        onChange={(e) => {
                                          this.onchangeCheck(e, ma);
                                        }}
                                      />
                                    </Col>
                                  );
                                })}
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
                                    <Col className="px-1" md="4">
                                      <Form.Check
                                        inline
                                        label={item}
                                        value={i}
                                        name="ms"
                                        type="checkbox"
                                        id={`ms${i}`}
                                        onChange={(e) => {
                                          this.onchangeCheck(e, ms);
                                        }}
                                      />
                                    </Col>
                                  );
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
                                    <Col className="px-1" md="4">
                                      <Form.Check
                                        inline
                                        label={item}
                                        value={i}
                                        name="phd"
                                        type="checkbox"
                                        id={`phd${i}`}
                                        onChange={(e) => {
                                          this.onchangeCheck(e, phd);
                                        }}
                                      />
                                    </Col>
                                  );
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
                              id="numberOfMembers"
                              // defaultValue={contactPerson}
                              placeholder="Contact Person"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pl-1" md="6">
                          <Form.Group>
                            <label>
                              Number of Rooms required for selection process
                            </label>
                            <Form.Control
                              onChange={this.onchange}
                              id="numberOfRoomsRequired"
                              // defaultValue={email}
                              placeholder="No of rooms"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col className="pr-1" md="12">
                          <Form.Group>
                            <label>Other Requirements</label>
                            <Form.Control
                              onChange={this.onchange}
                              id="otherRequirements"
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
                            <label>Virtual Drive Requirements</label>
                            <Form.Control
                              onChange={this.onchange}
                              id="virtualDriveRequirements"
                              // Value={designation}
                              placeholder="Virtual Drive Requirements"
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
                          Submit
                        </Button>
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <div>
            Students' choices will be governed by the information you provide in
            this form. Therefore, please be as clear and detailed as possible.
            Before filling the form kindly refer to the placement brochure and
            placement website for selection process and rules & regulations. For
            any queries, you may contact the placement cell.
          </div>
        </>
      );
    }
  }
}

JNF.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser, fillJNF })(JNF);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, updateFormRecruiter } from "../../actions/authActions";
import { fillINF } from "../../actions/authActions";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Link } from "react-router-dom";

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
    name: "MA",
    branches: ["Development Studies"],
    branchIDs: ["DS"],
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

class ViewCreatedFormVolunteer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FID: "",
      title: "",
      type: "",
      JD: "",
      studentData: [],
      eligibility: [],
      batch: Array(6).fill(""),
      isChecked: Array(6).fill(false),
      isDataLoaded: false,
    };
    this.onsubmit = this.onsubmit.bind(this);
  }

  async componentDidMount() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const fid = params.get("fid");
    await axios
      .post(`/api/recruiters/getFormbyFID/${fid}`, { FID: fid })
      .then((res) => {
        const Data = res.data;
        let Batch = Array(6).fill("");
        let IsChecked = Array(6).fill(false);
        let e = [];
        e.push(Array(7).fill(false));
        e.push(Array(7).fill(false));
        e.push(Array(3).fill(false));
        e.push(Array(1).fill(false));
        e.push(Array(2).fill(false));
        e.push(Array(4).fill(false));
        const fields = Data.fields;
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
            name: "MA",
            branches: ["Development Studies"],
            branchIDs: ["DS"],
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
        for (let i = 0; i < programs.length; i++) {
          for (let j = 0; j < Data.eligibility.length; j++) {
            if (programs[i].name == Data.eligibility[j].program) {
              Batch[i] = Data.eligibility[j].batch;
              IsChecked[i] = true;
            }
          }
        }
        for (let i = 0; i < Data.eligibility.length; i++) {
          let x = Data.eligibility[i];
          if (x.program == "BTECH") {
            for (let j = 0; j < x.branch.length; j++) {
              for (let k = 0; k < e[0].length; k++) {
                if (x.branch[j] == programs[0].branchIDs[k]) {
                  e[0][k] = true;
                }
              }
            }
          } else if (x.program == "MTECH") {
            for (let j = 0; j < x.branch.length; j++) {
              for (let k = 0; k < e[1].length; k++) {
                if (x.branch[j] == programs[1].branchIDs[k]) {
                  e[1][k] = true;
                }
              }
            }
          } else if (x.program == "MSC") {
            for (let j = 0; j < x.branch.length; j++) {
              for (let k = 0; k < e[2].length; k++) {
                if (x.branch[j] == programs[2].branchIDs[k]) {
                  e[2][k] = true;
                }
              }
            }
          } else if (x.program == "MA") {
            for (let j = 0; j < x.branch.length; j++) {
              for (let k = 0; k < e[3].length; k++) {
                if (x.branch[j] == programs[3].branchIDs[k]) {
                  e[3][k] = true;
                }
              }
            }
          } else if (x.program == "MS") {
            for (let j = 0; j < x.branch.length; j++) {
              for (let k = 0; k < e[4].length; k++) {
                if (x.branch[j] == programs[4].branchIDs[k]) {
                  e[4][k] = true;
                }
              }
            }
          } else if (x.program == "PHD") {
            for (let j = 0; j < x.branch.length; j++) {
              for (let k = 0; k < e[5].length; k++) {
                if (x.branch[j] == programs[5].branchIDs[k]) {
                  e[5][k] = true;
                }
              }
            }
          }
        }
        this.setState({
          title: Data.title,
          JD: Data.JD,
          type: Data.type,
          isChecked: IsChecked,
          batch: Batch,
          studentData: fields,
          FID: fid,
          eligibility: e,
          isDataLoaded: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  onchange(e) {
    let arr = this.state.batch;
    // console.log(this.state.isChecked[e.target.id]);
    arr[e.target.id] = e.target.value;
    this.setState({ batch: arr });
  }

  onchangecheck(event, i, j) {
    // console.log(i,j);
    let arr = this.state.eligibility;
    let arr2 = this.state.isChecked;
    let batches_array = this.state.batch;
    if (batches_array[i] != "") {
      arr[i][j] = !arr[i][j];
    } else {
      alert("Enter batch first");
    }
    arr2[i] = false;
    // console.log(arr2[i]);
    // console.log(arr[i][j]);
    for (let k = 0; k < arr[i].length; k++) {
      if (arr[i][k]) {
        arr2[i] = true;
      }
    }
    this.setState({ eligibility: arr, isChecked: arr2 });
    if (arr2[i] == false) {
      let array = this.state.batch;
      array[i] = "";
      this.setState({ batch: array });
    }
  }

  onsubmit(e) {
    e.preventDefault();
    const arr = [];
    let len1 = programs.length;
    // console.log(programs);
    // console.log(this.state.isChecked);
    for (let i = 0; i < len1; i++) {
      if (this.state.isChecked[i]) {
        let arr2 = this.state.eligibility[i];
        let arr3 = [];
        for (let j = 0; j < arr2.length; j++) {
          if (arr2[j]) {
            arr3.push(programs[i].branchIDs[j]);
          }
        }
        let newData = {
          program: programs[i].name,
          branch: arr3,
          batch: this.state.batch[i],
        };
        arr.push(newData);
      }
    }
    // console.log(arr);
    const newForm = {
      FID: this.state.FID,
      eligibility: arr,
    };
    this.props.updateFormRecruiter(newForm, this.props.history);
  }

  render() {
    // console.log(this.state.eligibility);
    // console.log(this.state.batch);
    // console.log(this.state.isChecked);
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
        name: "MA",
        branches: ["Development Studies"],
        branchIDs: ["DS"],
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
    if (this.state.isDataLoaded) {
      return (
        <>
          <h2>{this.state.title}</h2>
          <h3>Job Description :</h3>
          <input type="text" value={this.state.JD} />
          <form style={{ paddingBottom: "20px", marginBottom: "40px" }}>
            {this.state.studentData.map((item) => {
              if (item.isSelected) {
                if (item.isRequired) {
                  return (
                    <div className="widget">
                      <label className="widgetLabel">{item.label}*</label>
                      <br />
                      <input className="widgetInput" value={item.description} />
                    </div>
                  );
                } else {
                  return (
                    <div className="widget">
                      <label className="widgetLabel">{item.label}</label>
                      <br />
                      <input className="widgetInput" value={item.description} />
                    </div>
                  );
                }
              }
            })}
          </form>
          <h3>Eligibility</h3>
          <br />
          <Row>
            <Col className="pl-1" md="12">
              <Form.Group>
                {this.state.eligibility.map((item, i) => {
                  // return(programs[i].name);
                  // console.log(item);
                  return (
                    <>
                      {this.state.isChecked[i] ? (
                        <label>
                          {`${programs[i].name}` +
                            ` ` +
                            `(${this.state.batch[i]} batch)`}
                        </label>
                      ) : (
                        <label>{programs[i].name}</label>
                      )}
                      <br />
                      <div className="container">
                        <Row>
                          {item.map((it, j) => {
                            if (item[j]) {
                              return (
                                <Col className="px-1" md="4">
                                  <Form.Check
                                    inline
                                    label={programs[i].branches[j]}
                                    name={programs[i].branches[j]}
                                    type="checkbox"
                                    id={programs[i].branches[j]}
                                    checked
                                    onChange={(event) => {
                                      this.onchangecheck(event, i, j);
                                    }}
                                  />
                                </Col>
                              );
                            } else {
                              return (
                                <Col className="px-1" md="4">
                                  <Form.Check
                                    inline
                                    label={programs[i].branches[j]}
                                    name={programs[i].branches[j]}
                                    type="checkbox"
                                    id={programs[i].branches[j]}
                                    checked={false}
                                    onChange={(event) => {
                                      this.onchangecheck(event, i, j);
                                    }}
                                  />
                                </Col>
                              );
                            }
                          })}
                        </Row>
                        <input
                          type="text"
                          id={`${i}`}
                          value={this.state.batch[i]}
                          onChange={(e) => {
                            this.onchange(e);
                          }}
                        />
                      </div>
                    </>
                  );
                })}
              </Form.Group>
            </Col>
          </Row>

          <Button
            className="btn-fill"
            style={{ width: "200px", marginBottom: "30px" }}
            type="submit"
            variant="info"
            onClick={this.onsubmit}
          >
            Update
          </Button>
        </>
      );
    } else {
      return <></>;
    }
  }
}

ViewCreatedFormVolunteer.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser, updateFormRecruiter })(
  ViewCreatedFormVolunteer
);

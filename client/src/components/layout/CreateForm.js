import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, createFormRecruiter } from "../../actions/authActions";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";
// import { alertcenter_v1beta1 } from "googleapis";
const fixedFields = [
  {
    label: "Name",
    description: "name",
    isRequired: true,
    isSelected: true,
    isFixed: true,
  },
  {
    label: "Roll Number",
    description: "rollNo",
    isRequired: true,
    isSelected: true,
    isFixed: true,
  },
  {
    label: "Batch",
    description: "batch",
    isRequired: true,
    isSelected: true,
    isFixed: true,
  },
  {
    label: "Degree",
    description: "degree",
    isRequired: true,
    isSelected: true,
    isFixed: true,
  },
  {
    label: "Branch",
    description: "branch",
    isRequired: true,
    isSelected: true,
    isFixed: true,
  },
  {
    label: "CGPA",
    description: "cgpa",
    isRequired: true,
    isSelected: true,
    isFixed: true,
  },
  {
    label: "Email",
    description: "email",
    isRequired: true,
    isSelected: true,
    isFixed: true,
  },
  {
    label: "Contact Number",
    description: "contactNumber",
    isRequired: true,
    isSelected: true,
    isFixed: true,
  },
  {
    label: "Date of Birth",
    description: "dob",
    isRequired: true,
    isSelected: true,
    isFixed: true,
  },
  {
    label: "Gender",
    description: "gender",
    isRequired: true,
    isSelected: true,
    isFixed: true,
  },
  {
    label: "Resume",
    description: "resume",
    isRequired: true,
    isSelected: true,
    isFixed: true,
  },
];
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

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FID: "",
      CID:"",
      formType: "",
      title: "",
      type: "",
      JD: "",
      isVerified: false,
      eligibility: [],
      fields: fixedFields,
      counter1: fixedFields.length,
      counter2: fixedFields.length,
      isChecked: Array(programs.length).fill(false),
      batch: Array(programs.length).fill(null),
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.showData = this.showData.bind(this);
    this.handleChangeCheckedBranch = this.handleChangeCheckedBranch.bind(this);
    this.handleChangeCheckedBatch = this.handleChangeCheckedBatch.bind(this);
    this.handleChangeChecked = this.handleChangeChecked.bind(this);
    // this.changeCountry = this.changeCountry.bind(this);
    // this.changeState = this.changeState.bind(this);
  }
  async componentDidMount() {
    let arr = [];
    programs.map((item, i) => {
      arr.push(Array(item.branches.length).fill(false));
    });
    this.setState({ eligibility: arr });
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const FID = params.get("fid");
    const type = params.get("type");
    this.setState({ FID: FID, formType: type });
    await 
      axios.post("/api/admins/getCIDUsingFID",{fid: FID, type:type})
      .then((res) => {
        console.log(res.data); 
        this.setState({CID : res.data.cid});
      }).catch((err) => {
        console.log(err);
      })
    
    // await axios
    //   .get("/api/admins/all-students")
    //   .then((res) => {
    //     for (var i = 0; i < res.data.length; i++) {
    //       if (res.data[i].isVerified === true) {
    //         res.data[i].isVerified = "Verified";
    //       } else {
    //         res.data[i].isVerified = "Not Verified";
    //       }
    //     }
    //     this.setState({ studentsData: res.data, DataisLoaded: true });
    //     // console.log(this.state.studentsData);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleChangeChecked(event, position) {
    const updatedCheckedState = this.state.isChecked.map((item, index) =>
      index === position ? !item : item
    );
    this.setState({ isChecked: updatedCheckedState });
    // console.log(this.state.isChecked);
  }

  handleChangeCheckedBranch(event, i, j) {
    let arr = this.state.eligibility;
    arr[i][j] = !arr[i][j];
    this.setState({ eligibility: arr });
  }

  handleChangeCheckedBatch(event, i) {
    let arr = this.state.batch;
    if (event.target.value == "") {
      arr[i] = null;
    } else {
      arr[i] = event.target.value;
    }
    this.setState({ batch: arr });
  }

  handleChangeField(event, i) {
    // console.log(event.target.checked);
    const newFields = this.state.fields;
    // console.log(newFields);
    newFields[i] = { ...newFields[i], [event.target.id]: event.target.value };
    this.setState({ fields: newFields });
    // console.log(newFields);
  }
  handleChangeBox(event, i) {
    // console.log(event.target.checked);
    const newFields = this.state.fields;
    // console.log(newFields);
    newFields[i] = { ...newFields[i], [event.target.id]: event.target.checked };
    this.setState({ fields: newFields });
    // console.log(newFields);
  }

  handleAdd1(counter1) {
    // console.log(counter1);
    this.setState({ counter1: counter1 + 1 });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  onSubmit = (e) => {
    e.preventDefault();
    const arr = [];
    let len1 = programs.length;
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
    const fields = [];
    for (const [i, obj] of this.state.fields.entries()) {
      if (obj.isSelected) {
        fields.push(obj);
      }
    }
    console.log(arr);
    const newForm = {
      title: this.state.title,
      JD: this.state.JD,
      type: this.state.type,
      formType: this.state.formType,
      FID: { type: this.state.formType, FID: this.state.FID },
      isVerified: this.state.isVerified,
      eligibility: arr,
      fields: fields,
      CID: this.state.CID,
    };
    // console.log(newForm);
    this.props.createFormRecruiter(newForm, this.props.history);
    const arr1 = [];
    programs.map((item, i) => {
      arr1.push(Array(item.branches.length).fill(false));
    });
    this.setState({
      title: "",
      type: "",
      isVerified: false,
      JD: "",
      eligibility: arr1,
      isChecked: Array(programs.length).fill(false),
      batch: Array(programs.length).fill(null),
      fields: fixedFields,
      counter1: fixedFields.length,
    });
  };

  addFields(counter1, counter2) {
    const list = [];
    if (this.state.fields.length < counter1) {
      this.state.fields.push({
        label: "",
        description: "",
        isRequired: false,
        isSelected: true,
        isFixed: false,
      });
    }
    for (let i = counter2; i < counter1; i++) {
      let num = i + 1;
      list.push(
        <div className="widget">
          <label className="widgetLabel">Label:</label>
          <input
            className="widgetInput"
            id="label"
            name="label"
            value={this.state.fields[i].label}
            onChange={(event) => {
              this.handleChangeField(event, i);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") e.preventDefault();
            }}
          />
          <label className="widgetLabel" style={{ marginBottom: "20px" }}>
            Required:
            {this.state.fields[i].isRequired ? (
              <input
                className="widgetCheck"
                type="checkbox"
                id="isRequired"
                name="isRequired"
                onChange={(event) => {
                  this.handleChangeBox(event, i);
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") e.preventDefault();
                }}
                checked
              />
            ) : (
              <input
                className="widgetCheck"
                type="checkbox"
                id="isRequired"
                name="isRequired"
                onChange={(event) => {
                  this.handleChangeBox(event, i);
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") e.preventDefault();
                }}
              />
            )}
          </label>
          <label className="widgetLabel">
            Select:
            {this.state.fields[i].isSelected ? (
              <input
                className="widgetCheck"
                type="checkbox"
                id="isSelected"
                name="isSelected"
                onChange={(event) => {
                  this.handleChangeBox(event, i);
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") e.preventDefault();
                }}
                checked
              />
            ) : (
              <input
                className="widgetCheck"
                type="checkbox"
                id="isSelected"
                name="isSelected"
                onChange={(event) => {
                  this.handleChangeBox(event, i);
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") e.preventDefault();
                }}
              />
            )}
          </label>
        </div>
      );
    }
    return <div>{list}</div>;
  }

  // showData() {
  //   let arr = [];
  //   let len1 = programs.length;
  //   for (let i = 0; i < len1; i++) {
  //     if (this.state.isChecked[i]) {
  //       let arr2 = this.state.eligibility[i];
  //       let arr3 = [];
  //       for (let j = 0; j < arr2.length; j++) {
  //         if (arr2[j]) {
  //           arr3.push(programs[i].branchIDs[j]);
  //         }
  //       }
  //       let newData = {
  //         program: programs[i].name,
  //         branch: arr3,
  //         batch: this.state.batch[i],
  //       };
  //       arr.push(newData);
  //     }
  //   }
  //   // console.log(arr);
  // }

  render() {
    const { user } = this.props.auth;
    console.log(this.state);
    return (
      <>
        <form className="recruiterForm" onSubmit={this.onSubmit}>
          <div className="widget">
            <label className="widgetLabel">Title:</label>
            <br />
            <input
              type=""
              id="title"
              name="title"
              onChange={this.handleChange}
              className="widgetInput"
              onKeyPress={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
            />
          </div>
          <div className="widget">
            <label className="widgetLabel" style={{ marginBottom: "15px" }}>
              Type:
            </label>
            <br />
            Internship
            <input
              className="widgetRadio"
              type="radio"
              id="type"
              name="type"
              value="internship"
              onChange={this.handleChange}
              onKeyPress={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
            />
            Placement
            <input
              className="widgetRadio"
              type="radio"
              id="type"
              name="type"
              value="placement"
              onChange={this.handleChange}
              onKeyPress={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
            />
          </div>
          <div className="widget">
            <label className="widgetLabel">Job Description :</label>
            <br />
            <textarea
              className="widgetArea"
              name="JD"
              id="JD"
              onChange={this.handleChange}
              onKeyPress={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
            />
          </div>
          <div className="widget">
            <label className="widgetLabel">Eligibility :</label>
            <br />
            {programs.map((program, i) => {
              return (
                <>
                  {program.name}
                  <input
                    className="widgetCheckbox"
                    type="checkbox"
                    id="eligibility"
                    name="eligibility"
                    value={program.name}
                    checked={this.state.isChecked[i]}
                    onChange={(event) => {
                      this.handleChangeChecked(event, i);
                    }}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") e.preventDefault();
                    }}
                  />
                  <br />

                  {this.state.isChecked[i] ? (
                    <>
                      {program.branches.map((branch, j) => {
                        return (
                          <>
                            {branch}
                            <input
                              className="widgetCheckbox"
                              type="checkbox"
                              id="eligibility"
                              name="eligibility"
                              value={branch}
                              onChange={(event) => {
                                this.handleChangeCheckedBranch(event, i, j);
                              }}
                              onKeyPress={(e) => {
                                if (e.key === "Enter") e.preventDefault();
                              }}
                            />
                            <br />
                          </>
                        );
                      })}
                      <input
                        type="text"
                        id="batch"
                        name="batch"
                        onChange={(event) => {
                          this.handleChangeCheckedBatch(event, i);
                        }}
                        className="widgetInput"
                        onKeyPress={(e) => {
                          if (e.key === "Enter") e.preventDefault();
                        }}
                      />
                    </>
                  ) : null}
                </>
              );
            })}
            {/* <button onClick={this.showData}>Click</button> */}
            {/* BTECH
            <input
              className="widgetCheckbox"
              type="checkbox"
              id="eligibility"
              name="eligibility"
              value="BTECH"
              onChange={this.handleChange}
              onKeyPress={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
            /> */}
          </div>
          <br />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Label</th>
                <th>Required</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              {this.state.fields.map((item, i) => {
                if (item.isFixed) {
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{item.label}</td>
                      <td>
                        {this.state.fields[i].isRequired ? (
                          <input
                            className="widgetCheck"
                            type="checkbox"
                            id="isRequired"
                            name="isRequired"
                            onChange={(event) => {
                              this.handleChangeBox(event, i);
                            }}
                            onKeyPress={(e) => {
                              if (e.key === "Enter") e.preventDefault();
                            }}
                            checked
                          />
                        ) : (
                          <input
                            className="widgetCheck"
                            type="checkbox"
                            id="isRequired"
                            name="isRequired"
                            onChange={(event) => {
                              this.handleChangeBox(event, i);
                            }}
                            onKeyPress={(e) => {
                              if (e.key === "Enter") e.preventDefault();
                            }}
                          />
                        )}
                      </td>
                      <td>
                        {this.state.fields[i].isSelected ? (
                          <input
                            className="widgetCheck"
                            type="checkbox"
                            id="isSelected"
                            name="isSelected"
                            onChange={(event) => {
                              this.handleChangeBox(event, i);
                            }}
                            onKeyPress={(e) => {
                              if (e.key === "Enter") e.preventDefault();
                            }}
                            checked
                          />
                        ) : (
                          <input
                            className="widgetCheck"
                            type="checkbox"
                            id="isSelected"
                            name="isSelected"
                            onChange={(event) => {
                              this.handleChangeBox(event, i);
                            }}
                            onKeyPress={(e) => {
                              if (e.key === "Enter") e.preventDefault();
                            }}
                          />
                        )}
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </Table>
          {this.addFields(this.state.counter1, this.state.counter2)}
          <div
            className="clearfix"
            style={{ textAlign: "center", margin: "10px 0px" }}
          >
            <Button
              className="btn-fill"
              style={{ width: "200px", marginBottom: "30px" }}
              type="submit"
              variant="info"
            >
              Create Form
            </Button>
          </div>
        </form>
        <button
          className="widgetButton"
          onClick={() => {
            this.handleAdd1(this.state.counter1);
          }}
        >
          <i className="fas fa-plus widgetPlus"> Add Field</i>
        </button>
      </>
    );
  }
}

CreateForm.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser, createFormRecruiter })(
  CreateForm
);

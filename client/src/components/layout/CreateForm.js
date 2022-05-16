import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, createFormRecruiter } from "../../actions/authActions";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
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
];

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      type: "",
      JD: "",
      isVerified: false,
      eligibility: [],
      fields: fixedFields,
      counter1: fixedFields.length,
      counter2: fixedFields.length,
      isChecked: Array(programs.length).fill(false),
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.changeCountry = this.changeCountry.bind(this);
    // this.changeState = this.changeState.bind(this);
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
    console.log(counter1);
    this.setState({ counter1: counter1 + 1 });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  onSubmit = (e) => {
    e.preventDefault();
    const fields = [];
    for (const [i, obj] of this.state.fields.entries()) {
      if (obj.isSelected) {
        fields.push(obj);
      }
    }
    console.log(fields);
    const newForm = {
      title: this.state.title,
      JD: this.state.JD,
      type: this.state.type,
      isVerified: this.state.isVerified,
      eligibility: this.state.eligibility,
      fields: fields,
      CID: this.props.auth.user.id,
    };
    console.log(newForm);
    this.props.createFormRecruiter(newForm, this.props.history);
    this.setState({
      title: "",
      type: "",
      isVerified: false,
      JD: "",
      eligibility: [],
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

  render() {
    const { user } = this.props.auth;

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
            {programs.map((item, i) => {
              return (
                <>
                  {item.name}
                  <input
                    className="widgetCheckbox"
                    type="checkbox"
                    id="eligibility"
                    name="eligibility"
                    value={item.name}
                    checked={this.state.isChecked[i]}
                    onChange={(event) => {
                      this.handleChangeChecked(event, i);
                    }}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") e.preventDefault();
                    }}
                  />

                  {this.state.isChecked[i]
                    ? item.branches.map((branch, j) => {
                        return (
                          <>
                            {branch}
                            <input
                              className="widgetCheckbox"
                              type="checkbox"
                              id="eligibility"
                              name="eligibility"
                              value={branch}
                              // checked={this.state.isChecked[i]}
                              // onChange={(event) => {
                              //   this.handleChangeChecked(event, i);
                              // }}
                              onKeyPress={(e) => {
                                if (e.key === "Enter") e.preventDefault();
                              }}
                            />
                          </>
                        );
                      })
                    : null}
                </>
              );
            })}
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

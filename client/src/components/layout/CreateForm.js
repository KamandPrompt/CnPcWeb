import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, createFormRecruiter } from "../../actions/authActions";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import Table from 'react-bootstrap/Table'
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
class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      type: "",
      JD: "",
      isVerified: false,
      fields: fixedFields,
      counter1: fixedFields.length,
      counter2: fixedFields.length,
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
      fields: fixedFields,
      counter1: fixedFields.length,
    });
  };

  addFields(counter1,counter2) {
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
            />
            Placement
            <input
              className="widgetRadio"
              type="radio"
              id="type"
              name="type"
              value="placement"
              onChange={this.handleChange}
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
            />
          </div>
          <div className="widget">
            <label className="widgetLabel">Eligibility :</label>
            <br />
            <textarea
              className="widgetArea"
              name="eligibility"
              id="eligibility"
              placeholder="abhi isse ache se krna h boht"
              onChange={this.handleChange}
            />
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
            {this.state.fields.map((item,i)=>{
              if(item.isFixed){
                return(
                  <tr>
                    <td>{i+1}</td>
                    <td>{item.label}</td>
                    <td>{this.state.fields[i].isRequired ? (
                <input
                  className="widgetCheck"
                  type="checkbox"
                  id="isRequired"
                  name="isRequired"
                  onChange={(event) => {
                    this.handleChangeBox(event, i);
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
                />
              )}</td>
                    <td>{this.state.fields[i].isSelected ? (
                <input
                  className="widgetCheck"
                  type="checkbox"
                  id="isSelected"
                  name="isSelected"
                  onChange={(event) => {
                    this.handleChangeBox(event, i);
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
                />
              )}</td>
                  </tr>
                )
              }
            })}
            </tbody>
          </Table>
          {this.addFields(this.state.counter1,this.state.counter2)}
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

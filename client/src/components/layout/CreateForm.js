import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, createFormRecruiter } from "../../actions/authActions";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
const fixedFields = [
  {
    label: "Name",
    description: "Full Name",
    isRequired: true,
    isSelected: true,
  },
  {
    label: "Roll Number",
    description: "Roll Number",
    isRequired: true,
    isSelected: true,
  },
  {
    label: "Batch",
    description: "Batch",
    isRequired: true,
    isSelected: true,
  },
  {
    label: "Degree",
    description: "Degree",
    isRequired: true,
    isSelected: true,
  },
  {
    label: "Branch",
    description: "Branch",
    isRequired: true,
    isSelected: true,
  },
  {
    label: "CGPA",
    description: "CGPA",
    isRequired: true,
    isSelected: true,
  },
  {
    label: "Email",
    description: "Email",
    isRequired: true,
    isSelected: true,
  },
  {
    label: "Contact Number",
    description: "Contact Number",
    isRequired: true,
    isSelected: true,
  },
  {
    label: "Date of Birth",
    description: "Date of Birth",
    isRequired: true,
    isSelected: true,
  },
  {
    label: "Gender",
    description: "Gender",
    isRequired: true,
    isSelected: true,
  },
  {
    label: "Resume",
    description: "Resume",
    isRequired: true,
    isSelected: true,
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

  addFields(counter1) {
    const list = [];
    if (this.state.fields.length < counter1) {
      this.state.fields.push({
        label: "",
        description: "",
        isRequired: false,
        isSelected: true,
      });
    }
    for (let i = 0; i < counter1; i++) {
      let num = i + 1;
      list.push(
        <div className="widget">
          <label className="widgetLabel">Label:</label>
          <br />
          <input
            className="widgetInput"
            id="label"
            name="label"
            value={this.state.fields[i].label}
            onChange={(event) => {
              this.handleChangeField(event, i);
            }}
          />
          <br />
          <label className="widgetLabel">Short Desc:</label>
          <br />
          <textarea
            className="widgetArea"
            id="description"
            name="description"
            value={this.state.fields[i].description}
            onChange={(event) => {
              this.handleChangeField(event, i);
            }}
          ></textarea>
          <br />
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
          <br />
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
          <br />
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
            INF
            <input
              className="widgetRadio"
              type="radio"
              id="type"
              name="type"
              value="inf"
              onChange={this.handleChange}
            />
            JNF
            <input
              className="widgetRadio"
              type="radio"
              id="type"
              name="type"
              value="jnf"
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
          <br />

          {this.addFields(this.state.counter1)}
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

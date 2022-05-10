import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, createFormRecruiter } from "../../actions/authActions";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter1: 0,
      title: "",
      type: "",
      JD: "",
      fields: [],
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
    const newFields = this.state.fields;
    if (newFields.length < i + 1) newFields.push({});
    newFields[i] = { ...newFields[i], [event.target.id]: event.target.value };
    this.setState({ fields: newFields });
    console.log(newFields);
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
      if (obj.isRequired == "on") {
        obj.isRequired = true;
      } else {
        obj.isRequired = false;
      }
      if (obj.isSelected == "on") {
        fields.push(obj);
      }
    }
    console.log(fields);
    const newForm = {
      title: this.state.title,
      JD: this.state.JD,
      type: this.state.type,
      fields: fields,
      CID: this.props.auth.user.id,
    };
    console.log(newForm);
    this.props.createFormRecruiter(newForm, this.props.history);

    this.setState({
      counter1: 0,
      title: "",
      type: "",
      JD: "",
      fields: [],
    });
  };

  addFields(counter1) {
    const list = [];
    for (let i = 0; i < counter1; i++) {
      let num = i + 1;
      list.push(
        <div>
          <label>
            Label:
            <input
              id="label"
              name={"label" + num.toString()}
              onChange={(event) => {
                this.handleChangeField(event, i);
              }}
            />
          </label>
          <label>
            Short Desc:
            <textarea
              id="description"
              name={"description" + num.toString()}
              onChange={(event) => {
                this.handleChangeField(event, i);
              }}
            ></textarea>
          </label>
          <label>
            Required:
            <input
              type="checkbox"
              id="isRequired"
              name={"isRequired" + num.toString()}
              onChange={(event) => {
                this.handleChangeField(event, i);
              }}
            />
          </label>
          <label>
            Select
            <input
              type="checkbox"
              id="isSelected"
              name={"select" + num.toString()}
              onChange={(event) => {
                this.handleChangeField(event, i);
              }}
            />
          </label>
        </div>
      );
    }
    return <div>{list}</div>;
  }

  render() {
    const { user } = this.props.auth;
    let counter1 = this.state.counter1;

    return (
      <>
        <button
          onClick={() => {
            this.handleAdd1(this.state.counter1);
          }}
        >
          ADD
        </button>
        <br />
        <br />
        <form onSubmit={this.onSubmit}>
          <label>
            {" "}
            Title:
            <input
              type=""
              id="title"
              name="title"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            {" "}
            Type:
            <input
              type="radio"
              id="type"
              name="type"
              value="inf"
              onChange={this.handleChange}
            />
            INF
            <input
              type="radio"
              id="type"
              name="type"
              value="jnf"
              onChange={this.handleChange}
            />
            JNF
          </label>
          <br />
          <label>
            {" "}
            Job Desc. :
            <textarea name="JD" id="JD" onChange={this.handleChange} />
          </label>
          <br />

          {this.addFields(this.state.counter1)}
          <div
            className="clearfix"
            style={{ textAlign: "center", margin: "10px 0px" }}
          >
            <Button
              className="btn-fill"
              style={{ width: "200px" }}
              type="submit"
              variant="info"
            >
              Update Profile
            </Button>
          </div>
        </form>
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

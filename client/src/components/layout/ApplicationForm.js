import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ApplicationForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
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
  
    handleSubmit(event) {
      event.preventDefault();
  
    }
  
    onSubmit = (e) => {
      e.preventDefault();
      const fields = [];
      for (const [i, obj] of this.state.fields.entries()) {
        if (obj.isRequired == 'on') {
          obj.isRequired = true
        } else {
          obj.isRequired = false
        }
        if (obj.isSelected == 'on') {
          fields.push(obj);
        }
      }
      console.log(fields);
      const newForm = {
        title: this.state.title,
        JD: this.state.JD,
        type: this.state.type,
        fields: fields,
        CID: this.props.auth.user.id
      };
      console.log(newForm)
      this.props.createFormRecruiter(newForm, this.props.history)
  
      this.setState({
        counter1: 0,
        title: "",
        type: "",
        JD: "",
        fields: []
      });
    };
  
    render() {
      const { user } = this.props.auth;
      return (
        <>
          <form onSubmit={this.onSubmit}>
            <label> Title:
              <input type="" id="title" name="title" onChange={this.handleChange} />
            </label>
            <br />
            <label> Type:
              <input type="radio" id="type" name="type" value="inf" onChange={this.handleChange} />INF
              <input type="radio" id="type" name="type" value="jnf" onChange={this.handleChange} />JNF
            </label>
            <br />
            <label> Job Desc. :
              <textarea name="JD" id="JD" onChange={this.handleChange} />
            </label>
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
  
  export default connect(mapStateToProps, { logoutUser, createFormRecruiter })(ApplicationForm);
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class VolunteerDashboard extends Component {
  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <>
        <Link to={"/manageRecruiters"}>
          <Button
            className="btn-fill"
            style={{ width: "200px", margin: "40px" }}
            variant="info"
          >
            Manage Recruiters
          </Button>
        </Link>
        {/* <Link to={"/manageCreatedForms"}>
          <Button
            className="btn-fill"
            style={{ width: "200px", margin: "40px" }}
            variant="info"
          >
            Manage Created Forms
          </Button>
        </Link>
        <Link to={"/manageResponses"}>
          <Button
            className="btn-fill"
            style={{ width: "200px", margin: "40px" }}
            variant="info"
          >
            Manage Responses
          </Button>
        </Link>
        <Link to={"/createForm"}>
          <Button
            className="btn-fill"
            style={{ width: "200px", margin: "40px" }}
            variant="info"
          >
            Create Form
          </Button>
        </Link> */}
        <Link to={"/manageINFJNF"}>
          <Button
            className="btn-fill"
            style={{ width: "200px", margin: "40px" }}
            variant="info"
          >
            Manage INF/JNF
          </Button>
        </Link>
      </>
    );
  }
}

VolunteerDashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(VolunteerDashboard);

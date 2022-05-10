import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class AdminDashboard extends Component {
  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <>
        <Link to={"/manageStudents"}>
          <Button
            className="btn-fill"
            style={{ width: "200px" }}
            variant="info"
          >
            Manage Students
          </Button>
        </Link>
        <Link to={"/manageRecruiters"}>
          <Button
            className="btn-fill"
            style={{ width: "200px" }}
            variant="info"
          >
            Manage Recruiters
          </Button>
        </Link>
      </>
    );
  }
}

AdminDashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(AdminDashboard);

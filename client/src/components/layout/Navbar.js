import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    // const { user } = this.props.auth;
    return (
      <nav className="navbar bg-light justify-content-center">
        <Link className="navbar-brand text-dark font-weight-bold" to="/">
          <i className="fa fa-code"></i> MERN Stack App
        </Link>
        {this.props.auth.isAuthenticated ? (
          <button
            onClick={this.onLogout}
            className="btn btn-large btn-light hoverable font-weight-bold"
          >
            Logout
          </button>
        ) : null}
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);

import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AdminOutlet = ({ component: Component, auth, ...rest }) =>
  auth.isAuthenticated && auth.user.role === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/loginAdmin" />
  );

AdminOutlet.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(AdminOutlet);

import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const RecruiterAdminOutlet = ({ component: Component, auth, ...rest }) =>
  auth.isAuthenticated &&
  (auth.user.role === "coordinator" ||
    auth.user.role === "volunteer" ||
    auth.user.role === "recruiter") ? (
    <Outlet />
  ) : (
    <Navigate to="/loginRecruiter" />
  );

RecruiterAdminOutlet.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(RecruiterAdminOutlet);

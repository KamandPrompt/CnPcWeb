import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const CoordinatorOutlet = ({ component: Component, auth, ...rest }) =>
  auth.isAuthenticated && auth.user.role === "coordinator" ? (
    <Outlet />
  ) : (
    <Navigate to="/loginAdmin" />
  );

CoordinatorOutlet.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(CoordinatorOutlet);

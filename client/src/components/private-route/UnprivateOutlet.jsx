import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateOutlet = ({ component: Component, auth, ...rest }) =>
  !auth.isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate
      to={
        "/dashboard" + auth.user.role[0].toUpperCase() + auth.user.role.slice(1)
      }
    />
  );

PrivateOutlet.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateOutlet);

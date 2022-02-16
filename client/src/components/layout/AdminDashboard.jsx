import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { studentsData } from "../../actions/fetching"

class AdminDashboard extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //       DataisLoaded: false,
  //   };
  // }
  componentDidMount() {
    const data = this.props.studentsData();
    // we have to make that async function
  }
  onLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <>
      <div  className="container text-center mt-15">
        <div className="row">
          <div className="col-sm-12">
            <h4>
              Hey there, <b className="name-lable">{user.name.split(" ")[0]}</b>
              <p className="mt-4">
                You are logged into a full-stack{" "}
                <span style={{ fontFamily: "monospace" }}>admin</span> app 👏
              </p>
            </h4>
            {/* <button
              onClick={this.onLogout}
              className="btn btn-large btn-light hoverable font-weight-bold"
            >
              Logout
            </button> */}
          </div>
        </div>
      </div>
      </>
    );
  }
}

AdminDashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  studentsData : PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, studentsData }
)(AdminDashboard);
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import  iitimage  from "../images/resize.png";
import  logo  from "./logo.ico";
import noc from "./NOC.doc"
class Navigation extends Component {
  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    // const { user } = this.props.auth;
    let navimg={
      width:'100px',
      height:'50px',
      padding:'0 10px'
    }
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
        <img className="navbar-brand " style={navimg} src={logo}></img>
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            {/* <span className='sr-only'>Toggle navigation</span>{' '} */}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="/">
          IIT Mandi          
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a href="/acadmics" className="page-scroll dropbtn">
                <strong>Why Recruit?</strong>
              </a>
              <div className="dropdown-content">
                <a
                  id="outerDiv"
                  className="dropbtn"
                  href="/acadmics"
                >
                  Academics{" "}
                  <i
                    style={{ float: "right", marginTop: "4px" }}
                    class="fas fa-caret-right"
                  ></i>
                  <div
                    id="innerDiv"
                    className="dropdown-content btn-group dropright"
                  >
                    <a href="/acadmics#school">Schools</a>
                    <a href="/research">Research and Development</a>
                    {/* <a href="https://www.iitmandi.ac.in/TIH-HCI/">I HUB</a>
                    <a href="https://www.iitmandicatalyst.in/">Catalyst</a> */}
                    <a
                      href="http://iitmandi.ac.in/administration/mou.php"
                      target="_blank"
                    >
                      MoUs
                    </a>
                    <a href="/Programmes"
                    >Programmes</a>
                  </div>
                </a>
                <a href={require("./Brochure2021-22.pdf")} target="blank">
                  Brochure
                </a>
                <a href="/achievement">Students Achievements</a>
                <a href="/acadmics#demographics">Demographics</a>
                <a
                  href="https://gymkhana.iitmandi.co.in/index.html"
                  target="_blank"
                >
                  Students Gymkhana
                </a>
                <a
                  href="https://ieee.iitmandi.ac.in/index.html"
                  target="_blank"
                >
                  IEEE SB chapter
                </a>
                <a href="https://iitmandi.ac.in/alumni/" target="_blank">
                  Alumni
                </a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#features" className="page-scroll dropbtn">
                <strong>Recruiters Valley</strong>
              </a>
              <div className="dropdown-content">
                <a href="/Recpro">Recruitment Process</a>
                <a href="http://research.iitmandi.ac.in/main/placements/files/COMPANY%20POLICY.pdf" target="_blank" >Company policy</a>
                <a href="/registerRecruiter">Register</a>
                <a href="/loginRecruiter">Login</a>
                {/* <a href="#">Placement brochure</a> */}
                <a href="https://iitmandi.ac.in/calender2022/Home/ViewCalendar/2.html" target="_blank">Calendar</a>
                <a href="/past">Past Recruiters</a>
                <a href="https://iitmandi.ac.in/Newspaper_reports/placement_news.php" target="_blank">Placement News and Stats</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#features" className="page-scroll dropbtn">
                <strong>Students Col</strong>
              </a>
              <div className="dropdown-content">
                <a href="/loginStudent">Login</a>
                <a href="http://research.iitmandi.ac.in/main/placements/files/STUDENT%20INTERNSHIP%20AND%20PLACEMENT%20POLICY.pdf" target="_blank">Student policy</a>
                {/* <a href="#">Noticeboard</a> */}
                <a href={noc}>Forms </a>
                <a href="#">Preparation Portal</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="/contact" className="page-scroll dropbtn">
                <strong>Contact Us</strong>
              </a>
              {/* <div className="dropdown-content">
                <a href="/contact">Professor in charge</a>
                <a href="/contact">Placement cell details</a>
                <a href="/contact">Student coordinators</a>
                <a href="/contact">Administrative staff</a>
              </div> */}
            </li>

            {this.props.auth.isAuthenticated ? (
              <button
                onClick={this.onLogout}
                className="page-scroll dropbtn logout"
              >
                Logout
              </button>
            ) : null}
          </ul>
        </div>
      </div>
    </nav>
    );
  }
}

Navigation.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Navigation);

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";


class Landing extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <div className="container text-center  mt-15">
        <div className="row">
          <div className="col-sm-12 ">
            <h1>
              Login/auth app with the{" "}
              <span style={{ fontFamily: "monospace" }}>MERN</span> stack.
            </h1>
            <p>[Full-stack app with user authentication via passport and JWTs]</p>
            </div>
            </div>
            <div className="row mt-4">
            <div className="col-sm-12">
              <Link
                to="/registerRecruiter"
                className="btn btn-large btn-dark hoverable"
              >
                Register Recruiter
              </Link>
              <Link
                to="/loginRecruiter"
                className="btn btn-large btn-light hoverable ml-5"
              >
                Log In Recruiter
              </Link>
              <Link
                to="/registerStudent"
                className="btn btn-large btn-dark hoverable"
              >
                Register Student
              </Link>
              <Link
                to="/loginStudent"
                className="btn btn-large btn-light hoverable ml-5"
              >
                Log In Student
              </Link>
            </div>
           
          </div>
        </div>
        </>
    );
  }
}
export default Landing;
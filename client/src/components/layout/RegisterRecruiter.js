import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerRecruiter } from "../../actions/authActions";
import classnames from "classnames";
import Navbar from "./Navbar";
import "../students.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      contactPerson: "",
      designation: "",
      telephone: "",
      mobile: "",
      errors: {},
    };
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      // this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  // onChangepassword = (e) => {
  //   this.setState({ [e.target.id]: e.target.value });
  //   let p= e.target.value;
  //   let er={};
  //   let arr=[]
  //   if (p.length < 8) {
  //     arr.push("Your password must be at least 8 characters"); 
  //   }
  //   if (p.search(/[a-z]/i) < 0) {
  //     arr.push("Your password must contain at least one letter.");
  //   }
  //   if (p.search(/[0-9]/) < 0) {
  //       arr.push("Your password must contain at least one digit."); 
  //   }
  //   if (p.search(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/) < 0) {
  //       arr.push("Your password must contain at least one special character."); 
  //   }
  //   er.password=arr
  //   console.log(er);
  //   this.setState({
  //     errors : er
  //   })
  // };

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      contactPerson: this.state.contactPerson,
      designation: this.state.designation,
      telephone: this.state.telephone,
      mobile: this.state.mobile,
    };

    this.props
      .registerRecruiter(newUser, this.props.history)

    this.setState({
      name: "",
      email: "",
      password: "",
      password2: "",
      contactPerson: "",
      designation: "",
      telephone: "",
      mobile: "",
      errors: {},
    });
  };

  render() {
    const {
      name,
      email,
      password,
      password2,
      contactPerson,
      designation,
      telephone,
      mobile,
      errors,
    } = this.state;

    return (
      <>
        <div className="formCont2">
          <div className="formleft2">
          <div className="decal">
              <div><i class="fa fa-graduation-cap graduation_cap" aria-hidden="true"></i></div>
              <div className="header2"><h3 style={{"fontSize":"20px","textAlign":"center"}}>Career and Placement Cell</h3></div>
              </div>
          </div>
          <div className="formright2">
            <form className="form_container" onSubmit={this.onSubmit}>
              <h2 style={{ "textAlign": "center", "color": "white", "paddingTop": "10px", "paddingBottom": "10px", "fontSize": "25px" }}>Register</h2>
              <div className="form-group">
                <label style={{ "color": "white" }}>Company Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Company Name"
                  value={name}
                  error={errors.name}
                  onChange={this.onChange}
                  className={classnames("form-control", {
                    invalid: errors.name,
                  })}
                />
                <span className="red-text">{errors.name}</span>
              </div>
              <div className="form-group">
              <label style={{ "color": "white" }}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  value={email}
                  error={errors.email}
                  onChange={this.onChange}
                  className={classnames("form-control", {
                    invalid: errors.email,
                  })}
                />
                <span className="red-text">{errors.email}</span>
              </div>
              <div className="form-group">
              <label style={{ "color": "white" }}>Contact Person</label>
                <input
                  type="text"
                  id="contactPerson"
                  placeholder="Contact Person"
                  value={contactPerson}
                  error={errors.contactPerson}
                  onChange={this.onChange}
                  className={classnames("form-control", {
                    invalid: errors.contactPerson,
                  })}
                />
                <span className="red-text">{errors.contactPerson}</span>
              </div>
              <div className="form-group">
              <label style={{ "color": "white" }}>Designation</label>
                <input
                  type="text"
                  id="designation"
                  placeholder="Designation"
                  value={designation}
                  error={errors.designation}
                  onChange={this.onChange}
                  className={classnames("form-control", {
                    invalid: errors.designation,
                  })}
                />
                <span className="red-text">{errors.designation}</span>
              </div>
              <div className="form-group">
              <label style={{ "color": "white" }}>Telephone</label>
                <input
                  type="text"
                  id="telephone"
                  placeholder="Telephone"
                  value={telephone}
                  error={errors.telephone}
                  onChange={this.onChange}
                  className={classnames("form-control", {
                    invalid: errors.telephone,
                  })}
                />
                <span className="red-text">{errors.telephone}</span>
              </div>
              <div className="form-group">
              <label style={{ "color": "white" }}>Mobile</label>
                <input
                  type="text"
                  id="mobile"
                  placeholder="Mobile"
                  value={mobile}
                  error={errors.mobile}
                  onChange={this.onChange}
                  className={classnames("form-control", {
                    invalid: errors.mobile,
                  })}
                />
                <span className="red-text">{errors.mobile}</span>
              </div>

              <div className="form-group">
              <label style={{ "color": "white" }}>Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  error={errors.password}
                  onChange={this.onChange}
                  className={classnames("form-control", {
                    invalid: errors.password,
                  })}
                />
                {errors.password !== undefined ? errors.password.map((item) => {
                  return (<><span className="red-text">{item}</span><br /></>)
                }) : <><span className="red-text">{errors.password}</span></>}
              </div>
              <div className="form-group">
              <label style={{ "color": "white" }}>Confirm Password</label>
                <input
                  type="password"
                  id="password2"
                  placeholder="Confirm Password"
                  value={password2}
                  error={errors.password}
                  onChange={this.onChange}
                  className={classnames("form-control", {
                    invalid: errors.password2,
                  })}
                />
                <span className="red-text">{errors.password2}</span>
              </div>
              <div className="text-center no_account">
                Already have an account?{" "}
                <Link to="/loginRecruiter">Login here</Link>
              </div>
              <div className="form-group form_sub">
                <button type="submit" className="btn btn-primary btn-block btn-lg" style={{"backgroundColor":"#CFFFF6","color":"black"}}>Sign Up</button>
              </div>
            </form>
          </div>
        </div>

        {/* <div className="form-box ">
          <form className="form-container" onSubmit={this.onSubmit}>
            <div>
              <Link to="/">
                <i className="fa fa-arrow-circle-left  "></i> Back to Home
              </Link>
            </div>

            <h2>Register</h2>
            <hr />
            <div className="form-group">
              <input
                type="text"
                id="name"
                placeholder="Company Name"
                value={name}
                error={errors.name}
                onChange={this.onChange}
                className={classnames("form-control", {
                  invalid: errors.name,
                })}
              />
              <span className="red-text">{errors.name}</span>
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                value={email}
                error={errors.email}
                onChange={this.onChange}
                className={classnames("form-control", {
                  invalid: errors.email,
                })}
              />
              <span className="red-text">{errors.email}</span>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="contactPerson"
                placeholder="Contact Person"
                value={contactPerson}
                error={errors.contactPerson}
                onChange={this.onChange}
                className={classnames("form-control", {
                  invalid: errors.contactPerson,
                })}
              />
              <span className="red-text">{errors.contactPerson}</span>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="designation"
                placeholder="Designation"
                value={designation}
                error={errors.designation}
                onChange={this.onChange}
                className={classnames("form-control", {
                  invalid: errors.designation,
                })}
              />
              <span className="red-text">{errors.designation}</span>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="telephone"
                placeholder="Telephone"
                value={telephone}
                error={errors.telephone}
                onChange={this.onChange}
                className={classnames("form-control", {
                  invalid: errors.telephone,
                })}
              />
              <span className="red-text">{errors.telephone}</span>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="mobile"
                placeholder="Mobile"
                value={mobile}
                error={errors.mobile}
                onChange={this.onChange}
                className={classnames("form-control", {
                  invalid: errors.mobile,
                })}
              />
              <span className="red-text">{errors.mobile}</span>
            </div>

            <div className="form-group">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                error={errors.password}
                onChange={this.onChange}
                className={classnames("form-control", {
                  invalid: errors.password,
                })}
              />
              {errors.password !== undefined ? errors.password.map((item) => {
                return (<><span className="red-text">{item}</span><br /></>)
              }) : <><span className="red-text">{errors.password}</span></>}
            </div>

            <div className="form-group">
              <input
                type="password"
                id="password2"
                placeholder="Confirm Password"
                value={password2}
                error={errors.password}
                onChange={this.onChange}
                className={classnames("form-control", {
                  invalid: errors.password2,
                })}
              />
              <span className="red-text">{errors.password2}</span>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg"
              >
                Sign Up
              </button>
            </div>
            <div className="text-center">
              Already have an account?{" "}
              <Link to="/loginRecruiter">Login here</Link>
            </div>
          </form>
        </div> */}
      </>
    );
  }
}

Register.propTypes = {
  registerRecruiter: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

// export default connect(mapStateToProps,{registerRecruiter})(withRouter(Register));
export default connect(mapStateToProps, { registerRecruiter })(Register);

import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginStudent } from "../../actions/authActions";
import classnames from "classnames";
import Navbar from "./Navbar";

class Login extends Component{
    constructor(){
        super()
        this.state = {
            rollNo:"",
            password:"",
            errors:{}
        }
    }
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
          // this.props.history.push("/dashboard");
        }
      }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          // this.props.history.push("/dashboard"); 
        }
        
    if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }

    onChange = e => {
        this.setState({[e.target.id]:e.target.value})
    }

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            rollNo:this.state.rollNo,
            password:this.state.password,
        }
        this.props.loginStudent(userData);
    }
    render(){
        const {rollNo, password, errors} = this.state;
        return(
          <>
          <Navbar/>
            <div className="form-box">
            <form className="login-form" onSubmit={this.onSubmit}>
                <h2>Login</h2>
                <hr/>
                <div className="form-group">
                    <input type="text" 
                           id="rollNo"
                           placeholder="Roll Number" 
                           value={rollNo} 
                           error={errors}
                           onChange={this.onChange}
                           className={classnames("form-control", {
                            invalid: errors.rollNo || errors.rollNonotfound
                          })}/>
                          <span className="red-text">
                            {errors.rollNo}
                            {errors.rollNonotfound}
                        </span>
                </div>
                <div className="form-group">
                    <input type="password"  
                           id="password" 
                           placeholder="Password" 
                           value={password} 
                           error={errors}
                           onChange={this.onChange}
                           className={classnames("form-control", {
                            invalid: errors.password || errors.passwordincorrect })}
                            />
                    <span className="red-text">
                        {errors.password}
                        {errors.passwordincorrect}
                    </span>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block btn-lg">Login</button>
                </div>
                <div className="text-center">Don't have an account? <Link to="/registerStudent">Register</Link></div>


            </form>
        </div>
      </>

        )
    }
}

Login.propTypes = {
    loginStudent: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

  export default connect(
    mapStateToProps,
    { loginStudent }
  )(Login);
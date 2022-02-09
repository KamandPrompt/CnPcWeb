import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginAdmin } from "../../actions/authActions";
import classnames from "classnames";
import Navbar from "./Navbar";

class Login extends Component{
    constructor(){
        super()
        this.state = {
            email:"",
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
            email:this.state.email,
            password:this.state.password,
        }
        this.props.loginAdmin(userData);
    }
    render(){
        const {email, password, errors} = this.state;
        return(
          <>
       
            <div className="form-box">
            <form className="form-container" onSubmit={this.onSubmit}>
                <h2>Login</h2>
                <hr/>
                <div className="form-group">
                    <input type="email" 
                           id="email"
                           placeholder="Email Address" 
                           value={email} 
                           error={errors}
                           onChange={this.onChange}
                           className={classnames("form-control", {
                            invalid: errors.email || errors.emailnotfound
                          })}/>
                          <span className="red-text">
                            {errors.email}
                            {errors.emailnotfound}
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


            </form>
        </div>
      </>

        )
    }
}

Login.propTypes = {
    loginAdmin: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

  export default connect(
    mapStateToProps,
    { loginAdmin }
  )(Login);
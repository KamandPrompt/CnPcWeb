import React from "react";
import "./students.css";
export const Student = (props) => {
    if(props.task == 'student_login'){
        return (<div>
            <form className="form-container">

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>

                <button type="submit" className="btn">Login</button>
            </form>

    </div >);
    }
    else if(props.task == 'recruiter_login'){
        return (<div>
            <form className="form-container">

                <label for="username"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" required/>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>

                <button type="submit" className="btn">Login</button>
            </form>

    </div >);
    }
    else if(props.task == 'recruiter_register'){
        return (<div>
            <form className="form-container">

                <label for="username"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" required/>

                <label for="contact_info"><b>Contact info</b></label>
                <input type="text" placeholder="Enter Contact info" name="contact_info" required/>

                <label for="company_name"><b>Company name</b></label>
                <input type="text" placeholder="Enter Company name" name="company_name" required/>

                <label for="postal_address"><b>Postal address</b></label>
                <input type="text" placeholder="Enter Postal address" name="postal_address" required/>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>

                <button type="submit" className="btn">Register</button>
            </form>

    </div >);
    }
};

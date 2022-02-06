import React from 'react';
import "./students.css";
export const Student = (props) => {
    return (<div>
            <form className="form-container">

                <label for="roll_no"><b>Roll Number</b></label>
                <input type="text" placeholder="Enter Roll Number" name="roll_no" required/>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>

                <button type="submit" className="btn">Login</button>
            </form>

    </div >);
};
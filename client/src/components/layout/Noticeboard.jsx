import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "../achievement.css";

// import { updateUser } from "../../actions/authActions";

class Noticeboard extends Component {
    constructor() {
        super();
        this.state = {
            DataisLoaded: false,
            data: [],
            datalist: [],
        };
    }
    onLogout = (e) => {
        e.preventDefault();
        this.props.logoutUser();
    };
    addNotice = (value) => {
        const list = [];
        for (let i = 0; i < value; i++) {
            let form = this.state.data[i];
            list.push(<div className="slot">
                <button id={"year" + i.toString()} className="yearBtn">
                    <span className="arrow">
                        <i id={"arrow" + i.toString()} className="fas fa-angle-right"></i>
                    </span>
                    {form.title}
                </button>
                <div id={"yr" + i.toString()} className="yearCont">
                    <p>{form.JD}</p>
                </div>
                <button id={form._id}>Apply now</button>
            </div>);
        }
        this.setState({ datalist: list });
    }

    async componentDidMount() {
        await axios.get("/api/students/noticeboard")
            .then((res) => {
                this.setState({ data: res.data, DataisLoaded: true });
                // console.log(this.state.data);
                this.addNotice(this.state.data.length);
            }).catch((err) => {
                console.log(err);
            })



        // const search = window.location.search;
        // const params = new URLSearchParams(search);
        // const roll = params.get("roll");
        // if (roll === null) {
        //   await axios
        //     .get("/api/admins/all-students")
        //     .then((res) => {
        //       this.setState({ studentsData: res.data, DataisLoaded: true });
        //       // console.log(this.state.studentsData);
        //     })
        //     .catch((err) => {
        //       console.log(err);
        //     });
        // } else {
        //   await axios
        //     .get(`/api/admins/student/${roll}`)
        //     .then((res) => {
        //       this.setState({
        //         name: res.data.details.name,
        //         rollNo: roll,
        //         batch: res.data.details.batch,
        //         degree: res.data.details.degree,
        //         branch: res.data.details.branch,
        //         cgpa: res.data.details.cgpa,
        //         email: res.data.details.email,
        //         contactNumber: res.data.details.contactNumber,
        //         dob: res.data.details.dob,
        //         Gender: res.data.details.Gender,
        //         tenthPercentage: res.data.details.tenthPercentage,
        //         twelthPercentage: res.data.details.twelthPercentage,
        //         advanceRank: res.data.details.advanceRank,
        //         resume: res.data.details.resume,
        //         verification_status: res.data.details.verification_status,
        //         role: res.data.details.role,
        //         DataisLoaded: true,
        //       });
        //     })
        //     .catch((err) => {
        //       console.log(err);
        //     });
        // }
    }


    //   onsubmit = (e) => {
    //     e.preventDefault();
    //     const user = {
    //         name : this.state.name,
    //         rollNo: rollNo.value,
    //         email : email.value,
    //         batch:batch.value,
    //         contactNumber: contactNumber.value,
    //         branch: branch.value,
    //         Gender: Gender.value,
    //         degree: degree.value,
    //         cgpa: cgpa.value,
    //         dob: dob.value,
    //         resume: resume.value,
    //         verification_status : this.state.verification_status,
    //         role : role.value
    //     };
    //     this.updateUser(user);
    //   }

    render() {
        const { user } = this.props.auth;
        return (
            <>
                <div>
                    <h2 style={{ textAlign: "center" }}>Active application forms</h2>
                    <div className="acadmic">
                        {this.state.datalist}
                    </div>
                </div>
            </>
        );
    }
}

Noticeboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Noticeboard);

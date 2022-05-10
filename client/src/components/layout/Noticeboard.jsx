import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "../achievement.css";
import { Link } from "react-router-dom";

// import { updateUser } from "../../actions/authActions";

class Noticeboard extends Component {
  constructor() {
    super();
    this.state = {
      DataisLoaded: false,
      data: [],
      datalist: [],
      id: "",
      CID: "",
      title: "",
      type: "",
      JD: "",
      fields: [],
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
      list.push(
        <div className="slot">
          <button id={"year" + i.toString()} className="yearBtn">
            <span className="arrow">
              <i id={"arrow" + i.toString()} className="fas fa-angle-right"></i>
            </span>
            {form.title}
            <Link to={"?id=" + form._id} target="_blank">
              <button>Apply</button>
            </Link>
          </button>
          <div id={"yr" + i.toString()} className="yearCont">
            <p>{form.JD}</p>
          </div>
          {/* <button id={form._id}><a href="" _blank="True">Apply now</a></button> */}
        </div>
      );
    }
    this.setState({ datalist: list });
  };

  async componentDidMount() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const id = params.get("id");
    if (id === null) {
      await axios
        .get("/api/students/noticeboard")
        .then((res) => {
          this.setState({ data: res.data, DataisLoaded: true });
          this.addNotice(this.state.data.length);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this.setState({ id: id });
      await axios
        .get(`/api/students/noticeboard/${id}`)
        .then((res) => {
          console.log(res.data.data[0].fields);
          this.setState({
            CID: res.data.data[0].CID[0],
            title: res.data.data[0].title,
            type: res.data.data[0].type,
            JD: res.data.data[0].JD,
            fields: res.data.data[0].fields,
            DataisLoaded: true,
          });
          console.log(this.state.fields);
          // this.addNotice(this.state.data.length);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    const { user } = this.props.auth;
    if (this.state.id === "") {
      return (
        <>
          <div>
            <h2 style={{ textAlign: "center" }}>Active application forms</h2>
            <div className="acadmic">{this.state.datalist}</div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <h3>{this.state.title}</h3>
          <p>{this.state.JD}</p>
          {this.state.fields.map((item) => {
            return (
              <>
                <label>
                  {item.isRequired ? item.label + "*" : item.label}
                  <input type="text" required={item.isRequired} name={item.label}/>
                </label>
                <p>{item.description}</p>
                <br />
              </>
            );
          })}
        </>
      );
    }
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

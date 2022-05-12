import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, saveResponseStudent } from "../../actions/authActions";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "../achievement.css";
import "../admin.css";
import { Link } from "react-router-dom";

// import { updateUser } from "../../actions/authActions";

class Noticeboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DataisLoaded: false,
      data: [],
      datalist: [],
      id: "",
      CID: "",
      SID: this.props.auth.user.id,
      title: "",
      type: "",
      JD: "",
      answers: [],
    };
    this.handleChangeField = this.handleChangeField.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  addNotice = (value) => {
    const list = [];
    for (let i = 0; i < value; i++) {
      let form = this.state.data[i];
      if (form.isVerified && form.formStatus === "open") {
        list.push(
          <div className="slot">
            <div id={"company"+(i+1).toString()} className="companyBtn">
              <h2 style={{"fontSize":"17px","fontWeight":"lighter"}}>{form.title}</h2>
              <div id={"cp" + (i+1).toString()} className="companyCont">
                <p style={{"fontSize":"16px"}}>JOB DESC:</p>
                <p>{form.JD}</p>
                <Link to={"?id=" + form._id} target="_blank">
                  <center>
                    <button style={{"margin":"auto","width":"70px","height":"30px","backgroundColor":"#2196F3","color":"white","borderRadius":"10%","border":"1px solid white"}}>Apply</button>
                  </center>
                </Link>
              </div>
            </div>
            {/* <button id={form._id}><a href="" _blank="True">Apply now</a></button> */}
          </div>
        );
      }
    }
    this.setState({ datalist: list });
  };

  async componentDidMount() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const id = params.get("id");
    if (id === null) {
      await axios
        .get("/api/students/all-forms")
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
        .get(`/api/students/all-forms/${id}`)
        .then((res) => {
          this.setState({
            CID: res.data.data[0].CID,
            title: res.data.data[0].title,
            type: res.data.data[0].type,
            JD: res.data.data[0].JD,
            answers: res.data.data[0].fields,
            DataisLoaded: true,
          });
          // this.addNotice(this.state.data.length);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  handleChangeField(event, i) {
    const newFields = this.state.answers;
    newFields[i] = { ...newFields[i], [event.target.id]: event.target.value };
    this.setState({ answers: newFields });
  }

  onSubmit(e) {
    e.preventDefault();
    const newResponse = {
      SID: this.state.SID,
      FID: this.state.id,
      answers: this.state.answers,
      CID: this.state.CID,
    };
    this.props.saveResponseStudent(newResponse, this.props.history);
    this.setState({
      FID: "",
      CID: "",
      answers: [],
    });
  }

  render() {
    const { user } = this.props.auth;
    if(this.state.DataisLoaded===true)
    {
      if (this.state.id === "") {
        return (
          <>
            <div>
              <h2 style={{ textAlign: "center" }}>Active application forms</h2>
              <br />
              <br />
              <div className="acadmic">{this.state.datalist}</div>
            </div>
          </>
        );
      } else {
        return (
          <>
            <h2 style={{"textAlign":"center"}}>{this.state.title}</h2>
            <div style={{"width":"60%","margin":"auto","border":"1px solid grey","padding":"20px","marginBottom":"50px"}}>
              <p style={{"fontSize":"16px"}}>JOB DESC:</p>
              <p>{this.state.JD}</p>
            </div>
            <div style={{ width: "60%", margin: "auto" }}>
              <form onSubmit={this.onSubmit}>
                {this.state.answers.map((item, i) => {
                  return (
                    <>
                      <Row>
                        <Col className="pr-1 pr-2" md="5">
                          <Form.Group>
                            <label className="noticeForm">
                              {item.isRequired ? item.label + "*" : item.label}
                            </label>
                            <Form.Control
                              type="text"
                              id="answer"
                              placeholder={item.description}
                              required={item.isRequired}
                              name={item.label}
                              onChange={(event) => {
                                this.handleChangeField(event, i);
                              }}
                              style={{ width: "100%" }}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      {/* </label> */}
                      {/* <p>{item.description}</p> */}
                      <br />
                    </>
                  );
                })}
                <center>
                  <button
                    style={{
                      width: "90px",
                      height: "40px",
                      marginBottom: "20px",
                      borderRadius: "6px",
                      backgroundColor: "#2196F3",
                      color: "#FFFF",
                      fontSize: "20px",
                      border: "1px solid white"
                    }}
                    type="submit"
                  >
                    Submit
                  </button>
                </center>
              </form>
            </div>
          </>
        );
      }
    }
    else
    {
      return (
        <>
          <div class="loaderContainer">
            <div class="loader"></div>
          </div>
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

export default connect(mapStateToProps, { logoutUser, saveResponseStudent })(
  Noticeboard
);

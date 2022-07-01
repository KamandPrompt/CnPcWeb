import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, saveResponseStudent } from "../../actions/authActions";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "../achievement.css";
import "../admin.css";
import { Link, Navigate } from "react-router-dom";
import { log } from "util";
import { DataGrid } from "@mui/x-data-grid";
import "../admin.css";

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
      redirect : false,
    };
    this.handleChangeField = this.handleChangeField.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  // addNotice = (value) => {
  //   const list = [];
  //   for (let i = 0; i < value; i++) {
  //     let form = this.state.data[i];
  //     if (form.isVerified && form.formStatus === "open") {
  //       list.push(
  //         <div className="slot">
  //           <div id={"company" + (i + 1).toString()} className="companyBtn">
  //             <h2 style={{ "fontSize": "17px", "fontWeight": "lighter" }}>{form.title}</h2>
  //             <div id={"cp" + (i + 1).toString()} className="companyCont">
  //               <p style={{ "fontSize": "16px" }}>JOB DESC:</p>
  //               <p>{form.JD}</p>
  //               <Link to={"?id=" + form._id} target="_blank">
  //                 <center>
  //                   <button style={{ "margin": "auto", "width": "70px", "height": "30px", "backgroundColor": "#2196F3", "color": "white", "borderRadius": "10%", "border": "1px solid white" }}>Apply</button>
  //                 </center>
  //               </Link>
  //             </div>
  //           </div>
  //           {/* <button id={form._id}><a href="" _blank="True">Apply now</a></button> */}
  //         </div>
  //       );
  //     }
  //   }
  //   this.setState({ datalist: list });
  // };

  async componentDidMount() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const id = params.get("id");
    // console.log(this.state.props.auth.user);
    if (id === null) {
      await axios
        .post("/api/students/all-forms",{SID:this.state.SID})
        .then((res) => {
          this.setState({ data: res.data, DataisLoaded: true });
          // console.log(res.data)
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this.setState({ id: id });
      await axios
        .post(`/api/students/all-forms/${id}`,{SID:this.state.SID})
        .then((res) => {
          if(res.data.redirect == true)
          {
            this.setState({redirect : true,DataisLoaded: true});
          }
          else
          {
            // console.log(res.data.data);
            this.setState({
              CID: res.data.data[0].CID,
              title: res.data.data[0].title,
              type: res.data.data[0].type,
              JD: res.data.data[0].JD,
              answers: res.data.data[0].fields,
              DataisLoaded: true,
              FID : res.data.data[0].FID
            });
          }
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
  addPreFilledAnswers() {
    const { user } = this.props.auth;
    const newFields = this.state.answers;
    // newFields[i] = { ...newFields[i], [event.target.id]: event.target.value };
    for (var i = 0; i < newFields.length; i = i + 1) {
      if(newFields[i].isFixed === true && newFields[i].description != "resume")
      {
        newFields[i] = { ...newFields[i], answer: user[newFields[i].description] }
      }
    }
    this.setState({ answers: newFields });
  }

  onSubmit(e) {
    e.preventDefault();
    this.addPreFilledAnswers();
    const newResponse = {
      SID: this.state.SID,
      FID: {FID : this.state.FID.FID,type : (this.state.type === "internship") ? "INF" : "JNF"},
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
    if (this.state.DataisLoaded === true) {
      if(this.state.redirect === true)
      {
        return (
          <Navigate to="/dashboardStudent" />
        )
      }
      else if (this.state.id === "") {
        const rows = this.state.data;
        const columns = [
          {
            field: "companyName",
            headerName: "Company Name",
            hideable: false,
            width: 200,
          },
          { field: "title", headerName: "Title", hideable: false, width: 100 },
          {
            field: "JD",
            headerName: "Job Description",
            width: 190,
            hideable: false,
          },
          {
            field: "apply",
            headerName: "Apply",
            sortable: false,
            filterable: false,
            hideable: false,
            width: 180,
            renderCell: (params) => {
              // console.log(params.row._id);
              return (
                <>
                  <Link to={"?id=" + params.row._id} target="_blank">
                    <button className="userEdit">Apply</button>
                  </Link>
                </>
              );
            },
          },
        ];
        return (
          <>
            <div className="container text-center mt-15">
              <div className="row">
                <div className="col-sm-12">
                  <h3>Active Application Forms</h3>
                  <div style={{ height: "400px", width: "90%" }} id="dataGrid">
                    <DataGrid
                      rows={rows}
                      columns={[
                        ...columns,
                        {
                          field: "apply",
                          sortable: false,
                          filterable: false,
                          hideable: false,
                        },
                      ]}
                      pageSize={10}
                      rowsPerPageOptions={[10, 20, 30]}
                      getRowId={(row) => row._id}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      } else {
        return (
          <>
            <h2 style={{ "textAlign": "center" }}>{this.state.title}</h2>
            <div style={{ "width": "60%", "margin": "auto", "border": "1px solid grey", "padding": "20px", "marginBottom": "50px" }}>
              <p style={{ "fontSize": "16px" }}>JOB DESC:</p>
              <p>{this.state.JD}</p>
            </div>
            <div style={{ width: "60%", margin: "auto" }}>
              <form onSubmit={this.onSubmit}>
                {this.state.answers.map((item, i) => {
                  const information = item.description;
                  if (information === "resume") {
                    return (
                      <>
                        <Row>
                          <Col className="pr-1 pr-2" md="5">
                            <Form.Group>
                              <h1>{item.isFixed}</h1>
                              <label className="noticeForm">
                                {item.isRequired ? item.label + "*" : item.label}
                              </label>
                              <br></br>
                              <input type="radio" name="resume" id="answer" value={user.resume1}
                                onChange={(event) => {
                                  this.handleChangeField(event, i);
                                }}
                              />
                              <a target="_blank" href={user.resume1}>Resume 1</a>
                              <br></br>
                              <input type="radio" name="resume" id="answer" value={user.resume2}
                                onChange={(event) => {
                                  this.handleChangeField(event, i);
                                }}
                              />
                              <a target="_blank" href={user.resume2}>Resume 2</a>
                              <br></br>
                              <input type="radio" name="resume" id="answer" value={user.resume3}
                                onChange={(event) => {
                                  this.handleChangeField(event, i);
                                }}
                              />
                              <a target="_blank" href={user.resume3}>Resume 3</a>
                              <br></br>
                            </Form.Group>
                          </Col>
                        </Row>
                      </>
                    );
                  }
                  else {
                    return (
                      <>
                        <Row>
                          <Col className="pr-1 pr-2" md="5">
                            <Form.Group>
                              <h1>{item.isFixed}</h1>
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
                                defaultValue={item.isFixed ? user[information] : ""}
                                disabled={item.isFixed}
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
                  }
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
    else {
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

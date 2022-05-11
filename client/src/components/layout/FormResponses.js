import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "../achievement.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "../admin.css";

// import { updateUser } from "../../actions/authActions";

class FormResponses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DataisLoaded: false,
      CID: this.props.auth.user.id,
      data: [],
      fid: "",
    };
    // this.handleChangeField = this.handleChangeField.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }
  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  // addForm = (value) => {
  //   const list = [];
  //   for (let i = 0; i < value; i++) {
  //     let form = this.state.data[i];
  //     list.push(
  //       <div className="slot">
  //         <button id={"year" + i.toString()} className="yearBtn">
  //           <span className="arrow">
  //             <i id={"arrow" + i.toString()} className="fas fa-angle-right"></i>
  //           </span>
  //           {form.title}
  //           <Link to={"?id=" + form._id} target="_blank">
  //             <button>Apply</button>
  //           </Link>
  //         </button>
  //       </div>
  //     );
  //   }
  //   this.setState({ datalist: list });
  // };

  // async componentDidMount() {
  //     await axios
  //       .post("/api/recruiters/responses", {id:this.state.CID})
  //       .then((res) => {
  //         this.setState({ data: res.data, DataisLoaded: true });
  //         console.log(this.state.data);
  //         // this.addNotice(this.state.data.length);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  // }

  async componentDidMount() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const fid = params.get("fid");
    if (fid === null) {
      await axios
        .post("/api/recruiters/getFormbyCID", { id: this.state.CID })
        .then((res) => {
          this.setState({ data: res.data, DataisLoaded: true });
          console.log(this.state.data);
          // this.addNotice(this.state.data.length);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this.setState({ fid: fid });
      await axios
        .get(`/api/admins/recruiter/${email}`)
        .then((res) => {
          this.setState({
            name: res.data.details.name,
            contactPerson: res.data.details.contactPerson,
            designation: res.data.details.designation,
            email: email,
            telephone: res.data.details.telephone,
            mobile: res.data.details.mobile,
            isVerified: res.data.details.isVerified,
            role: res.data.details.role,
            DataisLoaded: true,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  // handleChangeField(event, i) {
  //   const newFields = this.state.answers;
  //   newFields[i] = { ...newFields[i], [event.target.id]: event.target.value }
  //   this.setState({ answers: newFields });
  // }

  render() {
    const { user } = this.props.auth;
    // if(this.state.DataisLoaded === true)
    // {

    // }
    if (this.state.fid === "") {
      const userRows = this.state.data;
      const columns = [
        {
          field: "title",
          headerName: "Title",
          hideable: false,
          width: 230,
        },
        {
          field: "type",
          headerName: "Type",
          hideable: false,
          width: 230,
        },
        {
          field: "status",
          headerName: "Status",
          width: 150,
          hideable: false,
        },
        // {
        //   field: "verification_status",
        //   headerName: "Status",
        //   width: 190,
        //   hideable: false,
        // },
        // {
        //   field: "edit",
        //   headerName: "Edit/View",
        //   sortable: false,
        //   filterable: false,
        //   hideable: false,
        //   width: 180,
        //   renderCell: (params) => {
        //     return (
        //       <>
        //         <Link to={"?roll=" + params.row.rollNo} target="_blank">
        //           <button className="userEdit">Edit/View</button>
        //         </Link>
        //       </>
        //     );
        //   },
        // },
      ];
      return (
        <>
          <div className="container text-center mt-15">
            <div className="row">
              <div className="col-sm-12">
                <div></div>
                <br />
                <br />
                <br />
                <h3>Filled Forms</h3>
                <div style={{ height: "400px", width: "90%" }} id="dataGrid">
                  <DataGrid
                    rows={userRows}
                    columns={[
                      ...columns,
                      {
                        field: "edit",
                        sortable: false,
                        filterable: false,
                        hideable: false,
                      },
                    ]}
                    pageSize={10}
                    rowsPerPageOptions={[10, 20, 30]}
                    getRowId={(row) => row.rollNo}
                  />
                </div>
                {/* <button
                  onClick={this.onLogout}
                  className="btn btn-large btn-light hoverable font-weight-bold"
                >
                  Logout
                </button> */}
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return <></>;
    }
    // if (this.state.id === "") {
    //   return (
    //     <>
    //       <div>
    //         <h2 style={{ textAlign: "center" }}>Active application forms</h2>
    //         <div className="acadmic">{this.state.datalist}</div>
    //       </div>
    //     </>
    //   );
    // } else {
    //   return (
    //     <>
    //       <h3>{this.state.title}</h3>
    //       <p>{this.state.JD}</p>
    //       <div style={{"width":"60%", "margin":"auto"}}>
    //       <form onSubmit={this.onSubmit}>
    //         {this.state.answers.map((item, i) => {
    //           return (
    //             <>
    //             <Row>
    //             <Col className="pr-1 pr-2" md="5">
    //             <Form.Group>
    //               <label className="noticeForm">
    //                 {item.isRequired ? item.label + "*" : item.label}
    //                 </label>
    //                 <Form.Control
    //                   type="text"
    //                   id="answer"
    //                   placeholder={item.description}
    //                   required={item.isRequired}
    //                   name={item.label}
    //                   onChange={(event) => {
    //                     this.handleChangeField(event, i);
    //                   }}
    //                   style={{"width":"100%"}}
    //                 />
    //                 </Form.Group>
    //                 </Col>
    //                 </Row>
    //               {/* </label> */}
    //               {/* <p>{item.description}</p> */}
    //               <br />
    //             </>
    //           );
    //         })}
    //         <center>
    //         <button style={{"width":"100px", "height":"60px", "marginBottom":"20px", "borderRadius":"6px", "backgroundColor":"#2196F3", "color":"#FFFF", "fontSize":"20px"}} type="submit">Submit</button>
    //         </center>
    //       </form>
    //       </div>
    //     </>
    //   );
    // }
  }
}

FormResponses.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(FormResponses);

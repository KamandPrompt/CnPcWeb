import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";

class viewResponsesVolunteer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DataisLoaded: false,
      FID: "",
      SID: "",
      studentData : [],
      role: this.props.auth.user.role,
      isVerified : false,
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const fid = params.get("fid");
    const sid = params.get("sid");
    // console.log(this.props.auth.user);
    // console.log(fid)
    if(sid){
      await axios.post(`/api/admins/getResponsebySID/${fid}/${sid}`, {sid: this.state.SID})
      .then((res)=>{
        this.setState({studentData:res.data.answers , DataisLoaded:true, FID:fid, SID:sid ,isVerified : res.data.isVerified});
        // console.log(this.state.isVerified);
      })
      .catch((err)=>{
        console.log(err);
      })
      // console.log("HELOO",this.state.FID, this.state.SID);
    }else{
      this.setState({FID:fid});
      await axios
        .post(`/api/recruiters/getFormResponsesbyCID/${fid}`, { role: this.state.role })
        .then((res) => {
          // console.log(res.data);
          this.setState({studentData:res.data.answers , DataisLoaded:true, FID:fid, isVerified : res.data.isVerified});
          // this.addNotice(this.state.data.length);
        })
        .catch((err) => {
          console.log(err);
        });    
    }
  }
  onchange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    // this.setState(e.target.id=e.target.value)
    // console.log(e.target.value);
    // console.log(e.target.id);
  };
  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  onsubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.isVerified)
    
    if(this.state.isVerified === "true" || this.state.isVerified===true)
    {
      axios.post(`api/admins/verifyResponse/${this.state.FID}/${this.state.SID}`,{isVerified : true})
      .then((res) => {
        alert(res.data);
      })
    }
    else
    {
      axios.post(`api/admins/verifyResponse/${this.state.FID}/${this.state.SID}`,{isVerified : false})
      .then((res) => {
        alert(res.data)
      })
    }
  }
  render() {
    if(this.state.DataisLoaded === true)
    {
      if(this.state.SID===""){
        console.log(this.state.studentData);
        const userRows = this.state.studentData;
        const columns = [
          {
            field: "name",
            headerName: "Name",
            hideable: false,
            width: 230,
          },
          {
            field: "rollNo",
            headerName: "Roll No.",
            hideable: false,
            width: 230,
          },
          {
            field: "cgpa",
            headerName: "CGPA",
            width: 150,
            hideable: false,
          },
          {
            field: "branch",
            headerName: "Branch",
            width: 150,
            hideable: false,
          },
          {
            field: "responses",
            headerName: "View Responses",
            sortable: false,
            filterable: false,
            hideable: false,
            width: 180,
            renderCell: (params) => {
              return (
                <>
                  <Link to={"/viewResponsesVolunteer?fid=" + params.row.FID+"&sid="+params.row.SID} target="_blank">
                    <button className="userEdit">Responses</button>
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
                        // {
                        //   field: "responses",
                        //   sortable: false,
                        //   filterable: false,
                        //   hideable: false,
                        // },
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
        )
      }else{
        return (
          <>
            <h1 style={{"textAlign":"center","margin":"30px"}}>STUDENT RESPONSE</h1>
            <form className="recruiterForm" style={{"paddingBottom":"20px","marginBottom":"40px"}}>
              {this.state.studentData.map((item)=>{
                return(
                  <div className="widget">
                    <label className="widgetLabel">{item.label}</label>
                    <br />
                    <input className="widgetInput" value={item.answer} disabled/>
                  </div>
                );
              })}
              <Form.Group style = {{"textAlign":"center"}}>
                <div>
                  <label>Verification Status</label>
                </div>
                <Form.Select
                  className="btn-sm primary"
                  aria-label="Default select example"
                  onChange={this.onchange}
                  id="isVerified"
                  value={this.state.isVerified}
                >
                  {this.state.isVerified ? (
                    <>
                      <option value={true} selected>
                        Verified
                      </option>
                      <option value={false}>Not verified</option>
                    </>
                  ) : (
                    <>
                      <option value={false} selected>
                        Not verified
                      </option>
                      <option value={true}>Verified</option>
                    </>
                  )}
                </Form.Select>
              </Form.Group>
            </form>
            <Button
              className="btn-fill"
              style={{ width: "200px"}}
              type="submit"
              variant="info"
              onClick={this.onsubmit}
            >
              Update Response
            </Button>
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

viewResponsesVolunteer.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(viewResponsesVolunteer);

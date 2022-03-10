import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import "../admin.css";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DataisLoaded: false,
      studentsData: [],
      name:"",
      rollNo:"",
      batch:"",
      degree:"",
      branch:"",
      cgpa:"",
      email:"",
      contactNumber:"",
      dob:"",
      Gender:"",
      tenthPercentage:"",
      twelthPercentage:"",
      advanceRank:"",
      resume:"",
      verification_status:""
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  async componentDidMount() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const roll = params.get('roll');
    if(roll===null)
    {
      await axios.get("/api/admins/all-students")
      .then(res => {
        this.setState({studentsData : res.data, DataisLoaded:true});
        // console.log(this.state.studentsData);
      })
      .catch(err=> {
        console.log(err);
      })
    }
    else
    {
      await axios.get(`/api/admins/student/${roll}`)
      .then(res => {
        this.setState({
          name : res.data.details.name, 
          rollNo:roll,
          batch : res.data.details.batch, 
          degree : res.data.details.degree, 
          branch : res.data.details.branch, 
          cgpa : res.data.details.cgpa, 
          email : res.data.details.email, 
          contactNumber : res.data.details.contactNumber, 
          dob : res.data.details.dob, 
          Gender : res.data.details.Gender, 
          tenthPercentage : res.data.details.tenthPercentage, 
          twelthPercentage : res.data.details.twelthPercentage, 
          advanceRank : res.data.details.advanceRank, 
          resume : res.data.details.resume, 
          verification_status : res.data.details.verification_status, 
          DataisLoaded:true,
        });
      })
      .catch(err=> {
        console.log(err);
      })
    }
  }
  onLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
  }
  handleSubmit(event){
    const {name,rollNo,batch,degree,branch,cgpa,email,contactNumber,dob,Gender,tenthPercentage,twelthPercentage,advanceRank,resume,verification_status } = this.state
    event.preventDefault()
    console.log(this.state);
  }
  
  handleChange(event){
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name] : event.target.value
    })
  }
  render() {
    const { user } = this.props.auth;
    if(this.state.DataisLoaded === true)
    {
      if(this.state.rollNo==="")
      {
        const userRows = this.state.studentsData;
        const columns = [
          { field: 'rollNo', headerName: 'Roll No.',hideable:false,width:130},
          { field: 'name', headerName: 'Name',hideable:false,width:130},
          {
            field: 'batch',
            headerName: 'Batch',
            type: 'number',
            width:100,
            hideable:false,
            
          },
          {
            field: "verification_status",
            headerName: "Status",
            width:130,
            hideable:false,
          },
          {
            field: "edit",
            headerName: "Edit/View",
            sortable: false,
            filterable:false,
            hideable:false,
            renderCell: (params) => {
              return (
                <>
                  <Link to={"?roll=" + params.row.rollNo} target="_blank">
                    <button className="userEdit">Edit/View</button>
                  </Link>
                </>
              );
            },
          },
        ];
        return (
          <>
          <div  className="container text-center mt-15">
            <div className="row">
              <div className="col-sm-12">
                <h4>
                  Hey there, <b className="name-lable">{user.name.split(" ")[0]}</b>
                  <p className="mt-4">
                    You are logged into a full-stack{" "}
                    <span style={{ fontFamily: "monospace" }}>admin</span> app 👏
                  </p>
                </h4>
                <div style={{height:'300px', width:'72%'}} id="dataGrid">
                  <DataGrid
                    rows={userRows}
                    columns={[...columns,{ field: 'edit', sortable: false,filterable:false,hideable:false }]}
                    pageSize={10}
                    rowsPerPageOptions={[10,20,30]}
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
      }
      else
      {
        // 
        // console.log(values);
        return (
          <>
            <Container fluid>
              <Row>
                <Col>
                  <Card>
                    <Card.Header>
                      <Card.Title as="h4">{this.state.name}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Form onSubmit={this.handleSubmit}>
                        <Row>
                          <Col className="pr-1" md="5">
                            <Form.Group>
                              <label>RollNo</label>
                              <Form.Control
                                name='rollNo'
                                value={this.state.rollNo}
                                onChange={this.handleChange}
                                placeholder="RollNo"
                                type="text"
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                          <Col className="px-1" md="3">
                            <Form.Group>
                              <label>Name</label>
                              <Form.Control
                                name='name'
                                value={this.state.name}
                                onChange={this.handleChange}
                                placeholder="Name"
                                type="text"
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                          <Col className="pl-1" md="4">
                            <Form.Group>
                              <label htmlFor="exampleInputEmail1">
                                Email address
                              </label>
                              <Form.Control
                                name='email'
                                value={this.state.email}
                                onChange={this.handleChange}
                                placeholder="Email"
                                type="email"
                              ></Form.Control>
                            </Form.Group>
                          </Col>
                        </Row>
                        <input type="submit" value="Update Profile" />
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </>
        );
      }
    }
    else
    {
      return (
        <div>Wait for some time</div>
      );
    }
  }
}

AdminDashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(AdminDashboard);
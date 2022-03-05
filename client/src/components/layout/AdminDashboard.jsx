import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import "../admin.css";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DataisLoaded: false,
      studentsData: [],
      rollNo:""
    };
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
        this.setState({studentsData : res.data, DataisLoaded:true,rollNo:roll});
      })
      .catch(err=> {
        console.log(err);
      })
    }
  }
  onLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    if(this.state.DataisLoaded === true)
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
      if(this.state.rollNo==="")
      {
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
        return (
          <h1>Here we will show details of {this.state.studentsData.details.name}</h1>
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
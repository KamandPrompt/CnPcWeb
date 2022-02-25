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
      studentsData: []
    };
  }
  async componentDidMount() {
    await axios.get("/api/admins/all-students")
    .then(res => {
      this.setState({studentsData : res.data, DataisLoaded:true});
      // console.log(this.state.studentsData);
    })
    .catch(err=> {
      console.log(err);
    })
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
          headerName: "Edit",
          sortable: false,
          filterable:false,
          hideable:false,
          renderCell: (params) => {
            return (
              <>
                <Link to={"user/edit/" + params.row.rollNo} target="_blank">
                  <button className="userEdit">Edit</button>
                </Link>
              </>
            );
          },
        },
        {
          field: "view",
          headerName: "View",
          renderCell: (params) => {
            return (
              <>
                <Link to={"user/view/" + params.row.rollNo} target="_blank">
                  <button className="userView">View</button>
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
                  columns={[...columns,{ field: 'edit',  },{ field: 'view', sortable: false,filterable:false,hideable:false }]}
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
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";


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
      this.setState({studentsData : res.data});
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
    // const {userRows} = this.state.userRows;
    const userRows = [
      {
        id: 1,
        username: "Jon Snow",
        avatar:
          "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00",
      },
      {
        id: 2,
        username: "Jon Snow",
        avatar:
          "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$130.00",
      },
      {
        id: 3,
        username: "Jon Snow",
        avatar:
          "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00",
      },
      {
        id: 4,
        username: "Jon Snow",
        avatar:
          "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00",
      },
      {
        id: 5,
        username: "Jon Snow",
        avatar:
          "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00",
      },
      {
        id: 6,
        username: "Jon Snow",
        avatar:
          "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00",
      },
      {
        id: 7,
        username: "Jon Snow",
        avatar:
          "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00",
      },
      {
        id: 8,
        username: "Jon Snow",
        avatar:
          "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00",
      },
      {
        id: 9,
        username: "Jon Snow",
        avatar:
          "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00",
      },
      {
        id: 10,
        username: "Jon Snow",
        avatar:
          "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00",
      },
    ];
    
    const dum_columns = [
      { field: "id", headerName: "ID", width: 90 },
      {
        field: "user",
        headerName: "User",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="userListUser">
              <img className="userListImg" src={params.row.avatar} alt="" />
              {params.row.username}
            </div>
          );
        },
      },
      { field: "email", headerName: "Email", width: 200 },
      {
        field: "status",
        headerName: "Status",
        width: 120,
      },
      {
        field: "transaction",
        headerName: "Transaction Volume",
        width: 160,
      },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <Link to={"/user/" + params.row.id}>
                <button className="userListEdit">Edit</button>
              </Link>
            </>
          );
        },
      },
    ];
    const columns = [
      { field: 'rollNum', headerName: 'Roll No.', width: 70 },
      { field: 'name', headerName: 'Name', width: 130 },
      {
        field: 'batch',
        headerName: 'Batch',
        type: 'number',
        width: 90,
      },
      {
        field: "status",
        headerName: "Status",
        width: 120,
      },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <Link to={"/user/" + params.row.id}>
                <button className="userListEdit">Edit</button>
              </Link>
            </>
          );
        },
      },
    ];
    console.log(userRows);
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
            <div style={{ height: 600, fontSize:'1em'}}>
              <DataGrid
                rows={userRows}
                columns={dum_columns}
                pageSize={10}
                rowsPerPageOptions={[10,20,30]}
                style = {{fontSize:'15px'}}
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
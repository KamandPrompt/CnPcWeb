import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "../admin.css";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

class ManageCreatedForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DataisLoaded: false,
      allForms : []
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    await axios
      .get("/api/admins/all-forms")
      .then((res) => {
        this.setState({ allForms: res.data, DataisLoaded: true });
        console.log(this.state.allForms);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    if (this.state.DataisLoaded === true) {
      const userRows = this.state.allForms;
      const columns = [
        {
          field: "fid",
          headerName: "fid",
          hideable: false,
          width: 150,
        },
        {
          field: "name",
          headerName: "Company Name",
          hideable: false,
          width: 150,
        },
        {
          field: "title",
          headerName: "Title",
          width: 300,
          hideable: false,
        },
        {
          field: "type",
          headerName: "Type",
          width: 150,
          hideable: false,
        },
        {
          field: "openStatus",
          headerName: "Open Status",
          width: 190,
          hideable: false,
        },
        {
          field: "isVerified",
          headerName: "Verification Status",
          width: 190,
          hideable: false,
        },
        {
          field: "edit",
          headerName: "Edit/View",
          sortable: false,
          filterable: false,
          hideable: false,
          width: 180,
          renderCell: (params) => {
            return (
              <>
                <Link to={"?fid=" + params.row.fid} target="_blank">
                  <button className="userEdit">Edit/View</button>
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
              <div className="col-sm-15">
                <div>
                  <h4>All Forms</h4>
                </div>
                <br />
                <br />
                <br />
                <h3>Form details</h3>
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
                    getRowId={(row) => row.fid}
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

ManageCreatedForms.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(ManageCreatedForms);

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
    };
  }
  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  async componentDidMount() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    await axios
      .post("/api/recruiters/getFormbyCID", { id: this.state.CID })
      .then((res) => {
        let Data = res.data;
        console.log(Data);
        // for(var i=0;i<data.length;i++)
        // {
        //   if(data[i].isVerified === true) data[i].isVerified = "Verified";
        //   else data[i].isVerified = "Not Verified";
          
        //   if(data[i].formStatus==="open") data[i].formStatus="Open";
        //   else data[i].formStatus="Closed";
        // }
        // this.setState({ data: data, DataisLoaded: true });
        // this.addNotice(this.state.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { user } = this.props.auth;
    if(this.state.DataisLoaded === true)
    {
      const userRows = this.state.data;
      const columns = [
        {
          field: "title",
          headerName: "Title",
          hideable: false,
          width: 260,
        },
        {
          field: "type",
          headerName: "Type",
          hideable: false,
          width: 230,
        },
        {
          field: "formStatus",
          headerName: "Status",
          width: 150,
          hideable: false,
        },
        {
          field: "isVerified",
          headerName: "Verification Status",
          width: 190,
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
                <Link to={"/viewResponses?fid=" + params.row._id} target="_blank">
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
                      {
                        field: "responses",
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
        <>
          <div class="loaderContainer">
            <div class="loader"></div>
          </div>
        </>
      );
    }
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

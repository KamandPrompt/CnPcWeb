import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class ViewResponses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DataisLoaded: false,
      FID: "",
      studentData : [],
      answers: [],
      role: this.props.auth.user.role,
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const fid = params.get("fid");
    this.setState({FID:fid});
    console.log(fid);
    await axios
        .post(`/api/recruiters/getFormbyCID/${fid}`, { role: this.state.role })
        .then((res) => {
          console.log(res.data);
          this.setState({studentData:res.data});
          // this.addNotice(this.state.data.length);
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
    // const { user } = this.props.auth;
    // const userRows = this.state.data;
    //   const columns = [
    //     {
    //       field: "title",
    //       headerName: "Title",
    //       hideable: false,
    //       width: 230,
    //     },
    //     {
    //       field: "type",
    //       headerName: "Type",
    //       hideable: false,
    //       width: 230,
    //     },
    //     {
    //       field: "formStatus",
    //       headerName: "Status",
    //       width: 150,
    //       hideable: false,
    //     },
    //     {
    //       field: "isVerified",
    //       headerName: "Verification Status",
    //       width: 190,
    //       hideable: false,
    //     },
    //     {
    //       field: "responses",
    //       headerName: "View Responses",
    //       sortable: false,
    //       filterable: false,
    //       hideable: false,
    //       width: 180,
    //       renderCell: (params) => {
    //         return (
    //           <>
    //             <Link to={"/viewResponses?fid=" + params.row._id} target="_blank">
    //               <button className="userEdit">Responses</button>
    //             </Link>
    //           </>
    //         );
    //       },
    //     },
    //   ];
      return (
        // <>
        //   <div className="container text-center mt-15">
        //     <div className="row">
        //       <div className="col-sm-12">
        //         <div></div>
        //         <br />
        //         <br />
        //         <br />
        //         <h3>Filled Forms</h3>
        //         <div style={{ height: "400px", width: "90%" }} id="dataGrid">
        //           <DataGrid
        //             rows={userRows}
        //             columns={[
        //               ...columns,
        //               {
        //                 field: "responses",
        //                 sortable: false,
        //                 filterable: false,
        //                 hideable: false,
        //               },
        //             ]}
        //             pageSize={10}
        //             rowsPerPageOptions={[10, 20, 30]}
        //             getRowId={(row) => row._id}
        //           />
        //         </div>
        //         {/* <button
        //           onClick={this.onLogout}
        //           className="btn btn-large btn-light hoverable font-weight-bold"
        //         >
        //           Logout
        //         </button> */}
        //       </div>
        //     </div>
        //   </div>
        // </>
        <></>
      );
  }
}

ViewResponses.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(ViewResponses);

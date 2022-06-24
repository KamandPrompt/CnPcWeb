import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { fillINF } from "../../actions/authActions";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Link } from "react-router-dom";

class ViewCreatedFormVolunteer extends Component{
    constructor(props){
        super(props);
        this.state = {
            FID: "",
            title: "",
            type: "",
            JD: "",
            studentData: [],
            eligibility: [],
            batch: Array(6).fill(""),
            isChecked: Array(6).fill(""),
            isDataLoaded: false,
        };
    }

    async componentDidMount() {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const fid = params.get("fid");
        // console.log(this.props.auth.user);
        console.log(fid);
        await axios.post(`/api/recruiters/getFormbyFID/${fid}`,{FID: fid})
        .then((res)=>{
            // console.log(res.data);
            const Data = res.data;
            let Batch = Array(6).fill("");
            let IsChecked = Array(6).fill(false);
            let e = [];
            e.push(Array(7).fill(false));
            e.push(Array(7).fill(false));
            e.push(Array(3).fill(false));
            e.push(Array(1).fill(false));
            e.push(Array(2).fill(false));
            e.push(Array(4).fill(false));
            const fields = Data.fields;
            const programs = [
            {
                name: "BTECH",
                branches: [
                "Computer Science and Engineering",
                "Data Science and Engineering",
                "Electrical Engineering",
                "Mechanical Engineering",
                "Civil Engineering",
                "Engineering Physics",
                "Bio-Engineering (B.Tech.-M.Tech. Integrated Dual Degree)",
                ],
                branchIDs: ["CSE", "DSE", "EE", "ME", "CE", "EP", "BIOE"],
            },
            {
                name: "MTECH",
                branches: [
                "Energy Engineering with specialization in Materials (EEM)",
                "Mechanical Engineering with specialization in Energy systems (MES)",
                "EE (VLSI)",
                "Biotech",
                "Power Electronics and Drives",
                "Communications and Signal Processing",
                "Structural Engineering",
                ],
                branchIDs: ["EEM", "MES", "VLSI", "BIOT", "PED", "CSP", "SE"],
            },
            {
                name: "MSC",
                branches: ["Chemistry", "Applied Mathematics", "Physics"],
                branchIDs: ["CM", "AM", "PY"],
            },
            {
                name: "MA",
                branches: ["Development Studies"],
                branchIDs: ["DS"],
            },
            {
                name: "MS",
                branches: [
                "School of Engineering",
                "School of Computing & Electrical   Engineering",
                ],
                branchIDs: ["SE", "SCEE"],
            },
            {
                name: "PHD",
                branches: [
                "School of Engineering",
                "School of Computing & Electrical Engineering",
                "School of Basic Sciences",
                "School of Humanities and Social Sciences",
                ],
                branchIDs: ["SE", "SCEE", "SBS", "SHS"],
            },
            ];
            for(let i=0;i<programs.length;i++){
                for(let j=0;j<(Data.eligibility.length);j++){
                    if(programs[i].name==Data.eligibility[j].program){
                        Batch[i] = Data.eligibility[j].batch;
                        IsChecked[i] = true;
                    }
                }
            }
            for(let i=0;i<(Data.eligibility.length);i++){
                let x = Data.eligibility[i];
                if(x.program=="BTECH"){
                    for(let j=0;j<x.branch.length;j++){
                        for(let k=0;k<e[0].length;k++){
                            if(x.branch[j]==programs[0].branchIDs[k]){
                                e[0][k] = true;
                            }
                        }
                    }
                }else if(x.program=='MTECH'){
                    for(let j=0;j<x.branch.length;j++){
                        for(let k=0;k<e[1].length;k++){
                            if(x.branch[j]==programs[1].branchIDs[k]){
                                e[1][k] = true;
                            }
                        }
                    }
                }else if(x.program=="MSC"){
                    for(let j=0;j<x.branch.length;j++){
                        for(let k=0;k<e[2].length;k++){
                            if(x.branch[j]==programs[2].branchIDs[k]){
                                e[2][k] = true;
                            }
                        }
                    }
                }else if(x.program=="MA"){
                    for(let j=0;j<x.branch.length;j++){
                        for(let k=0;k<e[3].length;k++){
                            if(x.branch[j]==programs[3].branchIDs[k]){
                                e[3][k] = true;
                            }
                        }
                    }
                }else if(x.program=="MS"){
                    for(let j=0;j<x.branch.length;j++){
                        for(let k=0;k<e[4].length;k++){
                            if(x.branch[j]==programs[4].branchIDs[k]){
                                e[4][k] = true;
                            }
                        }
                    }
                }else if(x.program=="PHD"){
                    for(let j=0;j<x.branch.length;j++){
                        for(let k=0;k<e[5].length;k++){
                            if(x.branch[j]==programs[5].branchIDs[k]){
                                e[5][k] = true;
                            }
                        }
                    }
                }
            }
            console.log(e);
            this.setState({
                title: Data.title,
                JD: Data.JD,
                type: Data.type,
                isChecked: IsChecked,
                batch: Batch,
                studentData: fields,
                FID: fid,
                eligibility: e,
                isDataLoaded: true,
            });
        }).catch((e)=>{
            console.log(e);
        })
    }

    render(){
        const programs = [
            {
              name: "BTECH",
              branches: [
                "Computer Science and Engineering",
                "Data Science and Engineering",
                "Electrical Engineering",
                "Mechanical Engineering",
                "Civil Engineering",
                "Engineering Physics",
                "Bio-Engineering (B.Tech.-M.Tech. Integrated Dual Degree)",
              ],
              branchIDs: ["CSE", "DSE", "EE", "ME", "CE", "EP", "BIOE"],
            },
            {
              name: "MTECH",
              branches: [
                "Energy Engineering with specialization in Materials (EEM)",
                "Mechanical Engineering with specialization in Energy systems (MES)",
                "EE (VLSI)",
                "Biotech",
                "Power Electronics and Drives",
                "Communications and Signal Processing",
                "Structural Engineering",
              ],
              branchIDs: ["EEM", "MES", "VLSI", "BIOT", "PED", "CSP", "SE"],
            },
            {
              name: "MSC",
              branches: ["Chemistry", "Applied Mathematics", "Physics"],
              branchIDs: ["CM", "AM", "PY"],
            },
            {
              name: "MA",
              branches: ["Development Studies"],
              branchIDs: ["DS"],
            },
            {
              name: "MS",
              branches: [
                "School of Engineering",
                "School of Computing & Electrical   Engineering",
              ],
              branchIDs: ["SE", "SCEE"],
            },
            {
              name: "PHD",
              branches: [
                "School of Engineering",
                "School of Computing & Electrical Engineering",
                "School of Basic Sciences",
                "School of Humanities and Social Sciences",
              ],
              branchIDs: ["SE", "SCEE", "SBS", "SHS"],
            },
          ];
        if(this.state.isDataLoaded){
            return(
            <>
                <h2>{this.state.title}</h2>
                <h3>Job Description :</h3>
                <input type="text" value={this.state.JD}/>
                <form style={{"paddingBottom":"20px","marginBottom":"40px"}}>
                    {this.state.studentData.map((item)=>{
                        if(item.isSelected){
                            if(item.isRequired){
                                return(
                                    <div className="widget">
                                        <label className="widgetLabel">{item.label}*</label>
                                        <br />
                                        <input className="widgetInput" value={item.description}/>
                                    </div>
                                );
                            }else{
                                return(
                                <div className="widget">
                                    <label className="widgetLabel">{item.label}</label>
                                    <br />
                                    <input className="widgetInput" value={item.description}/>
                                </div>
                                );
                            }
                        }
                })}
                </form>
                <h3>Eligibility</h3>
                <br/>
                <Row>
                <Col className="pl-1" md="12">
                    <Form.Group>
                        {this.state.eligibility.map((item,i)=>{
                            // return(programs[i].name);
                            return(
                                <>
                                {this.state.isChecked[i]?(<label>{`${programs[i].name}`+` `+`(${this.state.batch[i]} batch)`}</label>):(<label>{programs[i].name}</label>)}
                                <br />
                                <div className="container">
                                <Row>
                                    {item.map((it,j)=>{
                                        if(item[j]){
                                            return (
                                                <Col className="px-1" md="4">
                                                    <Form.Check
                                                    inline
                                                    label={programs[i].branches[j]}
                                                    name={item}
                                                    type="checkbox"
                                                    id={`${item}`+`${it}`}
                                                    checked
                                                    />
                                                </Col>
                                            );
                                        }else{
                                            return (
                                                <Col className="px-1" md="4">
                                                    <Form.Check
                                                    inline
                                                    label={programs[i].branches[j]}
                                                    name={item}
                                                    type="checkbox"
                                                    id={`${item}`+`${it}`}
                                                    />
                                                </Col>
                                            );
                                        }
                                    })}
                                </Row>
                                </div>
                                </>
                            );
                        })}
                    </Form.Group>
                    </Col>
                </Row>
                {/* <Row>
                    <Col className="pl-1" md="12">
                    <Form.Group>
                        <br />
                        <label>B.Tech</label>
                        <br />
                        <div className="container">
                        <Row>
                            {btech.map((item, i) => {
                            if (this.state.btech[i]) {
                                return (
                                <Col className="px-1" md="4">
                                    <Form.Check
                                    inline
                                    label={item}
                                    value={i}
                                    name="btech"
                                    type="checkbox"
                                    id={`btech${i}`}
                                    disabled
                                    checked
                                    />
                                </Col>
                                );
                            } else {
                                return (
                                <Col className="px-1" md="4">
                                    <Form.Check
                                    inline
                                    label={item}
                                    value={i}
                                    name="btech"
                                    type="checkbox"
                                    id={`btech${i}`}
                                    disabled
                                    />
                                </Col>
                                );
                            }
                            })}
                        </Row>
                        </div>
                    </Form.Group>
                    </Col>
                    <Col className="pl-1" md="12">
                    <Form.Group>
                        <br />
                        <label>M.Tech</label>
                        <br />
                        <div className="container">
                        <Row>
                            {mtech.map((item, i) => {
                            if (this.state.mtech[i]) {
                                return (
                                <Col className="px-1" md="4">
                                    <Form.Check
                                    inline
                                    label={item}
                                    value={i}
                                    name="mtech"
                                    type="checkbox"
                                    id={`mtech${i}`}
                                    disabled
                                    checked
                                    />
                                </Col>
                                );
                            } else {
                                return (
                                <Col className="px-1" md="4">
                                    <Form.Check
                                    inline
                                    label={item}
                                    value={i}
                                    name="mtech"
                                    type="checkbox"
                                    id={`mtech${i}`}
                                    disabled
                                    />
                                </Col>
                                );
                            }
                            })}
                        </Row>
                        </div>
                    </Form.Group>
                    </Col>
                    <Col className="pl-1" md="12">
                    <Form.Group>
                        <br />
                        <label>M.Sc</label>
                        <br />
                        <div className="container">
                        <Row>
                            {msc.map((item, i) => {
                            if (this.state.msc[i]) {
                                return (
                                <Col className="px-1" md="4">
                                    <Form.Check
                                    inline
                                    label={item}
                                    value={i}
                                    name="msc"
                                    type="checkbox"
                                    id={`msc${i}`}
                                    disabled
                                    checked
                                    />
                                </Col>
                                );
                            } else {
                                return (
                                <Col className="px-1" md="4">
                                    <Form.Check
                                    inline
                                    label={item}
                                    value={i}
                                    name="msc"
                                    type="checkbox"
                                    id={`msc${i}`}
                                    disabled
                                    />
                                </Col>
                                );
                            }
                            })}
                        </Row>
                        </div>
                    </Form.Group>
                    </Col>
                    <Col className="pl-1" md="12">
                    <Form.Group>
                        <br />
                        <label>M.A.</label>
                        <br />
                        <div className="container">
                        <Row>
                            {ma.map((item, i) => {
                            if (this.state.ma[i]) {
                                return (
                                <Col className="px-1" md="4">
                                    <Form.Check
                                    inline
                                    label={item}
                                    value={i}
                                    name="ma"
                                    type="checkbox"
                                    id={`ma${i}`}
                                    disabled
                                    checked
                                    />
                                </Col>
                                );
                            } else {
                                return (
                                <Col className="px-1" md="4">
                                    <Form.Check
                                    inline
                                    label={item}
                                    value={i}
                                    name="ma"
                                    type="checkbox"
                                    id={`ma${i}`}
                                    disabled
                                    />
                                </Col>
                                );
                            }
                            })}
                        </Row>
                        </div>
                    </Form.Group>
                    </Col>
                    <Col className="pl-1" md="12">
                    <Form.Group>
                        <br />
                        <label>M.S.</label>
                        <br />
                        <div className="container">
                        <Row>
                            {ms.map((item, i) => {
                            if (this.state.ms[i]) {
                                return (
                                <Col className="px-1" md="4">
                                    <Form.Check
                                    inline
                                    label={item}
                                    value={i}
                                    name="ms"
                                    type="checkbox"
                                    id={`ms${i}`}
                                    disabled
                                    checked
                                    />
                                </Col>
                                );
                            } else {
                                return (
                                <Col className="px-1" md="4">
                                    <Form.Check
                                    inline
                                    label={item}
                                    value={i}
                                    name="ms"
                                    type="checkbox"
                                    id={`ms${i}`}
                                    disabled
                                    />
                                </Col>
                                );
                            }
                            })}
                        </Row>
                        </div>
                    </Form.Group>
                    </Col>
                    <Col className="pl-1" md="12">
                    <Form.Group>
                        <br />
                        <label>PhD.</label>
                        <br />
                        <div className="container">
                        <Row>
                            {phd.map((item, i) => {
                            if (this.state.phd[i]) {
                                return (
                                <Col className="px-1" md="4">
                                    <Form.Check
                                    inline
                                    label={item}
                                    value={i}
                                    name="phd"
                                    type="checkbox"
                                    id={`phd${i}`}
                                    disabled
                                    checked
                                    />
                                </Col>
                                );
                            } else {
                                return (
                                <Col className="px-1" md="4">
                                    <Form.Check
                                    inline
                                    label={item}
                                    value={i}
                                    name="phd"
                                    type="checkbox"
                                    id={`phd${i}`}
                                    disabled
                                    />
                                </Col>
                                );
                            }
                            })}
                        </Row>
                        </div>
                    </Form.Group>
                    </Col>
                </Row> */}
            </>
            );
        }else{
            return(
                <></>
            );
        }
    }
}

ViewCreatedFormVolunteer.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
        auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(
    ViewCreatedFormVolunteer
);
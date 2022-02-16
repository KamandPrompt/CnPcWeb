import axios from "axios";
import { GET_ERRORS, SUCCESS } from "./types";

// fetch all-students-data
export const studentsData = () => dispatch => {
  axios.get("/api/admins/all-students")
  .then(res => {
    console.log("in fetching.js",res.data); 
    dispatch({
      type : SUCCESS,
      payload : res,
    })
  })
  .catch(err=> {
    console.log(err); 
    dispatch({
      type:GET_ERRORS,
      payload:err
    })
  })
}
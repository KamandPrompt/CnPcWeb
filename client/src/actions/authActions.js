import axios from "axios";
import setAuthToken from "../util/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// //Register User
// export const registerUser = (userData, history) => dispatch => {
//   axios.post("/api/users/register",userData)
//   .then(res => history.push("/login"))
//   .catch(err=> dispatch({
//     type:GET_ERRORS,
//     payload:err.response.data
//   }))
// }

// //Login
// export const loginUser = (userData) => dispatch => {
//   axios.post("/api/users/login",userData)
//   .then( res => {
//       const {token} = res.data;
//       // Set token to localStorage
//       localStorage.setItem("jwtToken", token);
//       // Set token to Auth header
//       setAuthToken(token);
//       const decoded = jwt_decode(token);
//       // Set current user
//       dispatch(setCurrentUser(decoded));
//    }
//   )
//   .catch(err=> dispatch({
//     type:GET_ERRORS,
//     payload:err.response.data
//   }))
// }

// Recruiters
// Register
export const registerRecruiter = (userData, history) => (dispatch) => {
  axios
    .post("/api/recruiters/register", userData)
    .then((res) => dispatch(loginRecruiter(userData)))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const fillINF = (userData, history) => (dispatch) =>{
  axios.post("/api/recruiters/fillINF", userData).then((res)=>{
    alert("INF Form submitted!!!");
  }).catch((err)=>{
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  })
}

export const createFormRecruiter = (formData, history) => (dispatch) => {
  axios
    .post("/api/recruiters/createForm", formData)
    .then((res) => alert("Form created successfully!!"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
export const saveResponseStudent = (formData, history) => (dispatch) => {
  console.log(formData);
  axios
    .post("/api/students/saveResponse", formData)
    .then((res) => alert("Response submitted successfully"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Login
export const loginRecruiter = (userData) => (dispatch) => {
  axios
    .post("/api/recruiters/login", userData)
    .then((res) => {
      const { token } = res.data;
      // Set token to localStorage
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Students
// Register
export const registerStudent = (userData, history) => (dispatch) => {
  axios
    .post("/api/students/register", userData)
    .then((res) => dispatch(loginStudent(userData)))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Login
export const loginStudent = (userData) => (dispatch) => {
  axios
    .post("/api/students/login", userData)
    .then((res) => {
      const { token } = res.data;
      // Set token to localStorage
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Admin Login
export const loginAdmin = (userData) => (dispatch) => {
  axios
    .post("/api/admins/login", userData)
    .then((res) => {
      const { token } = res.data;
      // Set token to localStorage
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Set logged in user
export const setCurrentUser = (decoded_data) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded_data,
  };
};

// Logout user
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

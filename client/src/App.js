// import { useState, useEffect } from "react";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./util/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import Navigation from "./components/navigation";
import { Footer } from "./components/footer";
import { Home } from "./components/home";
import { Carousal } from "./components/carousal";
import { Acadmics } from "./components/Acadmics";
import { Schools } from "./components/school";
import { Research } from "./components/Research";
import { Demo } from "./components/Demo";
import { render } from "@testing-library/react";
import { Contact } from "./components/Contact";
import { Achievement } from "./components/achievement";
import { Student } from "./components/Student";
import { INF } from "./components/INF";

import RegisterStudent from "./components/layout/RegisterStudent";
import LoginStudent from "./components/layout/LoginStudent";
import RegisterRecruiter from "./components/layout/RegisterRecruiter";
import LoginRecruiter from "./components/layout/LoginRecruiter";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/layout/Dashboard";

// import GoogleMap from "./components/GoogleMap";
// import {CarousalContainer} from "./components/carousal";
// import { Header } from "./components/header";
// import { Features } from "./components/features";
// import { About } from "./components/about";
// import { Services } from "./components/services";
// import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
// import { Contact } from "./components/contact";
// import JsonData from "./data/data.json";
// import SmoothScroll from "smooth-scroll";
// import "./App.css";

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./loginRecruiter";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navigation />
          <Routes>
            <Route exact path="/" element={[<Carousal />, <Home />]}></Route>
            <Route
              exact
              path="/achievement"
              element={[<Achievement />]}
            ></Route>
            <Route
              exact
              path="/acadmics"
              element={[<Acadmics />, <Demo />]}
            ></Route>
            <Route exact path="/research" element={<Research />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/inf" element={<INF />}></Route>
            <Route
              exact
              path="/student_login"
              element={<Student task={"student_login"} />}
            ></Route>
            <Route
              exact
              path="/recruiter_login"
              element={<Student task={"recruiter_login"} />}
            ></Route>
            <Route
              exact
              path="/recruiter_register"
              element={<Student task={"recruiter_register"} />}
            ></Route>
            <Route
              exact
              path="/registerRecruiter"
              element={<RegisterRecruiter />}
            ></Route>
            <Route
              exact
              path="/registerStudent"
              element={<RegisterStudent />}
            ></Route>
            <Route
              exact
              path="/loginRecruiter"
              element={<LoginRecruiter />}
            ></Route>
            <Route
              exact
              path="/loginStudent"
              element={<LoginStudent />}
            ></Route>
            <Route exact path="/dashboard" element={<PrivateRoute />}>
              <Route exact path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;

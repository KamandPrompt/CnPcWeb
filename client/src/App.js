// import { useState, useEffect } from "react";
import React, { Component } from "react";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
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
import { Recpro } from "./components/Recpro";
import { Research } from "./components/Research";
import  {Demo}  from "./components/Demo";
import { render } from "@testing-library/react";
import { Contact } from "./components/Contact";
import { Achievement } from "./components/achievement";
import { Student } from "./components/Student";
import { INF } from "./components/INF";
import { Kamand }from "./components/Kamand";

import RegisterStudent from "./components/layout/RegisterStudent";
import LoginStudent from "./components/layout/LoginStudent";
import LoginAdmin from "./components/layout/LoginAdmin";
import RegisterRecruiter from "./components/layout/RegisterRecruiter";
import LoginRecruiter from "./components/layout/LoginRecruiter";
import UnprivateOutlet from "./components/private-route/UnprivateOutlet";
import RecruiterOutlet from "./components/private-route/RecruiterOutlet";
import AdminOutlet from "./components/private-route/AdminOutlet";
import StudentOutlet from "./components/private-route/StudentOutlet";
import Dashboard from "./components/layout/Dashboard";
import AdminDashboard from "./components/layout/AdminDashboard"
import StudentDashboard from "./components/layout/StudentDashboard";


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
        <BrowserRouter>
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

            <Route
              exact
              path="/Recpro"
              element={<Recpro />}
            ></Route>
           <Route exact path="/kamand" element={<Kamand />}></Route>
            <Route exact path="/research" element={<Research />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/inf" element={<INF />}></Route>
            <Route
              exact
              path="/registerRecruiter"
              element={<UnprivateOutlet />}
            >
              <Route path="" element={<RegisterRecruiter />} />
            </Route>
            <Route exact path="/loginRecruiter" element={<UnprivateOutlet />}>
              <Route path="" element={<LoginRecruiter />} />
            </Route>
            <Route exact path="/registerStudent" element={<UnprivateOutlet />}>
              <Route path="" element={<RegisterStudent />} />
            </Route>
            <Route exact path="/loginStudent" element={<UnprivateOutlet />}>
              <Route path="" element={<LoginStudent />} />
            </Route>
            <Route exact path="/loginAdmin" element={<UnprivateOutlet />}>
              <Route path="" element={<LoginAdmin />} />
            </Route>
            <Route
              exact
              path="/dashboardRecruiter"
              element={<RecruiterOutlet />}
            >
              <Route path="" element={<Dashboard />} />
            </Route>
            <Route exact path="/dashboardStudent" element={<StudentOutlet />}>
              <Route path="" element={<StudentDashboard />} />
            </Route>
            <Route exact path="/dashboardAdmin" element={<AdminOutlet />}>
              <Route path="" element={<AdminDashboard />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

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
import { Programmes } from "./components/Programmes";
import { Schools } from "./components/school";
import { Recpro } from "./components/Recpro";
import { Research } from "./components/Research";
import { Demo } from "./components/Demo";
import { render } from "@testing-library/react";
import { Contact } from "./components/Contact";
import { Achievement } from "./components/achievement";
import { Student } from "./components/Student";
// import { INF } from "./components/INF";
import { Kamand } from "./components/Kamand";
import { PrepPortal } from "./components/PrepPortal";
import Past from "./components/Past";

import RegisterStudent from "./components/layout/RegisterStudent";
import LoginStudent from "./components/layout/LoginStudent";
import LoginAdmin from "./components/layout/LoginAdmin";
import RegisterRecruiter from "./components/layout/RegisterRecruiter";
import LoginRecruiter from "./components/layout/LoginRecruiter";
import UnprivateOutlet from "./components/private-route/UnprivateOutlet";
import RecruiterOutlet from "./components/private-route/RecruiterOutlet";
import VolunteerOutlet from "./components/private-route/VolunteerOutlet";
import CoordinatorOutlet from "./components/private-route/CoordinatorOutlet";
import StudentOutlet from "./components/private-route/StudentOutlet";
import RecruiterDashboard from "./components/layout/RecruiterDashboard";
import CreateForm from "./components/layout/CreateForm";
import CoordinatorDashboard from "./components/layout/CoordinatorDashboard";
import VolunteerDashboard from "./components/layout/VolunteerDashboard";
import StudentDashboard from "./components/layout/StudentDashboard";
import Noticeboard from "./components/layout/Noticeboard";
import FormResponses from "./components/layout/FormResponses";
import ManageRecruiters from "./components/layout/ManageRecruiters";
import RecruiterAdminOutlet from "./components/private-route/RecruiterAdminOutlet";
import ViewResponses from "./components/layout/ViewResponses";
import ManageCreatedForms from "./components/layout/ManageCreatedForms";
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
            <Route exact path="/" element={[<Home />]}></Route>
            <Route
              exact
              path="/achievement"
              element={[<Achievement />]}
            ></Route>
            <Route exact path="/past" element={[<Past />]}></Route>
            <Route
              exact
              path="/acadmics"
              element={[<Acadmics />, <Demo />]}
            ></Route>
            <Route exact path="/Programmes" element={<Programmes />}></Route>
            <Route exact path="/PrepPortal" element={<PrepPortal />}></Route>
            <Route exact path="/Recpro" element={<Recpro />}></Route>
            <Route exact path="/Kamand" element={<Kamand />}></Route>
            <Route exact path="/research" element={<Research />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            {/* <Route exact path="/inf" element={<INF />}></Route> */}
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
            {/* <Route exact path="/registerStudent" element={<UnprivateOutlet />}>
              <Route path="" element={<RegisterStudent />} />
            </Route> */}
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
              <Route path="" element={<RecruiterDashboard />} />
            </Route>
            <Route exact path="/createForm" element={<VolunteerOutlet />}>
              <Route path="" element={<CreateForm />} />
            </Route>
            <Route exact path="/formresponses" element={<RecruiterOutlet />}>
              <Route path="" element={<FormResponses />} />
            </Route>
            <Route exact path="/dashboardStudent" element={<StudentOutlet />}>
              <Route path="" element={<StudentDashboard />} />
            </Route>
            <Route exact path="/noticeboard" element={<StudentOutlet />}>
              <Route path="" element={<Noticeboard />} />
            </Route>
            <Route
              exact
              path="/dashboardCoordinator"
              element={<CoordinatorOutlet />}
            >
              <Route path="" element={<CoordinatorDashboard />} />
            </Route>
            <Route
              exact
              path="/dashboardVolunteer"
              element={<VolunteerOutlet />}
            >
              <Route path="" element={<VolunteerDashboard />} />
            </Route>
            <Route path="/viewResponses" element={<RecruiterAdminOutlet />}>
              <Route path="" element={<ViewResponses />} />
            </Route>
            <Route exact path="/manageRecruiters" element={<VolunteerOutlet />}>
              <Route path="" element={<ManageRecruiters />} />
            </Route>
            <Route
              exact
              path="/manageCreatedForms"
              element={<VolunteerOutlet />}
            >
              <Route path="" element={<ManageCreatedForms />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

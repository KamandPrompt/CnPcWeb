// import { useState, useEffect } from "react";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navigation } from "./components/navigation";
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

class App extends Component {
  render() {
    return (
       <Router>
           <Navigation/>
           <Routes>
                 <Route exact path='/' element={[<Carousal/>,< Home />]}></Route>
                 <Route exact path='/achievement' element={[<Achievement/>]}></Route>
                 <Route exact path='/acadmics' element={[<Acadmics/>,<Demo/>]}></Route>
                 <Route exact path='/research' element={<Research/>}></Route>
                 <Route exact path='/contact' element={<Contact />}></Route>
                 <Route exact path='/inf' element={<INF />}></Route>
                 <Route exact path='/student_login' element={<Student task={"student_login"} />}></Route>
                 <Route exact path='/recruiter_login' element={<Student task={"recruiter_login"} />}></Route>
                 <Route exact path='/recruiter_register' element={<Student task={"recruiter_register"} />}></Route>
          </Routes>
          <Footer/>

       </Router>
   );
  }
}

export default App;

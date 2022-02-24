import React from "react";
// import {Map} from './GoogleMap';

export const Footer = (props) => {
  return (
    <footer>
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 m-md-auto align-self-center">
              <div id="block-1" className="block">
                <div className="log" style={{ height: "100px" }}>
                  <a href="https://iitmandi.ac.in/">
                    <img
                      src="https://students.iitmandi.ac.in/~u_shivateja/e/iitmandi-logo.png"
                      alt=""
                      width="150px"
                      height="auto"
                    />
                  </a>
                </div>
                <div className="head">
                  <h2
                    className="address"
                    style={{ color: "#ffff", lineHeight: "24px" }}
                  >
                    Indian Institute of Technology Mandi
                    <br />
                    Kamand, Mandi - 175005 <br /> Himachal Pradesh, India
                  </h2>
                </div>
                <div className="icons">
                  <ul className="social-icon list-inline">
                    <li className="list-inline-item">
                      <a
                        id="fav1"
                        className="social-links"
                        href="https://www.facebook.com/IITMandi2009/"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        id="fav2"
                        className="social-links"
                        href="https://twitter.com/iit__mandi"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        id="fav3"
                        className="social-links"
                        href="https://www.linkedin.com/school/indian-institute-of-technology-mandi"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="block-2">
                {/* <!-- heading --> */}
                <h4 style={{ color: "white" }}>Quick Links</h4>
                <hr className="new4" />
                {/* <!-- links --> */}
                <ul id="links-1">
                  <li>
                    <a className="links" href="./gcs/index.html">
                      Guidance and Counseling Service
                    </a>
                  </li>
                  <li>
                    <a
                      className="links"
                      href="/"
                    >
                      Welcome to Kamand Valley
                    </a>
                  </li>
                  <li>
                    <a className="links" target="_blank" href="https://guesthouse.iitmandi.ac.in/">
                      Guest House
                    </a>
                  </li>
                  <li>
                    <a className="links" href="./Talk2_us/index.html">
                      Talk To Faculty
                    </a>
                  </li>
                  <li>
                    <a className="links" href="/gcs/index.html#ug_orientation">
                      B.Tech Orientation
                    </a>
                  </li>
                  <li>
                    <a
                      className="links"
                      href="https://students.iitmandi.ac.in/files/CodeOfConduct.pdf"
                    >
                      Code of Conduct
                    </a>
                  </li>
                  <li>
                    <a className="links" href="https://oas.iitmandi.ac.in">
                      Office Automation System
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="block-2">
                <h4 style={{ color: "white" }}>Explore</h4>
                <hr className="new4" style={{ color: "white" }} />
                <ul>
                  <li>
                    <a
                      className="links"
                      href="https://gymkhana.iitmandi.co.in/"
                    >
                      Student Gymkhana
                    </a>
                  </li>
                  <li>
                    <a className="links" href="./campusLife/index.html">
                      Campus Life
                    </a>
                  </li>
                  <li>
                    <a className="links" href="./studentLife/index.html">
                      Student Life
                    </a>
                  </li>
                  <li>
                    <a
                      className="links"
                      href="./social_consciousness/index.html"
                    >
                      Social Initiatives
                    </a>
                  </li>
                  <li>
                    <a className="links" href="./achievements/index.html">
                      Students' Achievements
                    </a>
                  </li>
                  <li>
                    <a className="links" href="./FemaleHelpDesk/index.html">
                      Female Help Desk
                    </a>
                  </li>
                  <li>
                    <a
                      className="links"
                      href="http://students.iitmandi.ac.in/talk2_ws.php"
                    >
                      Talk To B.Tech Female Students
                    </a>
                  </li>
                  <li>
                    <a className="links" href="./FemaleStudents/index.html">
                      Specially For Female Students
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="footer_copyright">
          {" "}
          <a href="https://iitmandi.co.in/" style={{ color: "#C4C4C4" }}>
            <span style={{ color: "#C4C4C4" }}>©</span>CnP, IIT Mandi 2022,
          </a>{" "}
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

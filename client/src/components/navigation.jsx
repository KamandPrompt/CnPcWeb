export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            {/* <span className='sr-only'>Toggle navigation</span>{' '} */}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="/">
            CNP IIT MANDI
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a href="/acadmics" className="page-scroll dropbtn">
                Why recruit?
              </a>
              <div className="dropdown-content">
                <a
                  id="outerDiv"
                  className="page-scroll dropbtn"
                  href="/acadmics"
                >
                  Acadmics{" "}
                  <i
                    style={{ float: "right", marginTop: "4px" }}
                    class="fas fa-caret-right"
                  ></i>
                  <div
                    id="innerDiv"
                    className="dropdown-content btn-group dropright"
                  >
                    <a href="#">Schools</a>
                    <a href="/research">Research and Development</a>
                    {/* <a href="https://www.iitmandi.ac.in/TIH-HCI/">I HUB</a>
                    <a href="https://www.iitmandicatalyst.in/">Catalyst</a> */}
                    <a
                      href="http://iitmandi.ac.in/administration/mou.php"
                      target="_blank"
                    >
                      MoUs
                    </a>
                    <a href="#">Programmes(UG & PG)</a>
                  </div>
                </a>
                <a href={require("./Brochure2021-22.pdf")} target="blank">
                  Brochure
                </a>
                <a href="/achievement">Students achievements</a>
                <a href="#">Demographics</a>
                <a
                  href="https://gymkhana.iitmandi.co.in/index.html"
                  target="_blank"
                >
                  Students gymkhana
                </a>
                <a
                  href="https://ieee.iitmandi.ac.in/index.html"
                  target="_blank"
                >
                  IEEE SB chapter
                </a>
                <a href="https://alumniconnect.iitmandi.ac.in/" target="_blank">
                  Alumni
                </a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#features" className="page-scroll dropbtn">
                Recruiters valley
              </a>
              <div className="dropdown-content">
              <a href="/recruiter_register">Register</a>
                <a href="/recruiter_login">Login</a>
                <a href="#">Placement brochure</a>
                <a href="#">Calendar</a>
                <a href="#">Past Recruiters</a>
                <a href="#">Placement news and stats</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#features" className="page-scroll dropbtn">
                Students column
              </a>
              <div className="dropdown-content">
                <a href="/student_login">Login</a>
                <a href="#">Policies</a>
                <a href="#">Noticeboard</a>
                <a href="#">Forms </a>
                <a href="#">Preparation portal</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="/contact" className="page-scroll dropbtn">
                Contact us
              </a>
              <div className="dropdown-content">
                <a href="/contact">Professor in charge</a>
                <a href="/contact">Placement cell details</a>
                <a href="/contact">Student coordinators</a>
                <a href="/contact">Administrative staff</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

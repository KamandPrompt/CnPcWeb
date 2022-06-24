import React from "react";
import nmr from "../images/nmr.png"
import crystalxdr from "../images/crystalxdr.png"
import hrtem from "../images/HR-TEM.png"

export const ResearchLab = () => {
  return (
    <>
      <div className="acadmic">
        <div className="slot">
          <div>
            <hr className="left-lg" />
            <h3 className="homeHead homeHead-lg">Research Lab</h3>
            <hr className="right-lg" />
          </div>
          <p style={{color:"black"}}>
            In a world increasingly driven by technology, IIT Mandi offers the
            best research facilities to its students as well to the faculties.
            Through its robust R&D axis, IIT Mandi focuses on technological
            development and encourages innovation. The main aim of the R&D
            centre at IIT Mandi is to make the students and the faculty more
            motivated and driven towards higher studies and research. The
            institute has the following facilities to support research and
            development activities.
          </p>
        </div>
        <br />
        <div className="slot">
          <button id="bttn1" className="extrabtn">
            MANAS Lab (SCEE){" "}
            <span className="plus">
              <i id="pluss1" className="fas fa-plus"></i>
            </span>
          </button>
          <div id="li1" className="extracont">
            <p>
              The Multimedia Analytics, Networks and Systems group at IIT Mandi works in several diverse areas includng communication networks, cloud computing, computer vision, data mining, machine learning techniques,signal processing and sensors. The group is a part of School of Computing and Electrical Engineering.
              <br />To know more please{" "}
              <a href="https://manas.iitmandi.ac.in/" target="_blank">
                click here
              </a>
              .
            </p>
          </div>
        </div>
        <div className="slot">
          <button id="bttn2" className="extrabtn">
            Modeling and Intelligent Control Group
            (MIC) (SCEE){" "}
            <span className="plus">
              <i id="pluss2" className="fas fa-plus"></i>
            </span>
          </button>
          <div id="li2" className="extracont">
            <p>The MIC group of IIT Mandi offers post-graduate as well as undergraduate courses in the broad areas of
              Systems and Control. The faculty members of the group have varied research backgrounds that includes Control
              Theory, Linear Systems, Distributed Energy Sources, Fault Diagnosis and Fault Tolerant Control, Sustainable
              Energy Systems etc.<br />
              To know more please{" "}
              <a href="http://mic.iitmandi.ac.in/" target="_blank">
                click here
              </a>
              .
            </p>
          </div>
        </div>
        <div className="slot">
          <button id="bttn3" className="extrabtn">
            CMP Lab (SBS){" "}
            <span className="plus">
              <i id="pluss3" className="fas fa-plus"></i>
            </span>
          </button>
          <div id="li3" className="extracont">
            <p>
              To know more please {" "}
              <a href="http://iitmandi.ac.in/CMP/" target="_blank">
                click here
              </a>
              .
            </p>
          </div>
        </div>
        <div className="slot">
          <button id="bttn4" className="extrabtn">
            Photoresist Research Group{" "}
            <span className="plus">
              <i id="pluss4" className="fas fa-plus"></i>
            </span>
          </button>
          <div id="li4" className="extracont">
            <p>In today's world, semiconductor chips play a vital role in day to day life by making our life pleasurable, safer, and healthier. The radical improvements in integrated circuits (IC) performance stem primarily from the interconnection of millions of active and passive components such as logic, memory, input-output and power management modules on a single silicon chip. Semiconductor device manufacturers compete to offer cost effective devices that combine high performance and functionalities with low heat generation. This competition has resulted in a relentless drive to reduce the (IC) chip feature size to the sub N7 nm node. Reducing the device feature size boosts speed and improves the economics of manufacturing by allowing more transistors (often more than 50 million) to be placed on a single chip.
              <br />To know more please{" "}
              <a href="http://www.photoresistgroup.com/" target="_blank">
                click here
              </a>
              .
            </p>
          </div>
        </div>
        <div className="slot">
          <button id="bttn5" className="extrabtn">
            MAS Lab (SCEE){" "}
            <span className="plus">
              <i id="pluss5" className="fas fa-plus"></i>
            </span>
          </button>
          <div id="li5" className="extracont">
            <p>The Multimedia Analytics and Systems group at IIT Mandi works in several diverse areas includng signal processing, computer vision, data mining and machine learning techniques. The group is a part of School of Computing and Electrical Engineering.
              <br />
              To know more please{" "}
              <a href="http://maslab.iitmandi.ac.in/" target="_blank">
                click here
              </a>
              .
            </p>
          </div>
        </div>
        <div className="slot">
          <button id="bttn3" className="extrabtn">
            ACS Lab (SCEE){" "}
            <span className="plus">
              <i id="pluss3" className="fas fa-plus"></i>
            </span>
          </button>
          <div id="li3" className="extracont">
            <p>The focus of APPLIED COGNITIVE SCIENCE lab is to investigate decision-making and cognition in applied domains. Some key domains include our environment, consumer behavior, cyber security, vehicle driving, natural disasters, and betting.
              <br />To know more please{" "}
              <a href="http://www.acslab.org/" target="_blank">
                click here
              </a>
              .
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className="slot container">
          <p style={{color:"#0A1F56", fontSize:"25px", }}>
            Upcoming Installations :
          </p>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 installation">
              <img src={nmr} alt="" />
              <h3 className="device">NMR</h3>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 installation">
              <img src={crystalxdr} alt="" />
              <h3 className="device">Single Crsytal XRD</h3>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 installation">
              <img src={hrtem} alt="" />
              <h3 className="device">HR-TEM</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

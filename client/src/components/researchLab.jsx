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
          <p>
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
            Computational Facilities{" "}
            <span className="plus">
              <i id="pluss1" className="fas fa-plus"></i>
            </span>
          </button>
          <div id="li1" className="extracont">
            <p>
              The high performance computing facility at IT Mandi is operational
              it is a 128-core rack mounted cluster with Xeon 2.4 GHz quad core
              processor. 8GB memory per node, Gigabit Ethernet Interconnect and
              6TB storage and can support 256 threads it has a RAM of IGB per
              core. This is a rack-mounted cluster, with openPBS queuing The
              campus is equipped with 1 Gb/s NKN connection and 45 Mb/s Internet
              connection.
            </p>
          </div>
        </div>
        <div className="slot">
          <button id="bttn2" className="extrabtn">
            Characterization Lab{" "}
            <span className="plus">
              <i id="pluss2" className="fas fa-plus"></i>
            </span>
          </button>
          <div id="li2" className="extracont">
            <li>UV-VIS spectrophotometer</li>
            <li>Atomic Absorption Spectrometer (AAS)</li>
            <li>Dynamic Light Scattering (DLS)</li>
            <li>Magnetic susceptibility balance</li>
            <li>Fluorescent spectrometer</li>
            <li>
              Thermo Gravimetric Analyzer coupled with Differential Scanning
              Colorimetry (TGA-DSC)
            </li>
            <li>Electrochemical Analyzer</li>
            <li>FT-R spectrophotometer</li>
            <li>Ozonator</li>
            <li>Polarimeter</li>
            <li>GC</li>
            <li>Time-Correlated Single Photon Counting (TCSPC)</li>
          </div>
        </div>
        <div className="slot">
          <button id="bttn3" className="extrabtn">
            Synthesis Lab{" "}
            <span className="plus">
              <i id="pluss3" className="fas fa-plus"></i>
            </span>
          </button>
          <div id="li3" className="extracont">
            <li>Fume Hood</li>
            <li> Rotary Evaporator</li>
            <li>Double Stage Water Purification System</li>
            <li>Ultra Centrifuge with refrigeration</li>
            <li>Muffle Furnace</li>
            <li>Deep Freezer</li>
            <li>Vacuum Oven</li>
            <li>Flake loe Making Machine</li>
            <li>Programmable Spin Coater</li>
            <li>Ozone Generator with Oxygen Concentrator</li>
          </div>
        </div>
        <div className="slot">
          <button id="bttn4" className="extrabtn">
            Thermo-fluids and Design Labs{" "}
            <span className="plus">
              <i id="pluss4" className="fas fa-plus"></i>
            </span>
          </button>
          <div id="li4" className="extracont">
            <li>N Data Acquisition Unit</li>
            <li>Phantom high speed video camera</li>
            <li>Coriolis flow meter</li>
            <li>Pressure calibration system</li>
            <li>Temperature calibration system</li>
          </div>
        </div>
        <div className="slot">
          <button id="bttn5" className="extrabtn">
            Central Instrumentation Facility{" "}
            <span className="plus">
              <i id="pluss5" className="fas fa-plus"></i>
            </span>
          </button>
          <div id="li5" className="extracont">
            <li>Rowder XRD</li>
            <li>
              High Resolution Transmission Electron Microscope ITEMI-Energy
              Dispersive Spectroscopy (EDS)
            </li>
            <li>Nuclear Magnetic Resonance Spectrometer - 500 MHz</li>
            <li>Field Emission Gun Scanning Electron Microscope (FE-SEM)</li>
            <li>
              Single Crystal X-ray crystallography 06. Fluorescence Confocal
              Microscopy
            </li>
            <li>High Performance Liquid Chromatography (HPLC)</li>
            <li>High Resolution Mass Spectrometer</li>
            <li>FMTOSECOND PUMP-PROBE SET-UP</li>
            <li>Spectrofluorometer</li>
          </div>
        </div>
        <br />
        <div className="slot container">
          <p>
            Upcomming Installations :
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

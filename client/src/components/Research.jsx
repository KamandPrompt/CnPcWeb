import React from "react";
import { ResearchLab } from "./researchLab";
import { Centre } from "./centre";
import ihub from "../images/ihub.png";
import ewok from "../images/logo_transparent.png";
import catalyst from "../images/catalyst.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Research = (props) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "5px",
    slidesToShow: 3,
    speed: 300,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Centre />
      <ResearchLab />
      <div className="acadmic">
        <div className="slot">
          {/* <h3 className="faculty-head">Technology Innovation HUB and HCL</h3> */}
          <div>
            <hr className="left-lg" />
            <h3 className="homeHead homeHead-lg">Innovation Centres</h3>
            <hr className="right-lg" />
          </div>
          <br />
          <h3 className="faculty-head" style={{"padding":"2%","textAlign":"center"}}>Enabling Women of
Kamand (EWOK)</h3>
          <div className="row ihubrow">
            <div className="col-lg-3 col-md-4 ihubimg">
              <img src={ewok} alt="" style={{"width":"250px"}} />
            </div>
            <div className="col-lg-9 col-md-8 backG">
              <p className="bhashan">
              The main aim of EWOK is to help local women in the Kamand valley in Himachal Pradesh achieve their goals. EWOK has developed an app that aggregates information about training, education and employment opportunities for women in the area. EWOK also provides individual assistance, mentors and guidance for women seeking to set up their own businesses, complete their education, obtain training or find employment. EWOK offers courses for local women wishing to improve their spoken English and the gain basic computer skills. These courses are affiliated with the NIIT Foundation. Women completing the courses receive government approved certification. As most of the women in the valley have a great deal of experience and skills gained from their work in agriculture, EWOK’s main focus now is on agricultural and horticultural projects. We have guided four women to register as horticultural contractors. They are now employing 65 women and men and had a total turnover of 65 lakh rupees.
              </p>
              <p className="bhashan">
                <center>
              <button className="btn btn-primary btn-sm"
                id="myBtn"
                style={{width:"auto"}}>
                <a href="http://ewok.iitmandi.ac.in/" target="_blank"
                style={{color:"white", fontFamily:"Poppins, sans-serif"}}>
                  Read More
                </a>
                </button>
                </center>
              </p>
            </div>
          </div>
          <br />
          <br />
          <h3 className="faculty-head" style={{"padding":"2%","textAlign":"center"}}>Catalyst</h3>
          <div className="row ihubrow">
            <div className="col-lg-3 col-md-4 ihubimg">
              <img src={catalyst} alt="" />
            </div>
            <div className="col-lg-9 col-md-8 backG">
              <p className="bhashan">
              Catalyst strives to incubate technology-based start-ups focused on economic and/or social impacts. As the name implies, it serves as a ‘catalyst’ to nurture and guide entrepreneurial initiatives with social and/or commercial objectives. <br />
We are funded by IIT Mandi, the Department of science and technology (DST), the Ministry of Electronics and Information Technology, the HP Centre for Entrepreneurship Development (HPCED), and Vishal Bharat Comnet, Chennai. <br /> Within just five years since its inception, Catalyst has emerged as one of the leading incubators in Himachal Pradesh and the Himalayan region. As one of the country’s most active incubators and through the visionary leadership provided by IIT Mandi, Catalyst has created a startup-friendly support system to ensure the ideas of tomorrow don’t die.
              </p>
              <p className="bhashan">
                <center>
              <button className="btn btn-primary btn-sm"
                id="myBtn"
                style={{width:"auto"}}>
                <a href="https://www.iitmandicatalyst.in/" target="_blank"
                style={{color:"white", fontFamily:"Poppins, sans-serif"}}>
                  Read More
                </a>
                </button>
                </center>
              </p>
            </div>
          </div>
          <br />
          <h3 className="faculty-head" style={{"padding":"2%","textAlign":"center"}}>Technology Innovation Hub on Human Computer Interaction</h3>
          <div className="row ihubrow">
            <div className="col-lg-3 col-md-4 ihubimg">
              <img src={ihub} alt="" />
            </div>
            <div className="col-lg-9 col-md-8 backG">
              <p className="bhashan">
                A Technology Innovation Hub (TIH) in human-computer interaction (IIT
                Mandi iHub and HCI Foundation or iHub) has been setup at the Indian
                Institute of Technology (IIT) Mandi under India's National Mission
                on Interdisciplinary Cyber-Physical Systems. The iHub is planned to
                make India a leader in human-computer interaction (HCI) research in
                the world. The iHub is a section-8 company that has been created
                with a funding of INR 110 crores through the Science and Engineering
                Research Board, Department of Science and Technology, Government of
                India. The primary activities of the iHub are research and
                technology development, skill development, incubation and
                acceleration of startups, and collaborations in HCI areas.
              </p>
              <p className="bhashan">
                <center>
              <button className="btn btn-primary btn-sm"
                id="myBtn"
                style={{width:"auto"}}>
                <a href="https://www.iitmandi.ac.in/TIH-HCI/" target="_blank"
                style={{color:"white", fontFamily:"Poppins, sans-serif"}}>
                  Read More
                </a>
                </button>
                </center>
              </p>
            </div>
          </div>

        </div>
      </div>
      <br />      
      <br />      
      <br />  
      <div className="acadmic">
        <div className="slot">
          <div>
            <hr className="left" />
            <h3 className="homeHead">Projects</h3>
            <hr className="right" />
          </div>
          <div className="homeSlider">
        <Slider id="car1" {...settings}>
          <div className="sliderItem">
            <div className="slidePallet">
              <h3>
            <a href="https://www.iitmandi.ac.in/research/sponsored_research.php">
            Sponsored Research Projects
            </a></h3>
            </div>
          </div>
          <div className="sliderItem">
            <div className="slidePallet">
            <h3>
            <a href="https://www.iitmandi.ac.in/research/consultancy.php">
            Consultancy Projects 
            </a> 
          </h3>
            </div>
          </div>
          <div className="sliderItem">
            <div className="slidePallet">
            <h3>
            
            <a href="https://www.iitmandi.ac.in/research/seed_grant.php">
            Seed Grant Projects 
            </a>
            
          </h3>
            </div>
          </div>
          <div className="sliderItem">
            <div className="slidePallet">
            <h3>
            <a href="https://www.iitmandi.ac.in/research/internal.php">
            Internal Projects
            </a>
          </h3>
            </div>
          </div>
        </Slider>
      </div>
        </div>
      </div>    
    </div>
  );
};

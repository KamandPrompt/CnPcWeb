import React from "react";
import { ResearchLab } from "./researchLab";
import { Centre } from "./centre";
import ihub from "../images/ihub.png";
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
    speed: 500,
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
      <ResearchLab />
      <Centre />
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
          <div className="sliderItem">
            <div className="slidePallet">
            <h3>
             
            <a href="http://ewok.iitmandi.ac.in/">EWOK (Enabling Women of Kamand)</a>
          </h3>
            </div>
          </div>
        </Slider>
      </div>
        </div>
      </div>
      <div className="acadmic">
        <div className="slot">
          {/* <h3 className="faculty-head">Technology Innovation HUB and HCL</h3> */}
          <div>
            <hr className="left-hcl" />
            <h3 className="homeHead homeHead-hcl">Technology Innovation HUB and HCL</h3>
            <hr className="right-hcl" />
          </div>
          <br />
          <br />
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
                {" "}
                <strong>To know more please</strong>{" "}
                <a href="https://www.iitmandi.ac.in/TIH-HCI/" target="_blank">
                  click here
                </a>
                .
              </p>
            </div>
          </div>

        </div>
      </div>
      <div className="acadmic">
        <div className="slot">
        <div>
            <hr className="left-lg" />
            <h3 className="homeHead homeHead-lg">Research News</h3>
            <hr className="right-lg" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            autem quaerat cumque, odit ea eos a excepturi quidem, quasi minima
            soluta minus possimus labore laudantium rem debitis consequatur
            libero consectetur?
          </p>
          <p>
            {" "}
            <strong>To know more please</strong>{" "}
            <a href="https://www.iitmandi.ac.in/TIH-HCI/" target="_blank">
              click here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

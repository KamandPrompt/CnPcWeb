import React, { useState } from "react";
import { Carousal } from "./carousal";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
// import styled from "styled-components";
import Item from "./Item";
import amazon from "../images/Company_Logos/amazon.png";
import adobe from "../images/Company_Logos/adobe.png";
import digilytic from "../images/Company_Logos/Digilytics.png";
import flipkart from "../images/Company_Logos/flipkart.png";
import google from "../images/Company_Logos/google.png";
import indeed from "../images/Company_Logos/indeed.png";
import microsoft from "../images/Company_Logos/microsoft.png";
import pharma from "../images/Company_Logos/PharmEasy.png";
import sprinklr from "../images/Company_Logos/sprinklr.jpg";
import siemens from "../images/Company_Logos/siemens.png";
import swiggy from "../images/Company_Logos/Swiggy.png";
import walmart from "../images/Company_Logos/Walmart.jpg";
import uber from "../images/Company_Logos/uber.png";
import texes from "../images/Company_Logos/texas.png";
import suzlon from "../images/Company_Logos/Suzlon_Energy.jpg";
import samsung from "../images/Company_Logos/samsung.png";
import raam_g from "../images/Company_Logos/Raam_Group.png";
import practical from "../images/Company_Logos/Practically.png";
import director from "../images/Dir.png";
import tushar_jain from "../images/tushu.jpg";

export const Home = (props) => {
  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "<em>Read more<em/>";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "<em>Read less<em/>";
      moreText.style.display = "inline";
    }
  }
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 6 },
  ];
  const items = [
    adobe,
    amazon,
    digilytic,
    flipkart,
    microsoft,
    google,
    samsung,
    siemens,
    sprinklr,
    suzlon,
    swiggy,
    indeed,
    pharma,
    walmart,
    uber,
    texes,
    raam_g,
    practical,
  ];
  return (
    <>
      <div>
        <div className="bannerhome">
          <div className="message container">
            <h2 className="cnp_heading">Career and placement cell IIT Mandi</h2>
            <p className="home_msg">
              Among The Elite Technology Institutes Of The Country, IT Mandi
              Embodies Technology, Research And Development In The Purest Form.
              Supported By The Nourishing, Picturesque Settings Of The Shivalik
              Mountain Range, IIT Mandi Boasts Of A Unique Hands-On Curriculum,
              Creme De La Creme Of Students Who Epitomise All Round Proficiency
              In Technical And Professional Matters. All The Placement
              Associated Activities Are Handled By The Career And Placement Cell
              (CP) Of The Institute. The CnP Consists Of Faculty Members,
              Placement Officers And Student Volunteers Working Round The Clock
              To Provide The Best Possible Services To The Visiting
              Organisations. 
              <br />
              <br />
              We Look Forward To A Mutually Beneficial Placement
              Session With Your Company.
            </p>
          </div>
        </div>
        {/* <div id="front" className="container item">
          <div className="leftItem">
            <h2 className="faculty-head">About Us</h2>
            <p className="bhashan backG" style={{ "textAlign": "justify" }}>Among the elite technology institutes of the country, IIT Mandi
              embodies technology, research and development in the purest form.
              Supported by the nourishing, picturesque settings of the Shivalik
              mountain range, IIT Mandi boasts of a unique hands-on curriculum,
              creme de la creme of students who epitomise all round proficiency in
              technical and professional matters. <br />
              All the Placement associated activities are handled by the Career and
              Placement Cell (CnP) of the institute. The CnP consists of Faculty
              Members, Placement Officers and student volunteers working round the
              clock to provide the best possible services to the visiting
              organisations. <br />
              We look forward to a mutually beneficial Placement Session with your
              company.</p>
          </div>
          <div className="rightItem">
            <div className="carous">
              <Carousal />
            </div>
          </div>
        </div> */}
        <br />
        <div className="light container cont">
          <hr className="left-light" />
          <h3 className="homeHead-light">Director's Address</h3>
          <hr className="right-light" />
        </div>
        <div className="container">
          <h3 className="faculty-head">From the Director</h3>
          <div className="about container-fluid row item">
            <p className="bhashan col-lg-8 col-md-8 col-sm-12 backG">
              " During a short span of ten years of its existence, Indian
              Institute of Technology Mandi (IIT Mandi) has gained a reputation
              for its cutting edge research and innovative teaching programs.
              The institute prides itself on creating an environment that
              empowers young minds by developing intellect, versatility,
              broadening horizons of creativity, and honing inter-personal
              skills. With an aim of shaping the students into responsible
              engineers and scientists, the innovative undergraduate curriculum
              at IIT Mandi strives to expose students to strong fundamentals of
              engineering, basic sciences, and humanities, while simultaneously
              sensitizing them about human values and surroundings.
              <span id="dots">...</span>"
              <span id="more">
                {" "}
                Similarly, the institute's focus on research at the fore-fronts
                of various areas of science and technology has resulted in
                significant contributions, and excellent and responsible
                researchers. The Career and Placement (CnP) cell invites
                organizations which have recruited our alumni and have witnessed
                them deliver well on high expectations placed on them, as well
                as those whom our students have not yet got an opportunity to
                serve. The CnP cell strives to facilitate the best possible
                match between the aspirations of recruiting organizations and
                the abilities of our students, and we welcome suggestions from
                your organization that will help us realize it. I can assure you
                of prodigious talent of our students and feel elated to invite
                your esteemed organizations to recruit our students. We look
                forward to enthusiastic participation of your organization in
                our forthcoming campus placement session and lasting and
                mutually satisfying relation with your organization.
              </span>
              <br />
              <br />
              <button
                className="btn btn-primary btn-sm"
                onClick={myFunction}
                id="myBtn1"
              >
                <em>
                  <b>Read More</b>
                </em>
              </button>
            </p>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img
                className="faculty-advisor"
                src={director}
                alt="Dr. Laxmidhar Behera"
              />
            </div>
          </div>
        </div>
        <div className="light container cont">
          <hr className="left-light" />
          <h3 className="homeHead-light">FA's Address</h3>
          <hr className="right-light" />
        </div>
        <div className="container">
          <h3 className="faculty-head">From the Faculty Advisor</h3>
          <div className="about container row item">
            {/* <div className="col-lg-4 col-md-6 col-sm-12">
                <img className="faculty-advisor" src="http://faculty.iitmandi.ac.in/~tushar/img/tj1.jpg" alt="Dr. Tushar Jain" />
            </div> */}
            {/* <div className="col-lg-8 col-md-6 col-sm-12"> */}
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img
                className="faculty-advisor"
                src={tushar_jain}
                alt="Dr. Laxmidhar Behera"
              />
            </div>
            <p className="bhashan col-lg-8 col-md-8 col-sm-12 backG">
             " During a short span of ten years of its existence, Indian
              Institute of Technology Mandi (IIT Mandi) has gained a reputation
              for its cutting edge research and innovative teaching programs.
              The institute prides itself on creating an environment that
              empowers young minds by developing intellect, versatility,
              broadening horizons of creativity, and honing inter-personal
              skills. With an aim of shaping the students into responsible
              engineers and scientists, the innovative undergraduate curriculum
              at IIT Mandi strives to expose students to strong fundamentals of
              engineering, basic sciences, and humanities, while simultaneously
              sensitizing them about human values and surroundings. 
              <span id="dots">...</span>"
              <span id="more">
                {" "}
                Similarly, the institute's focus on research at the fore-fronts
                of various areas of science and technology has resulted in
                significant contributions, and excellent and responsible
                researchers. The Career and Placement (CnP) cell invites
                organizations which have recruited our alumni and have witnessed
                them deliver well on high expectations placed on them, as well
                as those whom our students have not yet got an opportunity to
                serve. The CnP cell strives to facilitate the best possible
                match between the aspirations of recruiting organizations and
                the abilities of our students, and we welcome suggestions from
                your organization that will help us realize it. I can assure you
                of prodigious talent of our students and feel elated to invite
                your esteemed organizations to recruit our students. We look
                forward to enthusiastic participation of your organization in
                our forthcoming campus placement session and lasting and
                mutually satisfying relation with your organization.
              </span>
              <br />
              <br />
              <button
                className="btn btn-primary btn-sm"
                onClick={myFunction}
                id="myBtn"
              >
                <em>
                  <b>Read More</b>
                </em>
              </button>
            </p>
            <br />
          </div>
        </div>
      </div>
      <div>
        <hr className="left-lg" />
        <h3 className="homeHead homeHead-lg">Our Regular Recruiters</h3>
        <hr className="right-lg" />
      </div>
      <div className="car-logo">
        <div className="carousel-wrapper-logo">
          <Carousel enableAutoPlay={Infinity} breakPoints={breakPoints}>
            {items.map((item) => (
              <Item>
                <img
                  style={{ height: "100%", width: "90%" }}
                  src={item}
                  alt="adobe"
                />
              </Item>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

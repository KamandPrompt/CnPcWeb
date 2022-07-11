import React, { useState } from "react";
import { Carousal } from "./carousal";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
// import styled from "styled-components";
import Item from "./Item";
import amazon from "../images/Company_Logos/amazon.png";
import de_shaw from "../images/Company_Logos/de_shaw.png";
import nvidia from "../images/Company_Logos/Nvidia.png";
import amd from "../images/Company_Logos/AMD.png";
import bajaj from "../images/Company_Logos/Bajaj.png";
import lt from "../images/Company_Logos/lt.png";
import synopsis from "../images/Company_Logos/synopsis.png";
import accenture from "../images/Company_Logos/accenture.png";
import tcs from "../images/Company_Logos/tcs.png";
import kpmg from "../images/Company_Logos/kpmg.jpg";
import st from "../images/Company_Logos/st.png";
import deloitte from "../images/Company_Logos/deloitte.png";
// import adobe from "../images/Company_Logos/adobe.png";
// import digilytic from "../images/Company_Logos/Digilytics.png";
import flipkart from "../images/Company_Logos/flipkart.png";
import google from "../images/Company_Logos/google.png";
import indeed from "../images/Company_Logos/indeed.png";
import microsoft from "../images/Company_Logos/microsoft.png";
// import pharma from "../images/Company_Logos/PharmEasy.png";
import sprinklr from "../images/Company_Logos/sprinklr.jpg";
import siemens from "../images/Company_Logos/siemens.png";
// import swiggy from "../images/Company_Logos/Swiggy.png";
import walmart from "../images/Company_Logos/Walmart.jpg";
import uber from "../images/Company_Logos/uber.png";
import pentair from "../images/Company_Logos/pentair.jpg";
import texes from "../images/Company_Logos/texas.png";
// import suzlon from "../images/Company_Logos/Suzlon_Energy.jpg";
import samsung from "../images/Company_Logos/samsung.png";
// import raam_g from "../images/Company_Logos/Raam_Group.png";
// import practical from "../images/Company_Logos/Practically.png";
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
  function myFunction_dir() {
    var dots = document.getElementById("dots-dir");
    var moreText = document.getElementById("more-dir");
    var btnText = document.getElementById("myBtn1");

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
    accenture,
    amazon,
    de_shaw,
    deloitte,
    nvidia,
    amd,
    lt,
    bajaj,
    st,
    synopsis,
    kpmg,
    tcs,
    flipkart,
    microsoft,
    google,
    pentair,
    samsung,
    siemens,
    sprinklr,
    indeed,
    walmart,
    uber,
    texes,
  ];
  return (
    <>
      <div>
        <div className="bannerhome">
          <div className="message container">
            <h2 className="cnp_heading">Career and placement cell IIT Mandi</h2>
            <p className="home_msg">
              Among the elite technology institutes of the country, IIT Mandi
              embodies technology, research and development in the purest form.
              Supported by the nourishing, picturesque settings of the Shivalik
              Mountain Ranges, IIT Mandi boasts of a unique hands-on curriculum,
              creme de la creme of students who epitomise all round proficiency
              In technical and professional matters. All the placement
              associated activities are handled by The Career And Placement Cell
              (CnP) of the institute. The CnP consists of faculty members,
              placement officers and student volunteers working round the clock
              to provide the best possible services to the visiting
              organisations.
              <br />
              <br />
              We look forward to a mutually beneficial placement session with
              your company.
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
            <p className="bhashan2 col-lg-8 col-md-8 col-sm-12 backG">
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
              {/* <br />
              <br /> */}
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
            <p className="bhashan2 col-lg-8 col-md-8 col-sm-12 backG">
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
            </p>
            <br />
          </div>
        </div>
      </div>
      <div className="why-recruit container" id="why_recruit">
        <div className="intro-text">
          <h2 className="why_heading">Why IIT Mandi ?</h2>
          <p className="why_para">
            The Indian Institute of Technology Mandi is a premier technical
            institution. A uniquely innovative curriculum, a state-of-the-art
            infrastructure, and a brilliantly serene, clean and stimulating
            campus atmosphere made for an enriching and fulfilling experience
            for our students. Among the elite technology institutes of the
            country, IIT Mandi embodies technology, research and development in
            the purest form.
          </p>
        </div>
        <div className="main-cards row">
          {/* <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 card-why-recruit">
            <div>
            <i class="bi bi-mortarboard-fill"></i>
            <span>Research</span>
            </div>
          </div> */}
          <div class="col-lg-4 col-sm-6">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title why_heading">
                  {" "}
                  <i class="bi bi-search"></i> Research
                </h3>
                <p class="card-text">
                  Good research is the hallmark of any great technical
                  institution. The research facilities at IIT Mandi are among
                  the finest in the country and allow the community to pursue
                  scientific truths in the best possible manner, with every
                  nature of assistance available for them. Over the years,
                  students and faculty members have taken great strides in the
                  field of research and a culture of constant innovation and
                  research has developed in the campus.
                </p>
                {/* <a href="#" class="btn btn-primary btn-sm btn-why">Go somewhere</a> */}
                <a href="/research">
                <button
                className="btn btn-primary btn-sm"
                id="btn-why"
              >
                <em>
                  <b>Know More</b>
                </em>
              </button>
              </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title why_heading">
                  {" "}
                  <i class="bi bi-book"></i> Acadmics
                </h3>
                <p class="card-text">
                  When it comes to academics, the institute has a uniquely
                  liberal and hands-on curriculum that focuses on cultivating
                  well-rounded and confident graduates ready to enter and
                  contribute to the industry. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Corporis alias atque assumenda
                  vitae illo non, accusamus distinctio quod voluptate nulla.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore ut eos velit corporis distinctio.
                </p>
                {/* <a href="#" class="btn btn-primary btn-sm btn-why">Go somewhere</a> */}
                <a href="/acadmics">
                <button
                className="btn btn-primary btn-sm"
                id="btn-why"
              >
                <em>
                  <b>Know More</b>
                </em>
              </button>
              </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title why_heading">
                  {" "}
                  <i class="bi bi-file-person"></i> Student Activities
                </h3>
                <p class="card-text">
                  Campus life is not just about academics; it’s about providing
                  a holistic and colourful environment to an individual and
                  allowing them to freely pursue their hobbies and interests so
                  that they grow to become well-rounded and highly capable
                  professionals. As such, the campus culture at IIT Mandi is a
                  vibrant one, characterised by a wide range of dedicated clubs
                  in areas like sports, arts, culture, science and technology,
                  literature and so on.
                </p>
                {/* <a href="#" class="btn btn-primary btn-sm btn-why">Go somewhere</a> */}
                <a href="https://gymkhana.iitmandi.co.in/">
                <button
                className="btn btn-primary btn-sm"
                id="btn-why"
              >
                <em>
                  <b>Know More</b>
                </em>
              </button>
              </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-sm-6">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title why_heading">
                  {" "}
                  <i class="bi bi-award"></i> Student Achievement
                </h3>
                <p class="card-text">
                  Good research is the hallmark of any great technical
                  institution. The research facilities at IIT Mandi are among
                  the finest in the country and allow the community to pursue
                  scientific truths in the best possible manner, with every
                  nature of assistance available for them. Over the years,
                  students and faculty members have taken great strides in the
                  field of research and a culture of constant innovation and
                  research has developed in the campus.
                </p>
                {/* <a href="#" class="btn btn-primary btn-sm btn-why">Go somewhere</a> */}
                <a href="/achievement">
                <button
                className="btn btn-primary btn-sm"
                id="btn-why"
                >
                <em>
                  <b>Know More</b>
                </em>
              </button>
              </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-sm-6">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title why_heading">
                  {" "}
                  <i class="bi bi-mortarboard-fill"></i>Degree Programme
                </h3>
                <p class="card-text">
                  Good research is the hallmark of any great technical
                  institution. The research facilities at IIT Mandi are among
                  the finest in the country and allow the community to pursue
                  scientific truths in the best possible manner, with every
                  nature of assistance available for them. Over the years,
                  students and faculty members have taken great strides in the
                  field of research and a culture of constant innovation and
                  research has developed in the campus.
                </p>
                {/* <a href="#" class="btn btn-primary btn-sm btn-why">Go somewhere</a> */}
                <a href="https://iitmandi.ac.in/new/programs" target={"_blank"}>
                <button
                className="btn btn-primary btn-sm"
                id="btn-why"
                >
                <em>
                  <b>Know More</b>
                </em>
              </button>
              </a>
              </div>
            </div>
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

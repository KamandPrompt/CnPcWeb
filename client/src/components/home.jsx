import React, { useState } from "react";
import { Carousal } from "./carousal";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
// import styled from "styled-components";
import Item from "./Item";
import amazon from "../images/Company_Logos/amazon.png";
import de_shaw from "../images/Company_Logos/de_shaw.png";
import nvidia from "../images/Company_Logos/nvidia.jfif";
import amd from "../images/Company_Logos/AMD.png";
import bajaj from "../images/Company_Logos/Bajaj.png";
import lt from "../images/Company_Logos/lt.png";
import synopsis from "../images/Company_Logos/synopsis.png";
import accenture from "../images/Company_Logos/accenture.png";
import tcs from "../images/Company_Logos/tcs.jpg";
import kpmg from "../images/Company_Logos/kpmg.jpg";
import st from "../images/Company_Logos/st.png";
import deloitte from "../images/Company_Logos/deloitte.png";
import flipkart from "../images/Company_Logos/flipkart.png";
import google from "../images/Company_Logos/google.png";
import indeed from "../images/Company_Logos/indeed.png";
import microsoft from "../images/Company_Logos/microsoft.png";
import sprinklr from "../images/Company_Logos/sprinklr.jpg";
import siemens from "../images/Company_Logos/siemens.png";
import walmart from "../images/Company_Logos/Walmart.jpg";
import uber from "../images/Company_Logos/uber.png";
import pentair from "../images/Company_Logos/pentair.jfif";
import texes from "../images/Company_Logos/texas.png";
import samsung from "../images/Company_Logos/samsung.png";
import director from "../images/Dir.png";
import tushar_jain from "../images/tushu.png";

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
    google,
    microsoft,
    de_shaw,
    amazon,
    flipkart,
    tcs,
    sprinklr,
    indeed,
    walmart,
    uber,
    samsung,
    siemens,
    nvidia,
    accenture,
    deloitte,
    amd,
    lt,
    bajaj,
    st,
    synopsis,
    kpmg,
    pentair,
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
              All the Placement associated activities a'[;plokijhbgvc re handled by the Career and
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
              " I am pleased to welcome you to IIT Mandi, which is located on
              the 538-acre picturesque river valley in the Shivalik Range. Since
              its inception in 2010, IIT Mandi has consistently worked to
              nurture professionals with industry-ready skills. We achieve this
              by periodically revising the curriculum in consultation with
              academic and industry experts to keep it relevant to the
              fast-changing global human resource needs. Academic excellence is
              our greatest strength. Students are introduced to practical
              learning with innovative pedagogy very early into the training.
              This ensures that they are better prepared to succeed in ambitious
              corporate environments. We provide a learning environment to allow
              individuals to express their passion and apply their innate
              abilities to solve real-world problems.
              <br />
              In the first year, the B.Tech. students participate in the
              Foundations of Design Practicum: Robotics and Reverse Engineering
              course which introduces them to existing engineering systems with
              hands-on experience. Design Practicum introduced in the second
              year to our B.Tech. students enables them to get exposure to
              real-world engineering problem-solving with interdisciplinary
              collaborations. With a budget of Rs. 25,000, award-winning
              projects include an intelligent drip irrigation system, a 3D
              printer, an autonomous garbage collector, etc. Socio-Technical
              Practicum introduced during B.Tech. 3rd year provides exposure to
              the impact of new technologies on society, often doing fieldwork
              in villages and towns in the neighborhood. Typical projects
              include alleviating traffic congestion in Mandi town,
              mechanization in terraced farms in the Himalayas, and education
              and livelihood for village women. These interdisciplinary and
              group projects build up perseverance, leadership, connection with
              society, and the opportunity to apply their technical skills.
              <br />
              The M.Tech. and M.Sc. degree programs contain a substantial
              component of thesis work relying heavily on practical learning
              aspects for over two semesters. In this open-ended thesis,
              students learn to work independently and in great depth on a
              research problem. The thesis contains globally novel contributions
              to the discipline in some aspects. Thus, the Master’s graduates
              are well suited to take a lead role. The institute also encourages
              the student to explore collaboration and to work on projects
              guided by industry experts for their thesis. Research by our MS
              and Ph.D. students has achieved global recognition in
              international journals and conferences. <br />
              In addition, the diaspora of student-driven extracurricular
              activities creates a lively learning environment and provides
              leadership abilities and confidence in our students. All this is
              impossible without the support of our able faculty, who give a
              holistic learning experience with their excellent teaching and
              exposure to cutting-edge research and publication in the best
              international scholastic journals. We have a total faculty
              strength of 145 active in research and teaching in several areas
              of engineering, sciences, and the humanities. Faculty have
              received research grants totaling over Rs. 127 crores and the
              Institute has invested heavily in developing state-of-the-art lab
              infrastructure. Our faculty members are also involved in mentoring
              startups supported by our Technology business incubator, IIT Mandi
              Catalyst. The IIT Mandi Catalyst has to date disbursed about INR
              5.76 crores for prototyping and commercialization of diverse
              start-ups in clean energy, environment, health care, agriculture,
              enterprise management, biotech, education, manufacturing, and
              consumer internet. The fact that about 10% of the total start-ups
              have been founded by the IIT Mandi faculty, staff, and students
              underlines the innovative and entrepreneurial spirit of IIT Mandi
              once again. The IIT Mandi alumni have done extremely well, as
              evident from receiving the youngest scientist award in the Indian
              Science Congress, INYAS award, etc. Our current alumni strength is
              over 1081 B.Tech, 75 MS, 321 M.Tech, 297 MSc, 23 MA, and 173 Ph.D.
              graduates. Our alumni have excelled in different spheres of
              academia, industry, and central government administration, thanks
              to our innovative curriculum. Most of these alumni have been hired
              by top multinational companies, a few have chosen higher studies
              in leading universities and several of them are serving different
              administrative positions in the Govt. of India including IAS.
              <br />
              On behalf of the faculty and students of IIT Mandi, I invite you
              to participate in our placement process. I am confident that you
              will find it a rewarding experience!
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
              " During the short span of thirteen years of its existence, the
              Indian Institute of Technology Mandi (IIT Mandi) has gained a
              reputation for its cutting-edge research and innovative teaching
              programs focusing on up-to-date scientific knowledge and
              state-of-the-art technological know-how in their respective
              disciplines. The institute prides itself on creating an
              environment that empowers young minds by developing intellect, and
              versatility, broadening horizons of creativity and honing
              interpersonal skills with the help of our top-notch faculty and
              staff. With the aim of shaping the students into responsible
              engineers and scientists, the innovative curriculum at IIT Mandi
              strives to expose students to strong fundamentals of engineering,
              basic sciences, and humanities while simultaneously sensitizing
              them to human values and society. Similarly, the institute's focus
              on research at the fore-fronts of various areas of science and
              technology has resulted in significant contributions and
              responsible researchers. <br />
              Apart from the technological development of our students, they
              also participate/organize in a multitude of extra-curricular
              activities, which exposes them to and tests their skills in
              sports, culture, dramatics, and music and allows them to develop a
              healthy overall personality. This has brought several awards to
              the institute at national and international levels. The students
              also get first-hand experience in organizing and managing events
              through various leadership positions they take up during several
              annual events organized at IIT Mandi. <br />
              The Career and Placement Cell (CnPC) invites organizations that
              have recruited our alumni and have witnessed them deliver well on
              high expectations placed on them, as well as those whom our
              students have not yet got an opportunity to serve. The CnP cell
              strives to facilitate the best possible match between the
              aspirations of recruiting organizations and the abilities of our
              students. We welcome suggestions from your organization that will
              help us realize it. On behalf of the CnPC team at IIT Mandi, I
              assure you of the prodigious talent of our students and feel
              elated to invite your esteemed organizations to recruit our
              students. We look forward to the enthusiastic participation of
              your organization in our 2022-2023 campus placement process and a
              lasting and mutually satisfying relationship with your
              organization."
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
                  <button className="btn btn-primary btn-sm" id="btn-why">
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
                  <i class="bi bi-book"></i> Academics
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
                <a
                  href="https://iitmandi.ac.in/new/academic-structure"
                  target={"_blank"}
                >
                  <button className="btn btn-primary btn-sm" id="btn-why">
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
                  <i class="bi bi-file-person"></i> Alumni
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
                  <button className="btn btn-primary btn-sm" id="btn-why">
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
                  <button className="btn btn-primary btn-sm" id="btn-why">
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
                  <button className="btn btn-primary btn-sm" id="btn-why">
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

import React from "react";
export const Programmes = (props) => {
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
  function myFunction1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
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
  return (
    <div>
      <div className="acadmic">
        <div className="slot">
          <div>
            <hr className="left" />
            <h3 className="homeHead">Programmes</h3>
            <hr className="right" />
          </div>
          <div className="sec-heading">
            <div className="subHead">
              Under graduates
            </div>
            <div className="sub-content">
              Situated in the lap of Himalayas, IIT Mandi is one the finest
              technical institute for students to spend their undergraduate
              years. While broad academics and innovative curriculum is one
              strong focus of the institute, extra co circulars like sports,
              club activities and events, inter college competitions, fests are
              all given due importance. Owing to the enthusiastic student
              community, a lot of new ideas, projects, and events of different
              scales are executed every year. Overall, the undergraduate
              experience is one its kind and most cherished experience of
              students life.
              <span id="dots"></span>
              <span id="more">
                {" "}
                <br/>
                <br/><ul class="nospace listing" style={{align:"center"}}>
                  <li class="clear">
                    <b>Programs Offered by IIT Mandi under Bachelor of Technology</b></li>
                  <li style={{padding:'0px 20px'}}>Bachelor of Technology in Civil Engineering <a className="listlink" href="http://www.iitmandi.ac.in/academics/files/BTECH_CIVIL.pdf" target="_blank"> (<b>Details</b>)</a>
                  </li><li style={{padding:'0px 20px'}}>Bachelor of Technology in Computer Science and Engineering <a className="listlink" href="http://www.iitmandi.ac.in/academics/files/btech_cse.pdf" target="_blank"> (<b>Details</b>)</a></li>
                  <li style={{padding:'0px 20px'}}>Bachelor of Technology in Electrical Engineering <a className="listlink" href="http://www.iitmandi.ac.in/academics/files/btech_ee.pdf" target="_blank"> (<b>Details</b>)</a></li>
                  <li style={{padding:'0px 20px'}}>Bachelor of Technology in Mechanical Engineering <a className="listlink" href="http://www.iitmandi.ac.in/academics/files/btech_mech.pdf" target="_blank"> (<b>Details</b>)</a></li>
                  <li style={{padding:'0px 20px'}}>Bachelor of Technology in Data Science and Engineering<a className="listlink" href="http://www.iitmandi.ac.in/academics/files/B.TechinDataScience.pdf" target="_blank"> (<b>Details</b>)</a></li>
                  <li style={{padding:'0px 20px'}}>Bachelor of Technology in Engineering Physics<a className="listlink" href="http://www.iitmandi.ac.in/academics/files/B.TechEngg.Physics.pdf" target="_blank"> (<b>Details</b>)</a></li>
                  <li style={{padding:'0px 20px'}}>B.Tech.-M.Tech. Integrated Dual Degree in Bio-Engineering<a className="listlink" href="http://www.iitmandi.ac.in/academics/files/bioengg_dual_btech_mtech.pdf" target="_blank"> (<b>Details</b>)</a></li>
                </ul>
              </span>
              <button
                className="btn btn-primary btn-sm"
                onClick={myFunction}
                id="myBtn"
              >
                <em>Read More</em>
              </button>
            </div>
          </div>
          <div className="sec-heading">
            <div className="subHead">
              Post graduates
            </div>
            <div className="sub-content">
              With an extraordinary group of teachers and peers, IIT Mandi
              offers one of India’s finest PG programs. With a vast pool of
              resources including a gigantic library and its number of labs ,
              IIT Mandi has managed to create the perfect nest to design and
              build the next future.
              <span id="dots1"></span>
              <span id="more1">
                {" "}
                <br/>
                <br/><ul class="nospace listing" style={{align:"center"}}>
                  <li class="clear">
                    <b>IIT Mandi offers Programs under </b></li>
                  <li style={{padding:'0px 20px'}}>Master of Arts
                  </li><li style={{padding:'0px 20px'}}>Master of Science </li>
                  <li style={{padding:'0px 20px'}}>Master of Technology </li>
                  <li style={{padding:'0px 20px'}}>Master of Science (by Research) </li>
                  <li style={{padding:'0px 20px'}}>Doctor of Philosophy</li>
                  <li style={{padding:'0px 20px'}}>Integrated-Doctor of Philosophy</li>
                </ul>
              </span>
              <button
                className="btn btn-primary btn-sm"
                onClick={myFunction1}
                id="myBtn1"
              >
                <em>Read More</em>
              </button>
            </div>
          </div><br/><p className="programmelink">To know more please{" "}
              <a
                href="https://www.iitmandi.ac.in/academics/programs.php"
                target="_blank"
              >click here</a>.</p>
        </div>
        <br />
      </div>
      <br /><br /><br />
    </div>
  );
};

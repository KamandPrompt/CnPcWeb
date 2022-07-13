import React from "react";
import village from "../images/village.jpeg";
import manali from "../images/manali.jpg"
import parashar from "../images/parashar.jpg"
import "./kamand.css";
export const Kamand = () => {
  return (
    <div>
      <div className="banner1">
        <div className="banner__content">
          <div className="welcome">
            <div className="mountain"></div>
            <div className="kamand2">
              <h4 className="kamand1">Welcome to the Kamand Valley</h4>
            </div>
          </div>
          {/* div className="contain">
            <a
              className="ca3-scroll-down-link ca3-scroll-down-arrow"
              data-ca3_iconfont="ETmodules"
              data-ca3_icon=""
              href="#scroll"
            />
          </div>< */}
        </div>
      </div>
      <br />
      <div>
        <hr className="left" />
        <h3 className="homeHead">Guest House</h3>
        <hr className="right" />
      </div>
      <br />
      <div id="front" className="container-item">
        <div className="guestHouse1">
          {/* <h2 className="faculty-head">About Us</h2> */}
          <p className="guest" style={{ textAlign: "justify" , "margin":"30px", color:"white" }}>
          To facilitate the lodging & dining services for the guests arriving at IIT-Mandi campus, guest house services are provided in both the campuses. The main guest house is named after the great Indian scientist and Nobel laureate Sir. C. V. Raman and is situated in the North campus. In the South campus Manirang apartment (two accommodations) and a smaller semi-furnished guest house with three rooms (Uhl guest house) are available.
Apart from these two guest houses there are few sets of fully furnished apartments available in both the campuses to provide accommodation to eminent institute guests. Guest house remains a pleasant heaven for the Institute’s guests, whether from academia, guests from center/ state government administration, Institute alumni, or the parents/wards of students.
          </p>
        </div>
        <div className="guestHouse3">
          <img
            className="village"
            src={village}
            alt="village"
            height={270}
            width={500}
          />
        </div>
        {/*Carousel yaha add karna h */}
      </div>
      <br />
      <div>
        <hr className="left" />
        <h3 className="homeHead">Places to Visit</h3>
        <hr className="right" />
      </div>
      <div id="front" className="container-item2">
        <div className="places">
          {/* <h2 className="faculty-head">About Us</h2> */}
          <p className="guest" style={{ textAlign: "justify" , color: "#093660", padding:"2% 4%"}}>
          Indian Institute of Technology Mandi (IIT Mandi) is situated on the lap of nature over the lush green mountains covered with Pine trees and varieties of flora and fauna. River Uhl & tributary of river Beas flows along the South & North campus respectively. Nestled in the laps of the Himalayas, the state of Himachal Pradesh is blessed with some exquisite places to visit. Because of the innumerable hill stations and villages tucked away from the digital life, Himachal Pradesh is certainly a haven for an explorer. There are far too many incredible places for you to visit in the state which includes Shimla, Kullu, Manali, Kinnaur, Malana, Dharamshala, Solang Valley, Dalhousie and many more to explore.
          </p>
        </div>
          {/* <div className="toVisit"> */}
            <div className="places2">
            <div className="guestHouse2">
              <img
                className="village"
                src={parashar}
                alt="village"
              />
              <h3 style={{"color":"white", "borderRadius":"10px"}}>Parashar Lake</h3>
              <button style={{"color":"#07748B", "backgroundColor":"#58C1EE","width":"100px", "height":"40px", "borderRadius":"50px", "border":"none"}}><a href="https://en.wikipedia.org/wiki/Prashar_Lake" target={"_blank"} style={{"color":"#07748B"}}>Know More</a></button>
            </div>
            <div className="guestHouse2">
              <img
                className="village"
                src={manali}
                alt="village"
              />
              <h3 style={{"color":"white", "borderRadius":"10px"}}>Manali</h3>
              <button style={{"color":"#07748B", "backgroundColor":"#58C1EE", "width":"100px", "height":"40px", "borderRadius":"50px", "border":"none"}}><a href="https://en.wikipedia.org/wiki/Manali,_Himachal_Pradesh" target={"_blank"} style={{"color":"#07748B"}}>Know More</a></button>
            </div>
            </div>
        {/* </div> */}
      </div>
      <br />
    </div>
  );
};

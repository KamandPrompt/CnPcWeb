import React from "react";
import village from "../images/village.jpeg";
import manali from "../images/manali.jpg"
import parashar from "../images/parashar.jpg"
import "./kamand.css";
export const Kamand = () => {
  return (
    <div>
      <div className="banner">
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
          <p className="guest" style={{ textAlign: "justify" , "margin":"30px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vero
            commodi corrupti at? Mollitia, natus dicta! Quo quidem eligendi,
            corporis consectetur eos numquam id a, voluptate vitae, amet debitis
            sequi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            saepe, ullam suscipit aperiam, reiciendis aut voluptatum fuga
            voluptas repellendus enim perspiciatis quaerat a amet facere
            molestias quibusdam? Eum, saepe? Non amet necessitatibus, dolor ea
            placeat in assumenda maiores ut ducimus nemo beatae aut labore ipsa
            alias aliquid nostrum fugit, officiis maxime! Pariatur suscipit
            voluptas ipsa sit vero quae, illo est, ad animi corporis molestias
            magni expedita labore possimus necessitatibus sequi delectus dicta
            autem. Molestiae, ab tenetur perspiciatis sequi voluptates delectus
            soluta itaque iusto, quas mollitia iste voluptas reprehenderit
            debitis optio sint culpa maiores! Quisquam eos temporibus
            cupiditate? Officiis, esse maiores!
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
          <p className="guest" style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vero
            commodi corrupti at? Mollitia, natus dicta! Quo quidem eligendi,
            corporis consectetur eos numquam id a, voluptate vitae, amet debitis
            sequi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            saepe, ullam suscipit aperiam, reiciendis aut voluptatum fuga
            voluptas repellendus enim perspiciatis quaerat a amet facere
            molestias quibusdam? Eum, saepe? Non amet necessitatibus, dolor ea
            placeat in assumenda maiores ut ducimus nemo beatae aut labore ipsa
            alias aliquid nostrum fugit, officiis maxime! Pariatur suscipit
            voluptas ipsa sit vero quae, illo est, ad animi corporis molestias
            magni expedita labore possimus necessitatibus sequi delectus dicta
            autem. Molestiae, ab tenetur perspiciatis sequi voluptates delectus
            soluta itaque iusto, quas mollitia iste voluptas reprehenderit
            debitis optio sint culpa maiores! Quisquam eos temporibus
            cupiditate? Officiis, esse maiores!
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
              <h3 style={{"color":"white"}}>Parashar Lake</h3>
              <button style={{"color":"#07748B", "backgroundColor":"#58C1EE","width":"100px", "height":"40px", "borderRadius":"50px", "border":"none"}}><a href="https://en.wikipedia.org/wiki/Prashar_Lake" target={"_blank"} style={{"color":"#07748B"}}>Know More</a></button>
            </div>
            <div className="guestHouse2">
              <img
                className="village"
                src={manali}
                alt="village"
              />
              <h3 style={{"color":"white"}}>Manali</h3>
              <button style={{"color":"#07748B", "backgroundColor":"#58C1EE", "width":"100px", "height":"40px", "borderRadius":"50px", "border":"none"}}><a href="https://en.wikipedia.org/wiki/Manali,_Himachal_Pradesh" target={"_blank"} style={{"color":"#07748B"}}>Know More</a></button>
            </div>
            </div>
        {/* </div> */}
      </div>
      <br />
    </div>
  );
};

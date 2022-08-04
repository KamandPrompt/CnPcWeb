import React from "react";
import ravinder from "../images/ravinder.jpeg";
import "./Recpro.css";
import nimisha from "../images/nimisha.jpg";
import parmod from "../images/parmod.jpg";
import aryan from "../images/aryan.jpg";
import harnaman from "../images/harnaman.jpg";
import vineet from "../images/vineet.jpg";
import ayushV from "../images/ayushV.jpg";
import deepak from "../images/deepak.jpg";
import sagar from "../images/sagar.jpg";
import ayush from "../images/ayush.jpg";
import nivedita from "../images/nivedita.jpg";
import garima from "../images/garima.jpg";
import yatharth from "../images/yatarth.jpg";
import shobit from "../images/shobit.png";
import shikha from "../images/shikha.png";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Form } from "react-bootstrap";
export const Contact = (props) => {
  return (
    <div>
      <div class="content">
        {/* <div className="banner">
          <div className="banner__content">
            <div className="contain">
              <a
                className="ca3-scroll-down-link ca3-scroll-down-arrow"
                data-ca3_iconfont="ETmodules"
                data-ca3_icon=""
                href="#scroll"
              />
            </div>
          </div>
        </div> */}

        <div id="scroll"></div>
        <div className="heading nav-unhide">
          <h2 className="placement">The Placement Team</h2>
        </div>
        <div className="container-snip">
          <figure className="snip1559">
            <figcaption className="snip1560">
              <div className="profile-image">
                <img
                  src="http://faculty.iitmandi.ac.in/~tushar/img/tj1.jpg"
                  alt="tushar-jain"
                  className="image"
                />
                <h3 className="person">
                  Dr. Tushar Jain
                  {/* <br />
                  <b>Email-{" "}</b>
                  <a href="mailto: advisorcnp@iitmandi.ac.in">
                    advisorcnp@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: 01905267920">01905-267920</a> */}
                </h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Dr. Tushar Jain
                  <br />
                  Faculty Advisor
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: advisorcnp@iitmandi.ac.in">
                    advisorcnp@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: 01905267920">01905-267920</a>
                </p>
              </div>
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img
                  // src="	https://lh5.googleusercontent.com/XQNQdcBH_aYr8wZX6cXxiE73XRCaKPTXAsPZg5JbkkyI682WCQmKkUH7EjteWIB-Zbb4-R1BAIqC0IC02datWzmpvwtvJKSFZsLxl2NVOOV0oqnu=w1280"
                  src={garima}
                  alt="Dr.Garima-Agrawal"
                  className="image"
                />
                <h3 className="person">
                  Dr. Garima Agrawal
                  {/* <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: garima@iitmandi.ac.in">
                    garima@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: 01905267827">01905-267827</a> */}
                  </h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Dr. Garima Agrawal
                  <br />
                  Faculty Co-Advisor
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: garima@iitmandi.ac.in">
                    garima@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: 01905267827">01905-267827</a>
                </p>
              </div>
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={parmod} alt="Dr.Parmod-kumar" className="image" />
                <h3 className="person">
                  Dr. Parmod Kumar
                  {/* <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: parmod@iitmandi.ac.in">
                    pramod@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: 01905267264">01905-267264</a> */}
                </h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Dr. Parmod Kumar
                  <br />
                  Faculty Co-Advisor
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: parmod@iitmandi.ac.in">
                    pramod@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: 01905267264">01905-267264</a>
                </p>
              </div>
              <br />
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img
                  src="	http://iitmandi.ac.in/Schools/SBS/faculty/baskar.jpg"
                  alt="Dr.Bhaskar"
                  className="image"
                />
                <h3 className="person">
                  Dr. Baskar Bakthavachalu
                  {/* <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: baskar@iitmandi.ac.in">
                    baskar@iitmandi.ac.in
                  </a> */}
                  </h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Dr. Baskar Bakthavachalu
                  <br />
                  Faculty Co-Advisor
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: baskar@iitmandi.ac.in">
                    baskar@iitmandi.ac.in
                  </a>
                  <br />
                </p>
              </div>
            </figcaption>
          </figure>
          {/* <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img
                  src="http://iitmandi.ac.in/Schools/SCEE/faculty/rameshwar.jpg"
                  alt="Dr.Rameshwar Pratap"
                  className="image"
                />
                <h3 className="person">Dr. Rameshwar Pratap</h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Dr. Rameshwar Pratap
                  <br />
                  Faculty Co-Advisor
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: rameshwar@iitmandi.ac.in">
                    rameshwar@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: 01905267945">01905-267945</a>
                </p>
              </div>
            </figcaption>
          </figure> */}
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={nimisha} alt="Nimisha N B" className="image" />
                <h3 className="person">
                  Nimisha N B
                  {/* <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: nimisha@iitmandi.ac.in">
                    nimisha@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +917807625022">+91-7807625022</a> */}
                  </h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Nimisha N B
                  <br />
                  Placement Cell Executive
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: nimisha@iitmandi.ac.in">
                    nimisha@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +917807625022">+91-7807625022</a>
                </p>
              </div>
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={ravinder} alt="Mr.Ravinder" className="image" />
                <h3 className="person">
                  Mr. Ravinder Kumar
                  {/* <br />
                  <b>Phone</b>- <a href="tel: +919459366121">+91-9459366121</a> */}
                  </h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                  Ravinder Kumar
                  <br />
                  Office Assistant
                  <br />
                  <b>Phone</b>- <a href="tel: +919459366121">+91-9459366121</a>
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
        </div>
        <div className="heading nav-unhide">
          <h2 className="placement">The Student Coordinator's Team</h2>
        </div>
        <div className="container-snip">
          <figure className="snip1559">
            <figcaption className="snip1560">
              <div className="profile-image">
                <img src={vineet} className="image" />
                <h3 className="person">Vineet Ahuja</h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Vineet Ahuja
                  <br />
                  Overall Coordinator (B.Tech)
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: b19122@students.iitmandi.ac.in">
                  b19122@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +919911473244">+91-9911473244</a>
                </p>
              </div>
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={harnaman} alt="Harnaman Kaur" className="image" />
                <h3 className="person">Harnaman Kaur</h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Harnaman Kaur
                  <br />
                  Overall Coordinator (B.Tech)
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: b19085@students.iitmandi.ac.in">
                  b19085@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +919041590497">+91-9041590497</a>
                </p>
              </div>
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={nivedita} alt="Nivedita Pramod" className="image" />
                <h3 className="person">Nivedita Pramod</h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Nivedita Pramod
                  <br />
                  Overall Coordinator (B.Tech)
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: b19098@students.iitmandi.ac.in ">
                  b19098@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +917012016415">+91-7012016415</a>
                </p>
              </div>
              <br />
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={deepak} alt="Deepak Kumar Sah" className="image" />
                <h3 className="person">Deepak Kumar Sah</h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Deepak Kumar Sah
                  <br />
                  Overall Coordinator (PG)
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: t21260@students.iitmandi.ac.in">
                    t21260@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +919821764691">+91-9821764691</a>
                </p>
              </div>
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img
                  src={ayush}
                  alt="Ayush Dwivedi"
                  className="image"
                />
                <h3 className="person">Ayush Dwivedi</h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Ayush Dwivedi
                  <br />
                  Overall Coordinator (PG)
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: v21093@students.iitmandi.ac.in">
                  v21093@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +916388581883">+91-6388581883</a>
                </p>
              </div>
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={aryan} alt="Aryan" className="image" />
                <h3 className="person">Aryan Goyal</h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                  Aryan Goyal
                  <br />
                  CSE Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto:b19073@students.iitmandi.ac.in">
                  b19073@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +919718877971">+91-9718877971</a>
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={yatharth} alt="Yatharth Mogra" className="image" />
                <h3 className="person">Yatharth Mogra</h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                  Yatharth Mogra
                  <br />
                  DSE Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailtob19272@students.iitmandi.ac.in">
                  b19272@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +917568864147">+91-7568864147</a>
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={shobit} alt="Shobhit" className="image" />
                <h3 className="person">Shobhit Rajput</h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                  Shobhit Rajput
                  <br />
                  EE branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto:b19195@students.iitmandi.ac.in">
                  b19195@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +918126588271">+91-8126588271 </a>
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={ayushV} alt="Ayush Singh Vardhan" className="image" />
                <h3 className="person">Ayush Singh Vardhan</h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Ayush Singh Vardhan
                  <br />
                  ME Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto:b19241@students.iitmandi.ac.in">
                  b19241@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +919528553052 ">+91-9528553052</a>
                </p>
              </div>
            </figcaption>
          </figure>
          
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={shikha} alt="Shikha" className="image" />
                <h3 className="person">Shikha</h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                  Shikha
                  <br />
                  CE Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto:b19057@students.iitmandi.ac.in">
                    b19057@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +917668853539 ">+91-7668853539 </a>
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={sagar} alt="Sagar" className="image" />
                <h3 className="person">Sagar Mishra</h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                  Sagar Mishra
                  <br />
                  Bio Eng. Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto:b19016@students.iitmandi.ac.in">
                  b19016@students.iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +917352509910 ">+91-7352509910 </a>
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

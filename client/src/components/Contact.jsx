import React from "react";
import dummy from "../images/ravinder.png";
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
                <h3 className="person">Dr. Tushar Jain</h3>
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
                <h3 className="person">Dr. Garima Agrawal</h3>
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
                <h3 className="person">Dr. Parmod Kumar</h3>
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
                <h3 className="person">Dr. Baskar Bakthavachalu</h3>
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
                <h3 className="person">Nimisha N B</h3>
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
                <img src={dummy} alt="Mr.Ravinder" className="image" />
                <h3 className="person">Mr. Ravinder Kumar</h3>
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
                  Overall Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: b18168@iitmandi.ac.in">
                    b18168@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +918544786022">+91-8544786022</a>
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
                  Overall Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: b18159@iitmandi.ac.in">
                    b18159@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +917677911376">+91-7677911376</a>
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
                  CSE Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: b18062@iitmandi.ac.in">
                    b18062@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +919988154700">+91-9988154700</a>
                </p>
              </div>
              <br />
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
                  EE Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: b18147@iitmandi.ac.in">
                    b18147@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +919370552327">+91-9370552327</a>
                </p>
              </div>
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
                  ME, CE Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: b18008@iitmandi.ac.in">
                    b18008@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +916388792413">+91-6388792413</a>
                </p>
              </div>
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
                  DSE Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto: b18190@iitmandi.ac.in">
                    b18190@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +919877757063">+91-9877757063</a>
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
                  EP Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto:b18012@iitmandi.ac.in">
                    b18012@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +916377838426">+91-6377838426</a>
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
                  Bio Eng. Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto:b18187@iitmandi.ac.in">
                    b18187@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +919939549845">+91-9939549845</a>
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={shobit} alt="Shobhit" className="image" />
                <h3 className="person">Shobhit</h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                  Shobhit
                  <br />
                  Bio Eng. Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto:b18187@iitmandi.ac.in">
                    b18187@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +919939549845">+91-9939549845</a>
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={sagar} alt="Sagar" className="image" />
                <h3 className="person">Sagar</h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                  Sagar
                  <br />
                  Bio Eng. Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto:b18187@iitmandi.ac.in">
                    b18187@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +919939549845">+91-9939549845</a>
                </div>
              </div>
              <br />
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
                  Bio Eng. Branch Coordinator
                  <br />
                  <b>Email</b>-{" "}
                  <a href="mailto:b18187@iitmandi.ac.in">
                    b18187@iitmandi.ac.in
                  </a>
                  <br />
                  <b>Phone</b>- <a href="tel: +919939549845">+91-9939549845</a>
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

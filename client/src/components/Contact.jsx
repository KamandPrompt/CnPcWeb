import React from "react";
import dummy from "../images/ravinder.png";
import "./contact.css";
import nimisha from "../images/nimisha.jpg";
import parmod from "../images/parmod.jpg";
import kairav from "../images/kairav.jpeg";
import ankit from "../images/ankit.jpg";
import vidhi from "../images/vidhi.jpg";
import gupta from "../images/ankit-gupta.jpg";
import saksham from "../images/saksham.jpeg";
import pratik from "../images/pratik.jpg";
import sudhanshu from "../images/sudhanshu.jpg";
import bhumanyu from "../images/bhumanyu.jpg";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Form } from "react-bootstrap";
export const Contact = (props) => {
  return (
    <div>
      <div class="content">
      <div className="banner">
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
      </div>
      
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
                src="	http://iitmandi.ac.in/Schools/SBS/faculty/garima.jpg"
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
              <img src={parmod} alt="Dr.Pramod-kumar" className="image" />
              <h3 className="person">Dr. Pramod Kumar</h3>
            </div>
            <br />
            <div className="middle">
              <p className="text">
                Dr. Pramod Kumar
                <br />
                Faculty Co-Advisor
                <br />
                <b>Email</b>-{" "}
                <a href="mailto: pramod@iitmandi.ac.in">
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
        <figure className="snip1559">
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
        </figure>
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
              <img src={vidhi} className="image" />
              <h3 className="person">Vidhi Desai</h3>
            </div>
            <br />
            <div className="middle">
              <p className="text">
                Vidhi Desai
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
              <img src={ankit} alt="Ankit Karan" className="image" />
              <h3 className="person">Ankit Karan</h3>
            </div>
            <br />
            <div className="middle">
              <p className="text">
                Ankit Karan
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
              <img src={kairav} alt="Kairav Bansal" className="image" />
              <h3 className="person">Kairav Bansal</h3>
            </div>
            <br />
            <div className="middle">
              <p className="text">
                Kairav Bansal
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
              <img src={sudhanshu} alt="Sudhanshu Chauhan" className="image" />
              <h3 className="person">Sudhanshu Chauhan</h3>
            </div>
            <br />
            <div className="middle">
              <p className="text">
                Sudhanshu Chauhan
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
              <img src={gupta} alt="Ankit Gupta" className="image" />
              <h3 className="person">Ankit Gupta</h3>
            </div>
            <br />
            <div className="middle">
              <p className="text">
                Ankit Gupta
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
              <img src={saksham} alt="saksham" className="image" />
              <h3 className="person">Saksham Barara</h3>
            </div>
            <br />
            <div className="middle">
              <p className="text">
                Saksham Barara
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
              <img src={bhumanyu} alt="Bhumanyu" className="image" />
              <h3 className="person">Bhumanyu Goyal</h3>
            </div>
            <br />
            <div className="middle">
              <div className="text">
                Bhumanyu Goyal
                <br />
                EP Branch Coordinator
                <br />
                <b>Email</b>-{" "}
                <a href="mailto:b18012@iitmandi.ac.in">b18012@iitmandi.ac.in</a>
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
              <img src={pratik} alt="Pratik" className="image" />
              <h3 className="person">Pratik Kumar</h3>
            </div>
            <br />
            <div className="middle">
              <div className="text">
                Pratik Kumar
                <br />
                Bio Eng. Branch Coordinator
                <br />
                <b>Email</b>-{" "}
                <a href="mailto:b18187@iitmandi.ac.in">b18187@iitmandi.ac.in</a>
                <br />
                <b>Phone</b>- <a href="tel: +919939549845">+91-9939549845</a>
              </div>
            </div>
            <br />
          </figcaption>
        </figure>
      </div></div>
    </div>
  );
};

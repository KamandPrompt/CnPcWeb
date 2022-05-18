import React from "react";
import "./contact.css";
import presentation from "../images/presentation.png";
import check from "../images/checklist.png";
import mail from "../images/mail.png";
import gupta from "../images/ankit-gupta.jpg";
import saksham from "../images/saksham.jpeg";
import pratik from "../images/pratik.jpg";
import calendar from "../images/calendar.png";
import bhumanyu from "../images/bhumanyu.jpg";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
export const Recpro = () => {
  return (
    <>
    <h2 className="Recrui" style={{"textAlign":"center"}}>
      Recruitement Process
    </h2>
       <div className="container-snip">
          <figure className="snip1559">
            <figcaption className="snip1560">
              <div className="profile-image">
                <img src={mail} className="image" />
                <h3 className="person">Step 1</h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Career and Placement Cell of IIT Mandi (CnPC) sends formal invitation regarding Campus Placement to the companies.
                </p>
              </div>
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={check} alt="Ankit Karan" className="image" />
                <h3 className="person">Step 2</h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Companies can register on the Online Portal at "www.example.iitmandi.ac.in" by filling the Internship Notificatrion Form (INF)/ Job Notification Form (JNF).
                </p>
              </div>
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={presentation} alt="Kairav Bansal" className="image" />
                <h3 className="person">Step 3</h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Any Compnay, if interested in organizing a Pre-Placement Talk (PPT) can share their request along with relevant details.
                </p>
              </div>
              <br />
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img
                  src={calendar}
                  alt="Sudhanshu Chauhan"
                  className="image"
                />
                <h3 className="person">Step 4</h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  The Cnp Cell decides the final placement schedule of tests with companies after mutual discussion and consent.
                </p>
              </div>
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={gupta} alt="Ankit Gupta" className="image" />
                <h3 className="person">Step 5</h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  All the appropriate details regarding the companiesand opportunity offered is shared with students.
                </p>
              </div>
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={saksham} alt="saksham" className="image" />
                <h3 className="person">Step 6</h3>
              </div>
              <br />
              <div className="middle">
                <p className="text">
                  Interested students can apply for the recruitement process through the online portal and thereafter, their resumes are shared with the company.
                </p>
              </div>
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={bhumanyu} alt="Bhumanyu" className="image" />
                <h3 className="person">Step 7</h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                {/* <p className="text"> */}
                Recruiters can conduct any kind of test or shortlist on the basis of resume before moving forward with the interviews.
                {/* </p> */}
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
          <figure className="snip1559">
            <figcaption>
              <div className="profile-image">
                <img src={pratik} alt="Pratik" className="image" />
                <h3 className="person">Step 8</h3>
              </div>
              <br />
              <div className="middle">
                <div className="text">
                {/* <p className="text">  */}
                  The company can interview the shortlisted students and finally submit the list of the selected students.
                {/* </p> */}
                </div>
              </div>
              <br />
            </figcaption>
          </figure>
        </div>
    </>
  );
};

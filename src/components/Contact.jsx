import React from "react";
import dummy from "../images/ravinder.png"
import "./contact.css"
import nimisha from "../images/nimisha.jpg"
export const Contact = (props) => {
    return(
        <div>
            <div className="banner">
                <div className="banner__content">
                     <div className="contain">
                        <div className="banner__text">
                            <h1 className="banner_heading">
                                The Placement Cell
                            </h1>
                            <p>
                                The primary objective of this cell is to guide the students in various fields which they can opt as their Career and also tries its best to provide them with jobs in such fields irrespective of their background. The Career and Placement cell invites organizations which have recruited IIT Mandi's alumni and have witnessed them deliver well an high expectations placed on them, as well as those whom the students have not yet got an opportunity to serve. The CnP cell strives to facilitate the best possible match between the aspirations of recruiting organizations and the abilities of the students.
                             </p>
                        </div>
                        <a className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon="" href="#scroll" />
                    </div>
                </div>
            </div>
            <div id="scroll"></div>
                <div className="heading nav-unhide">
                    <h2>
                        The Placement Team
                    </h2>
                </div>
                <div className="container-snip">
                    <figure className="snip1559">
                        <div className="profile-image">
                            <img src="http://faculty.iitmandi.ac.in/~tushar/img/tj1.jpg" alt="tushar-jain" />
                        </div>
                        <figcaption>
                            <h3>
                                <strong>
                                    Dr. Tushar Jain
                                </strong>
                            </h3>
                            <br />
                            <p>
                                Faculty Advisor
                                <br />
                                <strong>
                                    Email
                                </strong> - <a href="mailto: advisorcnp@iitmandi.ac.in">advisorcnp@iitmandi.ac.in</a>
                                <br />
                                <strong>
                                    Phone
                                </strong> - 01905-267920
                            </p>
                        </figcaption>
                    </figure>
                    <figure className="snip1559">
                        <div className="profile-image">
                            <img src="	http://iitmandi.ac.in/Schools/SBS/faculty/garima.jpg" alt="Dr.Garima-Agrawal" />
                        </div>
                        <figcaption>
                            <h3>
                                Dr. Garima Agrawal
                            </h3>
                            <br />
                            <p>
                                Faculty Co-Advisor
                                <br />
                                <strong>
                                    Email
                                </strong> - <a href="mailto: garima@iitmandi.ac.in">garima@iitmandi.ac.in</a>
                                <br />
                                <strong>
                                    Phone
                                </strong> - 01905-267920
                            </p>
                        </figcaption>
                    </figure>
                    <figure className="snip1559">
                        <div className="profile-image">
                            <img
                            src="http://se.iitmandi.ac.in/faculty/upload/pics/parmod.jpg"
                            alt="Dr.Pramod-kumar"
                            />
                        </div>
                        <figcaption>
                            <h3>
                                Dr. Pramod Kumar
                            </h3>
                            <br />
                            <p>
                                Faculty Co-Advisor
                            <br />
                            <strong>
                                Email
                            </strong> - <a href="mailto: pramod@iitmandi.ac.in">pramod@iitmandi.ac.in</a>
                            <br />
                            <strong>
                                Phone
                            </strong> - 01905-267920
                            </p>
                            <br />
                        </figcaption>
                    </figure>
                    <figure className="snip1559">
                        <div className="profile-image">
                            <img
                            src="	http://iitmandi.ac.in/Schools/SBS/faculty/baskar.jpg"
                            alt="Dr.Bhaskar"
                            />
                        </div>
                        <figcaption>
                            <h3>
                                Dr. Bhaskar Bakthavachalu
                            </h3>
                            <br />
                            <p>
                                Faculty Co-Advisor
                            <br />
                            <strong>
                                Email
                            </strong> - <a href="mailto: baskar@iitmandi.ac.in">baskar@iitmandi.ac.in</a>
                            <br />
                            <strong>
                                Phone
                            </strong> - 01905-267920
                            </p>
                        </figcaption>
                    </figure>
                    <figure className="snip1559">
                        <div className="profile-image">
                            <img
                            src="http://iitmandi.ac.in/Schools/SCEE/faculty/rameshwar.jpg"
                            alt="Dr.Rameshwar Pratap"
                            />
                        </div>
                        <figcaption>
                            <h3>Dr. Rameshwar Pratap</h3>
                            <br />
                            <p>
                            Faculty Co-Advisor
                            <br />
                            <strong>Email</strong> - <a href="mailto: rameshwar@iitmandi.ac.in">rameshwar@iitmandi.ac.in</a>
                            <br />
                            <strong>Phone</strong> - 01905-267920
                            </p>
                        </figcaption>
                    </figure>
                    <figure className="snip1559">
                        <div className="profile-image">
                            <img
                            src={nimisha}
                            alt="Nimisha N B"
                            />
                        </div>
                        <figcaption>
                            <h3>Nimisha N B</h3>
                            <br />
                            <p>
                            Placement Cell Executive
                            <br />
                            <strong>Email</strong> - <a href="mailto: nimisha@iitmandi.ac.in">nimisha@iitmandi.ac.in</a>
                            <br />
                            <strong>Phone</strong> - 01905-267920
                            </p>
                        </figcaption>
                    </figure>
                    <figure className="snip1559">
                        <div className="profile-image">
                            <img
                            src={dummy}
                            alt="Mr.Ravinder"
                            />
                        </div>
                        <figcaption>
                        <h3>Mr. Ravinder Kumar</h3>
                        <br />
                        <p>
                        Office Assistant
                        <br />
                        <strong>Phone</strong> - 01905-267920
                        </p>
                        <br />
                        </figcaption>
                    </figure>
                </div>
                <br />
                <br />
                <table className="table-1" id="table-op">
                    <tbody>
                    <thead>
                        <tr>
                            <th colSpan='3'>Student Volunteers</th>
                        </tr>
                    </thead>
                        <tr>
                            <td>
                                <strong>Name</strong>
                            </td>
                            <td>
                                <strong>Contact Number</strong>
                            </td>
                            <td>
                            <strong>Email Id</strong>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan={3}>Computer Science and Engineering</th>
                        </tr>
                        <tr>
                            <td>
                                Kairav Bansal
                            </td>
                            <td>
                                9988154700
                            </td>
                            <td>
                                <a href="mailto:b18062@students.iitmandi.ac.in">b18062@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Bhumanyu Goyal
                            </td>
                            <td>
                                6677838426
                            </td>
                            <td>
                                <a href="mailto:b18012@students.iitmandi.ac.in">b18012@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Pratik Kumar
                            </td>
                            <td>
                                9939549845
                            </td>
                            <td>
                                <a href="mailto:b18187@students.iitmandi.ac.in">b18187@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Saksham Barara
                            </td>
                            <td>
                                9877757063
                            </td>
                            <td>
                                <a href="mailto:b18190@students.iitmandi.ac.in">b18190@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Anjali Chaudhary
                            </td>
                            <td>                               9347856084
                            </td>
                            <td>
                                <a href="mailto:b19067@students.iitmandi.ac.in">b19067@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Aryan Goel
                            </td>
                            <td>
                                9718877971
                            </td>
                            <td>
                                <a href="mailto:b19073@students.iitmandi.ac.in">b19073@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Depanshu Gupta
                            </td>
                            <td>
                                788174900
                            </td>
                            <td>
                                <a href="mailto:b19244@students.iitmandi.ac.in">b19244@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Harnaman Kaur
                            </td>
                            <td>
                                9041590497
                            </td>
                            <td>
                                <a href="mailto:b19085@students.iitmandi.ac.in">b19085@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Niveditha N
                            </td>
                            <td>
                                7012016415
                            </td>
                            <td>
                                <a href="mailto:b19098@students.iitmandi.ac.in">b19098@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Vineet Ahuja
                            </td>
                            <td>
                                9911473244
                            </td>
                            <td>
                                <a href="mailto:b19122@students.iitmandi.ac.in">b19122@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                        <th colSpan={3}>Electrical Engineering</th>
                        </tr>
                        <tr>
                            <td>
                                Sudhanshu Chauhan
                            </td>
                            <td>
                                9370552327
                            </td>
                            <td>
                                <a href="mailto:b18147@students.iitmandi.ac.in">b18147@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
        </div>
    );
};
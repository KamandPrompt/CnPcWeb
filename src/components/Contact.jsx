import React from "react";
import dummy from "../images/ravinder.png"
import "./contact.css"
import nimisha from "../images/nimisha.jpg"
import parmod from "../images/parmod.jpg"
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
export const Contact = (props) => {
    return(
        <div>
            <div className="banner">
                <div className="banner__content">
                     <div className="contain">
                        {/* <div className="banner__text">
                            <h1 className="banner_heading">
                                The Placement Cell
                            </h1>
                            <p>
                                The primary objective of this cell is to guide the students in various fields which they can opt as their Career and also tries its best to provide them with jobs in such fields irrespective of their background. The Career and Placement cell invites organizations which have recruited IIT Mandi's alumni and have witnessed them deliver well an high expectations placed on them, as well as those whom the students have not yet got an opportunity to serve. The CnP cell strives to facilitate the best possible match between the aspirations of recruiting organizations and the abilities of the students.
                             </p>
                        </div> */}
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
                            <img src="http://faculty.iitmandi.ac.in/~tushar/img/tj1.jpg" alt="tushar-jain" className="image"/>
                        </div>
                        <figcaption>
                            <h3>
                                <strong>
                                    Dr. Tushar Jain
                                </strong>
                            </h3>
                            <br />
                            <div className="middle">
                            <p className="text">
                            <strong> Dr. Tushar Jain</strong>
                            <br />
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
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="snip1559">
                        <div className="profile-image">
                            <img src="	http://iitmandi.ac.in/Schools/SBS/faculty/garima.jpg" alt="Dr.Garima-Agrawal" className="image"/>
                        </div>
                        <figcaption>
                            <h3>
                            <strong>
                                    Dr. Garima Agrawal
                                </strong>
                            </h3>
                            <br />
                            <div className="middle">
                            <p className="text">
                            <strong> Dr. Garima Agrawal</strong><br />
                                Faculty Co-Advisor
                                <br />
                                <strong>
                                    Email
                                </strong> - <a href="mailto: garima@iitmandi.ac.in">garima@iitmandi.ac.in</a>
                                <br />
                                <strong>
                                    Phone
                                </strong> - 01905-267827
                            </p>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="snip1559">
                        <div className="profile-image">
                            <img
                            src={parmod}
                            alt="Dr.Pramod-kumar"
                            className="image"/>
                        </div>
                        <figcaption>
                            <h3>
                            <strong>
                                    Dr. Pramod Kumar
                                </strong>
                            </h3>
                            <br />
                            <div className="middle">
                            <p className="text">
                            <strong> Dr. Pramod Kumar</strong><br />
                                Faculty Co-Advisor
                            <br />
                            <strong>
                                Email
                            </strong> - <a href="mailto: pramod@iitmandi.ac.in">pramod@iitmandi.ac.in</a>
                            <br />
                            <strong>
                                Phone
                            </strong> - 01905-267264
                            </p>
                            </div>
                            <br />
                        </figcaption>
                    </figure>
                    <figure className="snip1559">
                        <div className="profile-image">
                            <img
                            src="	http://iitmandi.ac.in/Schools/SBS/faculty/baskar.jpg"
                            alt="Dr.Bhaskar"
                            className="image" /> 
                        </div>
                        <figcaption>
                            <h3>
                            <strong>
                            Dr. Bhaskar Bakthavachalu
                            </strong>
                               
                            </h3>
                            <br />
                            <div className="middle">
                            <p className="text">
                            <strong> Dr. Bhaskar Bakthavachalu</strong><br />
                                Faculty Co-Advisor
                            <br />
                            <strong>
                                Email
                            </strong> - <a href="mailto: baskar@iitmandi.ac.in">baskar@iitmandi.ac.in</a>
                            <br />
                            {/* <strong>
                                Phone
                            </strong> - 01905-267920 */}
                            </p>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="snip1559">
                        <div className="profile-image">
                            <img
                            src="http://iitmandi.ac.in/Schools/SCEE/faculty/rameshwar.jpg"
                            alt="Dr.Rameshwar Pratap"
                            className="image" />
                        </div>
                        <figcaption>
                            <h3>
                            <strong>
                                 Dr. Rameshwar Pratap
                            </strong>
                            </h3>
                            <br />
                            <div className="middle">
                            <p className="text">
                            <strong> Dr. Rameshwar Pratap</strong><br />
                            Faculty Co-Advisor
                            <br />
                            <strong>Email</strong> - <a href="mailto: rameshwar@iitmandi.ac.in">rameshwar@iitmandi.ac.in</a>
                            <br />
                            <strong>Phone</strong> - 01905-267945
                            </p>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="snip1559">
                        <div className="profile-image">
                            <img
                            src={nimisha}
                            alt="Nimisha N B" className="image"
                            />
                        </div>
                        <figcaption>
                            <h3>
                                <strong>Nimisha N B</strong>
                                </h3>
                            <br />
                            <div className="middle">
                            <p className="text">
                            <strong>Nimisha N B</strong><br />
                            Placement Cell Executive
                            <br />
                            <strong>Email</strong> - <a href="mailto: nimisha@iitmandi.ac.in">nimisha@iitmandi.ac.in</a>
                            <br />
                            <strong>Phone</strong> - +91-7807625022
                            </p>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="snip1559">
                        <div className="profile-image">
                            <img
                            src={dummy}
                            alt="Mr.Ravinder" className="image"
                            />
                        </div>
                        <figcaption>
                        <h3>
                        <strong>
                            Mr. Ravinder Kumar
                        </strong>
                        </h3>
                        <br />
                        <div className="middle">
                        <div className="text">
                        <strong>Ravinder Kumar</strong>
                        <br />
                        Office Assistant
                        <br />
                        <strong>Phone</strong> - +91-9459366121
                        </div>
                        </div>
                        <br />
                        </figcaption>
                    </figure>
                </div>
        </div>
    );
};
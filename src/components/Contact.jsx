import React from "react";
import dummy from "../images/ravinder.png"
import "./contact.css"
import nimisha from "../images/nimisha.jpg"
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
                <p>
                    <center>
                        <span className="student">
                            <strong>
                                <h2>
                                Student Volunteers
                                </h2>
                            </strong>
                        </span>
                    </center>
                </p>
                <br />
                <br />
                <Table className="table-1" id="table-7">
                    <Tbody>
                    <Thead>
                    <Tr>
                        <Th>
                            Name
                        </Th>
                        <Th>
                            Contact
                        </Th>
                        <Th>
                            Email
                        </Th>
                    </Tr>
                    </Thead>
                        <Tr>
                            <Th colSpan={3}>Computer Science and Engineering</Th>
                        </Tr>
                        <Tr>
                            <Td>
                                Kairav Bansal
                            </Td>
                            <Td>
                                9988154700
                            </Td>
                            <Td>
                                <a href="mailto:b18062@students.iitmandi.ac.in">b18062@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Bhumanyu Goyal
                            </Td>
                            <Td>
                                6677838426
                            </Td>
                            <Td>
                                <a href="mailto:b18012@students.iitmandi.ac.in">b18012@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Pratik Kumar
                            </Td>
                            <Td>
                                9939549845
                            </Td>
                            <Td>
                                <a href="mailto:b18187@students.iitmandi.ac.in">b18187@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Saksham Barara
                            </Td>
                            <Td>
                                9877757063
                            </Td>
                            <Td>
                                <a href="mailto:b18190@students.iitmandi.ac.in">b18190@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Anjali Chaudhary
                            </Td>
                            <Td>
                                9347856084
                            </Td>
                            <Td>
                                <a href="mailto:b19067@students.iitmandi.ac.in">b19067@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Aryan Goel
                            </Td>
                            <Td>
                                9718877971
                            </Td>
                            <Td>
                                <a href="mailto:b19073@students.iitmandi.ac.in">b19073@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Depanshu Gupta
                            </Td>
                            <Td>
                                788174900
                            </Td>
                            <Td>
                                <a href="mailto:b19244@students.iitmandi.ac.in">b19244@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Harnaman Kaur
                            </Td>
                            <Td>
                                9041590497
                            </Td>
                            <Td>
                                <a href="mailto:b19085@students.iitmandi.ac.in">b19085@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Niveditha N
                            </Td>
                            <Td>
                                7012016415
                            </Td>
                            <Td>
                                <a href="mailto:b19098@students.iitmandi.ac.in">b19098@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Vineet Ahuja
                            </Td>
                            <Td>
                                9911473244
                            </Td>
                            <Td>
                                <a href="mailto:b19122@students.iitmandi.ac.in">b19122@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                        <Th colSpan={3}>Electrical Engineering</Th>
                        </Tr>
                        <Tr>
                            <Td>
                                Sudhanshu Chauhan
                            </Td>
                            <Td>
                                9370552327
                            </Td>
                            <Td>
                                <a href="mailto:b18147@students.iitmandi.ac.in">b18147@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Ankit Karan
                            </Td>
                            <Td>
                            7667911376
                            </Td>
                            <Td>
                                <a href="mailto:b18159@students.iitmandi.ac.in">b18159@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Vidhi Desai
                            </Td>
                            <Td>
                                8544786022
                            </Td>
                            <Td>
                                <a href="mailto:b18168@students.iitmandi.ac.in">b18168@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Naveen Maheshwari
                            </Td>
                            <Td>
                                8219846675
                            </Td>
                            <Td>
                                <a href="mailto:b19175@students.iitmandi.ac.in">b19175@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Nayan K
                            </Td>
                            <Td>
                            8905336393
                            </Td>
                            <Td>
                                <a href="mailto:b19176@students.iitmandi.ac.in">b19176@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Shobhit Rajput
                            </Td>
                            <Td>
                                8126588271
                            </Td>
                            <Td>
                                <a href="mailto:b19195@students.iitmandi.ac.in">b19195@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Priyanshu Singh
                            </Td>
                            <Td>
                                7394941405
                            </Td>
                            <Td>
                                <a href="mailto:b19190@students.iitmandi.ac.in">b19190@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                        <Th colSpan={3}>Mechanical Engineering</Th>
                        </Tr>
                        <Tr>
                            <Td>
                            Ankit Gupta
                            </Td>
                            <Td>
                            6388792413
                            </Td>
                            <Td>
                                <a href="mailto:b18008@students.iitmandi.ac.in">b18008@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                            Arjun Khanwalkar
                            </Td>
                            <Td>
                            9897047640
                            </Td>
                            <Td>
                                <a href="mailto:b19239@students.iitmandi.ac.in">b19239@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                            Ayush Singh Vardhan
                            </Td>
                            <Td>
                            9528553052
                            </Td>
                            <Td>
                                <a href="mailto:b19241@students.iitmandi.ac.in">b19241@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                            Sahas Goyal
                            </Td>
                            <Td>
                            8675150000
                            </Td>
                            <Td>
                                <a href="mailto:b19053@students.iitmandi.ac.in">b19053@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Th colSpan={3}>Civil Engineering</Th>
                        </Tr>
                        <Tr>
                            <Td>
                            Ankit Gupta
                            </Td>
                            <Td>
                            6388792413
                            </Td>
                            <Td>
                                <a href="mailto:b18008@students.iitmandi.ac.in">b18008@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                            Nisha
                            </Td>
                            <Td>
                            9694644470
                            </Td>
                            <Td>
                                <a href="mailto:b18020@students.iitmandi.ac.in">b18020@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                            Kunal kachawa
                            </Td>
                            <Td>
                            7668853539
                            </Td>
                            <Td>
                                <a href="mailto:b19057@students.iitmandi.ac.in">b19057@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                            Shikha
                            </Td>
                            <Td>
                            6388792413
                            </Td>
                            <Td>
                                <a href="mailto:b18008@students.iitmandi.ac.in">b18008@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Th colSpan={3}>Data Science and Engineering</Th>
                        </Tr>
                        <Tr>
                            <Td>
                            Saksham Barara
                            </Td>
                            <Td>
                            9877757063
                            </Td>
                            <Td>
                                <a href="mailto:b18190@students.iitmandi.ac.in">b18190@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                            Yash Verma
                            </Td>
                            <Td>
                            9818722716
                            </Td>
                            <Td>
                                <a href="mailto:b19144@students.iitmandi.ac.in">b19144@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                            Yatharth Mogra
                            </Td>
                            <Td>
                            7568864147
                            </Td>
                            <Td>
                                <a href="mailto:b19272@students.iitmandi.ac.in">b19272@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Th colSpan={3}>Engineering Physics</Th>
                        </Tr>
                        <Tr>
                            <Td>
                                Bhumanyu Goyal
                            </Td>
                            <Td>
                            6377838426
                            </Td>
                            <Td>
                                <a href="mailto:b18012@students.iitmandi.ac.in">b18012@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Jainan Tandel
                            </Td>
                            <Td>
                            9925233876
                            </Td>
                            <Td>
                                <a href="mailto:b19224@students.iitmandi.ac.in">b19224@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                            Nilaksh Pundir
                            </Td>
                            <Td>
                            6284989635
                            </Td>
                            <Td>
                                <a href="mailto:b19048@students.iitmandi.ac.in">b19048@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                            Yuvraj Misra
                            </Td>
                            <Td>
                            9779008042
                            </Td>
                            <Td>
                                <a href="mailto:b19225@students.iitmandi.ac.in">b19225@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Th colSpan={3}>Bio Engineering</Th>
                        </Tr>
                        <Tr>
                            <Td>
                            Pratik Kumar
                            </Td>
                            <Td>
                            9939549845
                            </Td>
                            <Td>
                                <a href="mailto:b18187@students.iitmandi.ac.in">b18187@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                            Chirag
                            </Td>
                            <Td>
                            9466644938
                            </Td>
                            <Td>
                                <a href="mailto:b19006@students.iitmandi.ac.in">b19006@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                            Sagar Mishra
                            </Td>
                            <Td>
                            7352509910
                            </Td>
                            <Td>
                                <a href="mailto:b19016@students.iitmandi.ac.in">b19016@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <br />
                        <br />

                        <Tr>
                            <Th colSpan={2}>PG Volunteers for the year 2021-2022</Th>
                        </Tr>
                        <Tr>
                            <Th colSpan={3}>M.Tech VLSI</Th>
                        </Tr>
                        <Tr>
                            <Td>
                                Nishanth Kumar V
                            </Td>
                            <Td>
                            9380043083
                            </Td>
                            <Td>
                                <a href="mailto:t20250@students.iitmandi.ac.in">t20250@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Th colSpan={3}>M.Tech CSP</Th>
                        </Tr>
                        <Tr>
                            <Td>
                                Vineet Kumar Mishra
                            </Td>
                            <Td>
                            9415846983
                            </Td>
                            <Td>
                            <a href="mailto:t20283@students.iitmandi.ac.in">t20283@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Th colSpan={3}>M.Tech PED</Th>
                        </Tr>
                        <Tr>
                            <Td>
                                Tuhin Mitra
                            </Td>
                            <Td>
                            9123051836
                            </Td>
                            <Td>
                            <a href="mailto:t20201@students.iitmandi.ac.in">t20201@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                            Soumya Ranjan Nayak
                            </Td>
                            <Td>
                            9658321451
                            </Td>
                            <Td>
                            <a href="mailto:t20211@students.iitmandi.ac.in">t20211@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Th colSpan={3}>M.Tech MES</Th>
                        </Tr>
                        <Tr>
                            <Td>
                            Mridul Agarwal
                            </Td>
                            <Td>
                            9773660334
                            </Td>
                            <Td>
                            <a href="mailto:t20084@students.iitmandi.ac.in">t20084@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Th colSpan={3}>M.Tech EEM</Th>
                        </Tr>
                        <Tr>
                            <Td>
                            Sairaj Salunke
                            </Td>
                            <Td>
                            8369094781
                            </Td>
                            <Td>
                            <a href="mailto:t20043@students.iitmandi.ac.in">t20043@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Th colSpan={3}>M.Tech STE</Th>
                        </Tr>
                        <Tr>
                            <Td>
                            Ammar Ahmed
                            </Td>
                            <Td>
                            7467853847
                            </Td>
                            <Td>
                            <a href="mailto:t20012@students.iitmandi.ac.in">t20012@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Th colSpan={3}>M.Tech Biotech</Th>
                        </Tr>
                        <Tr>
                            <Td>
                            Ujjawal
                            </Td>
                            <Td>
                            8435177995
                            </Td>
                            <Td>
                            <a href="mailto:t20411@students.iitmandi.ac.in">t20411@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Th colSpan={3}>MSc. Chemistry</Th>
                        </Tr>
                        <Tr>
                            <Td>
                            Samiksha
                            </Td>
                            <Td>
                            8708456060
                            </Td>
                            <Td>
                            <a href="mailto:v20011@students.iitmandi.ac.in">v20011@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                            Aman
                            </Td>
                            <Td>
                            9255551231
                            </Td>
                            <Td>
                            <a href="mailto:v20040@students.iitmandi.ac.in">v20040@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Th colSpan={3}>MSc. Applied Maths</Th>
                        </Tr>
                        <Tr>
                            <Td>
                            Hement Kumar
                            </Td>
                            <Td>
                            7056582951
                            </Td>
                            <Td>
                            <a href="mailto:v20063@students.iitmandi.ac.in">v20063@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                            Naman Karol
                            </Td>
                            <Td>
                            9358104468
                            </Td>
                            <Td>
                            <a href="mailto:v20043@students.iitmandi.ac.in">v20043@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Th colSpan={3}>MSc. Physics</Th>
                        </Tr>
                        <Tr>
                            <Td>
                            Arun Pandiyan
                            </Td>
                            <Td>
                            9168180550
                            </Td>
                            <Td>
                            <a href="mailto:v20098@students.iitmandi.ac.in">v20098@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Th colSpan={3}>MA Development Studies</Th>
                        </Tr>
                        <Tr>
                            <Td>
                                Jasmeet Singh
                            </Td>
                            <Td>
                            7070360676
                            </Td>
                            <Td>
                            <a href="mailto:a20010@students.iitmandi.ac.in">a20010@students.iitmandi.ac.in</a>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
        </div>
    );
};
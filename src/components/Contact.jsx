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
                <table className="table-1" id="table-7">
                    <tbody>
                    {/* <thead className="student">
                        <tr>
                            <th colSpan='3'>Student Volunteers</th>
                        </tr>
                    </thead> */}
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
                        <tr>
                            <td>
                                Ankit Karan
                            </td>
                            <td>
                            7667911376
                            </td>
                            <td>
                                <a href="mailto:b18159@students.iitmandi.ac.in">b18159@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Vidhi Desai
                            </td>
                            <td>
                                8544786022
                            </td>
                            <td>
                                <a href="mailto:b18168@students.iitmandi.ac.in">b18168@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Naveen Maheshwari
                            </td>
                            <td>
                                8219846675
                            </td>
                            <td>
                                <a href="mailto:b19175@students.iitmandi.ac.in">b19175@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nayan K
                            </td>
                            <td>
                            8905336393
                            </td>
                            <td>
                                <a href="mailto:b19176@students.iitmandi.ac.in">b19176@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Shobhit Rajput
                            </td>
                            <td>
                                8126588271
                            </td>
                            <td>
                                <a href="mailto:b19195@students.iitmandi.ac.in">b19195@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Priyanshu Singh
                            </td>
                            <td>
                                7394941405
                            </td>
                            <td>
                                <a href="mailto:b19190@students.iitmandi.ac.in">b19190@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                        <th colSpan={3}>Mechanical Engineering</th>
                        </tr>
                        <tr>
                            <td>
                            Ankit Gupta
                            </td>
                            <td>
                            6388792413
                            </td>
                            <td>
                                <a href="mailto:b18008@students.iitmandi.ac.in">b18008@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Arjun Khanwalkar
                            </td>
                            <td>
                            9897047640
                            </td>
                            <td>
                                <a href="mailto:b19239@students.iitmandi.ac.in">b19239@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Ayush Singh Vardhan
                            </td>
                            <td>
                            9528553052
                            </td>
                            <td>
                                <a href="mailto:b19241@students.iitmandi.ac.in">b19241@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Sahas Goyal
                            </td>
                            <td>
                            8675150000
                            </td>
                            <td>
                                <a href="mailto:b19053@students.iitmandi.ac.in">b19053@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan={3}>Civil Engineering</th>
                        </tr>
                        <tr>
                            <td>
                            Ankit Gupta
                            </td>
                            <td>
                            6388792413
                            </td>
                            <td>
                                <a href="mailto:b18008@students.iitmandi.ac.in">b18008@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Nisha
                            </td>
                            <td>
                            9694644470
                            </td>
                            <td>
                                <a href="mailto:b18020@students.iitmandi.ac.in">b18020@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Kunal kachawa
                            </td>
                            <td>
                            7668853539
                            </td>
                            <td>
                                <a href="mailto:b19057@students.iitmandi.ac.in">b19057@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Shikha
                            </td>
                            <td>
                            6388792413
                            </td>
                            <td>
                                <a href="mailto:b18008@students.iitmandi.ac.in">b18008@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan={3}>Data Science and Engineering</th>
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
                            Yash Verma
                            </td>
                            <td>
                            9818722716
                            </td>
                            <td>
                                <a href="mailto:b19144@students.iitmandi.ac.in">b19144@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Yatharth Mogra
                            </td>
                            <td>
                            7568864147
                            </td>
                            <td>
                                <a href="mailto:b19272@students.iitmandi.ac.in">b19272@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan={3}>Engineering Physics</th>
                        </tr>
                        <tr>
                            <td>
                                Bhumanyu Goyal
                            </td>
                            <td>
                            6377838426
                            </td>
                            <td>
                                <a href="mailto:b18012@students.iitmandi.ac.in">b18012@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Jainan Tandel
                            </td>
                            <td>
                            9925233876
                            </td>
                            <td>
                                <a href="mailto:b19224@students.iitmandi.ac.in">b19224@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Nilaksh Pundir
                            </td>
                            <td>
                            6284989635
                            </td>
                            <td>
                                <a href="mailto:b19048@students.iitmandi.ac.in">b19048@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Yuvraj Misra
                            </td>
                            <td>
                            9779008042
                            </td>
                            <td>
                                <a href="mailto:b19225@students.iitmandi.ac.in">b19225@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan={3}>Bio Engineering</th>
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
                            Chirag
                            </td>
                            <td>
                            9466644938
                            </td>
                            <td>
                                <a href="mailto:b19006@students.iitmandi.ac.in">b19006@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Sagar Mishra
                            </td>
                            <td>
                            7352509910
                            </td>
                            <td>
                                <a href="mailto:b19016@students.iitmandi.ac.in">b19016@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <br />
                        <br />

                        <tr>
                            <th colSpan={2}>PG Volunteers for the year 2021-2022</th>
                        </tr>
                        <tr>
                            <th colSpan={3}>M.Tech VLSI</th>
                        </tr>
                        <tr>
                            <td>
                                Nishanth Kumar V
                            </td>
                            <td>
                            9380043083
                            </td>
                            <td>
                                <a href="mailto:t20250@students.iitmandi.ac.in">t20250@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan={3}>M.Tech CSP</th>
                        </tr>
                        <tr>
                            <td>
                                Vineet Kumar Mishra
                            </td>
                            <td>
                            9415846983
                            </td>
                            <td>
                            <a href="mailto:t20283@students.iitmandi.ac.in">t20283@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan={3}>M.Tech PED</th>
                        </tr>
                        <tr>
                            <td>
                                Tuhin Mitra
                            </td>
                            <td>
                            9123051836
                            </td>
                            <td>
                            <a href="mailto:t20201@students.iitmandi.ac.in">t20201@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Soumya Ranjan Nayak
                            </td>
                            <td>
                            9658321451
                            </td>
                            <td>
                            <a href="mailto:t20211@students.iitmandi.ac.in">t20211@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan={3}>M.Tech MES</th>
                        </tr>
                        <tr>
                            <td>
                            Mridul Agarwal
                            </td>
                            <td>
                            9773660334
                            </td>
                            <td>
                            <a href="mailto:t20084@students.iitmandi.ac.in">t20084@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan={3}>M.Tech EEM</th>
                        </tr>
                        <tr>
                            <td>
                            Sairaj Salunke
                            </td>
                            <td>
                            8369094781
                            </td>
                            <td>
                            <a href="mailto:t20043@students.iitmandi.ac.in">t20043@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan={3}>M.Tech STE</th>
                        </tr>
                        <tr>
                            <td>
                            Ammar Ahmed
                            </td>
                            <td>
                            7467853847
                            </td>
                            <td>
                            <a href="mailto:t20012@students.iitmandi.ac.in">t20012@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan={3}>M.Tech Biotech</th>
                        </tr>
                        <tr>
                            <td>
                            Ujjawal
                            </td>
                            <td>
                            8435177995
                            </td>
                            <td>
                            <a href="mailto:t20411@students.iitmandi.ac.in">t20411@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan={3}>MSc. Chemistry</th>
                        </tr>
                        <tr>
                            <td>
                            Samiksha
                            </td>
                            <td>
                            8708456060
                            </td>
                            <td>
                            <a href="mailto:v20011@students.iitmandi.ac.in">v20011@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Aman
                            </td>
                            <td>
                            9255551231
                            </td>
                            <td>
                            <a href="mailto:v20040@students.iitmandi.ac.in">v20040@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan={3}>MSc. Applied Maths</th>
                        </tr>
                        <tr>
                            <td>
                            Hement Kumar
                            </td>
                            <td>
                            7056582951
                            </td>
                            <td>
                            <a href="mailto:v20063@students.iitmandi.ac.in">v20063@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Naman Karol
                            </td>
                            <td>
                            9358104468
                            </td>
                            <td>
                            <a href="mailto:v20043@students.iitmandi.ac.in">v20043@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan={3}>MSc. Physics</th>
                        </tr>
                        <tr>
                            <td>
                            Arun Pandiyan
                            </td>
                            <td>
                            9168180550
                            </td>
                            <td>
                            <a href="mailto:v20098@students.iitmandi.ac.in">v20098@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan={3}>MA Development Studies</th>
                        </tr>
                        <tr>
                            <td>
                                Jasmeet Singh
                            </td>
                            <td>
                            7070360676
                            </td>
                            <td>
                            <a href="mailto:a20010@students.iitmandi.ac.in">a20010@students.iitmandi.ac.in</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
        </div>
    );
};
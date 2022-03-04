import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./achievement.css";

export const Achievement = () => {
  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "0px",
  //   slidesToShow: 3,
  //   speed: 500,
  //   responsive: [
  //     {
  //       breakpoint: 991,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <>
      <div className="bann">
        <div>
          <h1 className="bannCont">Achievements</h1>
        </div>
      </div>
      <h2 style={{ textAlign: "center" }}>Latest Achievements</h2>
      <div id='frame'>
        <a className="note sticky1">
        <div className='pin1'></div>
            <div className='text2'><h4>IIT Mandi graduate secures 3rd rank in UPPSC exam</h4>
              <p>IIT Mandi graduate Mr. Mohit Rawat, B.Tech (2015) from Palwal Haryana, secures 3rd rank in UPPSC exam.</p></div>
        </a>
        <a className="note sticky2">
            <div className='pin'></div>
            <div className='text2'><h4>Two IIT Mandi MA students ranked in GATE</h4>
              <p>Shashank Shekhar (A18006) and Piyush Kumar (A18012) of Master of
                Arts (MA) in Development Studies in the School of Humanities and
                Social Sciences, Indian Institute of Technology (IIT) Mandi
                ranked #162 and #400, respectively, in the GATE 2021.</p></div>
        </a>
        <a className="note sticky0">
            <div className='pin'></div>
            <div className='text2'><h4>IIT Mandi graduate placed at University of Texas</h4>
              <p>Dr. Palvi Aggarwal, a 2018 Ph.D. graduate has received an offer to a fulltime tenure track
                Assistant Professor position in the Department of Computer
                Science at the University of Texas at El Paso, USA.</p></div>
        </a>
        <a className="note sticky3">
            <center><div className='pin2'></div></center>
            <div className='text2'><h4>
                IEEE Electron Devices Society Masters Student Fellowship 2021
              </h4><p>Mr. Arpit Nandi (S19017), pursuing MS with Dr. Ankush Bag,
                Assistant Professor has received IEEE Electron Devices Society
                Masters Student Fellowship 2021. It the most prestigious global
                recognition in Electron Devices research area at Master level.</p></div>
        </a>
        <a className="note sticky2">
            <div className='pin'></div>
            <div className='text2'><h4>
                IIT Mandi Alumni secured 2nd AIR in Combined Defence Services
                Examination 2020
              </h4><p>Indian Institute of Technology Mandi Alumni, Ms. Neha Grewal
                (Graduated in the year 2018), has secured All India rank 2 in
                the prestigious Combined Defence Services Examination (CDSE)
                declared this year.</p></div>
        </a>
        <a className="note sticky3">
            <div className='pin2'></div>
            <div className='text2'><h4>IIT Mandi Alumni Clear Civil Services Examination</h4>
            <p>Indian Institute of Technology Mandi Alumni, Mr. Mohit Rawat
                (2015 Batch), have secured 462nd Rank in the final results of
                the prestigious Civil Services Examination (CSE) declared this
                year. Mr. Mohit Rawat, a resident of Haryana, completed his
                B.Tech in Computer Science and Engineering from IIT Mandi in
                2015.</p></div>
        </a>
        <a className="note sticky1">
            <div className='pin1'></div>
            <div className='text2'><h4>IIT Mandi Alumni Clear Civil Services Examination</h4>
              <p>
                Indian Institute of Technology Mandi Alumni, Mr. Lalitesh K.
                Meena (2015 Batch), have secured 655th Rank in the final results
                of the prestigious Civil Services Examination (CSE) declared
                this year. Mr. Lalitesh K. Meena, a resident of Rajasthan,
                completed his B.Tech in Electrical Engineering from IIT Mandi in
                2015.
              </p></div>
        </a>
        <a className="note sticky0">
            <div className='pin'></div>
            <div className='text2'><h4>Google Summer of Code(GSoC 2021)</h4>
              <p>12 selections in organisations -
                <ul>
                  <li>1) Zulip</li>
                  <li>2) THE LINUX FOUNDATION</li>
                  <li>3) MlPack</li>
                  <li>4) Sympy</li>
                  <li>5) Kodi</li>
                  <li>6) Sugarlabs</li>
                </ul>
              </p></div>
        </a>
    </div>
      {/* <div className="homeSlider">
        <Slider {...settings}>
          <div className="sliderItem">
            <div className="slidePallet">
              <h4>IIT Mandi graduate secures 3rd rank in UPPSC exam</h4>
              <br />
              <p>
                Mr. Mohit Rawat, B.Tech (2015) from Palwal Haryana, secured the
                3rd rank in the UPPSC exam in 2020. He is perhaps the only
                candidate from Haryana who has secured a place in the top 10
                list of the exam conducted in 2020. He said it was his second
                attempt in the UPPSC and that he also cleared the preliminary
                and the mains exam of the UPSC 2020 and is due to appear in the
                final interview on May 28 this year.
              </p>
              <p>
                IIT Mandi is proud of Mohit's achievements and wishes him many
                more successes in the future.
              </p>
            </div>
          </div>
          <div className="sliderItem">
            <div className="slidePallet">
              <h4>Two IIT Mandi MA students ranked in GATE</h4>
              <br />
              <p>
                Shashank Shekhar (A18006) and Piyush Kumar (A18012) of Master of
                Arts (MA) in Development Studies in the School of Humanities and
                Social Sciences, Indian Institute of Technology (IIT) Mandi
                ranked #162 and #400, respectively, in the GATE 2021.
              </p>
              <p>
                This year is the first time the GATE is conducted for Humanities
                and Social Science disciplines in India. Both the students had
                joined IIT Mandi in MA Development Studies in 2018 and graduated
                in 2020.
              </p>
            </div>
          </div>
          <div className="sliderItem">
            <div className="slidePallet">
              <h4>IIT Mandi graduate placed at University of Texas</h4>
              <br />
              <p>
                Dr. Palvi Aggarwal, a 2018 Ph.D. graduate, guided by Dr. Varun
                Dutt, Associate Professor, Indian Institute of Technology (IIT)
                Mandi, has received an offer to a full­time tenure track
                Assistant Professor position in the Department of Computer
                Science at the University of Texas at El Paso, USA
              </p>
              <p>
                Dr. Aggarwal finished her Ph.D. at the School of Computing and
                Electrical Engineering, IIT Mandi, in December 2018. After
                completing her Ph.D. degree from IIT Mandi, Dr. Aggarwal took a
                postdoc position at Carnegie Mellon University, USA
              </p>
              <p>
                IIT Mandi congratulates Dr. Palvi Aggarwal for her achievement
                and wishes her many more successes in the future
              </p>
            </div>
          </div>
          <div className="sliderItem">
            <div className="slidePallet">
              <h4>
                IEEE Electron Devices Society Masters Student Fellowship 2021
              </h4>
              <br />
              <p>
                Mr. Arpit Nandi (S19017), pursuing MS with Dr. Ankush Bag,
                Assistant Professor has received IEEE Electron Devices Society
                Masters Student Fellowship 2021. It the most prestigious global
                recognition in Electron Devices research area at Master level.
                The Fellowship Program was established to promote, recognize,
                and support Masters level study and research within the Electron
                Devices Society's field of interest.
              </p>
              <p>
                Congratulation to Mr. Arpit for his achievement on being
                selected for this prestigious award.{" "}
              </p>
            </div>
          </div>
          <div className="sliderItem">
            <div className="slidePallet">
              <h4>
                IIT Mandi Alumni secured 2nd AIR in Combined Defence Services
                Examination 2020
              </h4>
              <br />
              <p>
                Indian Institute of Technology Mandi Alumni, Ms. Neha Grewal
                (Graduated in the year 2018), has secured All India rank 2 in
                the prestigious Combined Defence Services Examination (CDSE)
                declared this year
              </p>
              <p>
                IIT Mandi Alumni affairs cell congratulates Ms. Neha Grewal on
                her big achievement and wishes her the very best for her bright
                and successful career.
              </p>
            </div>
          </div>
          <div className="sliderItem">
            <div className="slidePallet">
              <h4>IIT Mandi Alumni Clear Civil Services Examination</h4>
              <br />
              <p>
                Indian Institute of Technology Mandi Alumni, Mr. Mohit Rawat
                (2015 Batch), have secured 462nd Rank in the final results of
                the prestigious Civil Services Examination (CSE) declared this
                year. Mr. Mohit Rawat, a resident of Haryana, completed his
                B.Tech in Computer Science and Engineering from IIT Mandi in
                2015. During his years at IIT Mandi, he studied various basic
                and advanced courses like Data Structures, Advanced Computer
                Architectures and courses from other disciplines like Basic
                Sciences and Humanities, among others.
              </p>
              <p>
                Congratulating Mr. Rawat on his big achievement, we wish the
                best for his bright and successful career.
              </p>
            </div>
          </div>
          <div className="sliderItem">
            <div className="slidePallet">
              <h4>IIT Mandi Alumni Clear Civil Services Examination</h4>
              <br />
              <p>
                Indian Institute of Technology Mandi Alumni, Mr. Lalitesh K.
                Meena (2015 Batch), have secured 655th Rank in the final results
                of the prestigious Civil Services Examination (CSE) declared
                this year. Mr. Lalitesh K. Meena, a resident of Rajasthan,
                completed his B.Tech in Electrical Engineering from IIT Mandi in
                2015. During his academic years' tenure, Mr. Meena held many
                positions of responsibility such as Mess Secretary of Parashar
                Hostel, IIT Mandi (2013 - 14) and Core Member of Security team
                in Exodia 2014, the annual technical-cultural festival of IIT
                Mandi
              </p>
              <p>
                Congratulating Mr. Meena on his big achievement, we wish the
                best for his bright and successful career.
              </p>
            </div>
          </div>
          <div className="sliderItem">
            <div className="slidePallet">
              <h4>Google Summer of Code(GSoC 2021)</h4>
              <br />
              <p>
                12 selections in organisations - Zulip, THE LINUX FOUNDATION,
                mlpack, sympy, Kodi, Sugarlabs and 3 mentor selection in
                GSoC'21.
              </p>
            </div>
          </div>
        </Slider>
      </div> */}
      <br />
      <h2 style={{ textAlign: "center" }}>Archives</h2>
      <div>
        <div className="acadmic">
          <br />
          <div className="slot">
            <button id="year1" className="yearBtn">
              <span className="arrow">
                <i id="arrow1" className="fas fa-angle-right"></i>
              </span>
              Year 2020
            </button>
            <div id="yr1" className="yearCont">
              <ul>
                <li>
                  <strong>Institute Achievements - </strong>
                  <ul>
                    <li>
                      IIT Mandi ranks #6 in India Today Rankings 2020 under the
                      Best Technical Universities category
                    </li>
                    <li>
                      IIT Mandi makes a debut at #7 in Atal Ranking of
                      Institutions on Innovation Achievements (ARIIA) 2020 In
                      the ARIIA 2020, announced by Hon'ble Vice President Shri.
                      M. Venkaiah Naidu today, IIT Mandi is the only institute
                      from the second generation of IITs to be featured
                    </li>
                    <li>
                      Researchers from IIT Mandi and Mandi district
                      administration won the 2020 gold Skoch Award in the
                      “Safety and Security” category for the landslide
                      monitoring and warning system deployed in Mandi district.
                      Dr. Varun Dutt, Dr. K. V. Uday, and the research team at
                      IIT Mandi were a part of developing and deploying the
                      landslide monitoring system in several locations in the
                      Mandi district. Based on the deployment's success, the DC
                      Mandi office team and IIT Mandi researchers applied for
                      this award in 2020
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Students Achievements - </strong>
                  <ul>
                    <li>
                      Rashpreet Singh, B. Tech. (Electrical Engineering), batch
                      2013-17 of IIT Mandi, secured #196 rank in Union Public
                      Service Commission (UPSC) exam
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>GSoC(Google Summer of Code) - </strong>
                  <ul>
                    <li>
                      9 selections including the organizations like THE LINUX
                      FOUNDATION, Zulip, CiviCRM, MIfos, Lablua, DIAL etc.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="slot">
            <button id="year2" className="yearBtn">
              <span className="arrow">
                <i id="arrow2" className="fas fa-angle-right"></i>
              </span>
              Year 2019{" "}
            </button>
            <div id="yr2" className="yearCont">
              <ul>
                <li>
                  <strong>Faculty Achievements - </strong>
                  <ul>
                    <li>
                      Dr. Manu V. Devadevan, Assistant Professor, School of
                      Humanities and Social Sciences, Indian Institute of
                      Technology Mandi has been awarded the Infosys Prize for
                      Humanities in 2019. As per the citation, the prize has
                      been awarded for his “ highly original and wide-ranging
                      work on pre-modern South India.{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Students Achievements - </strong>
                  <ul>
                    <li>
                      Mr. Anil Jhajharia have secured 431st Rank in the final
                      results of the prestigious Civil Services Examination
                      (CSE) 2019.
                    </li>
                    <li>
                      Mr. Lalitesh K. Meena have secured 689th Rank in the final
                      results of the prestigious Civil Services Examination
                      (CSE) 2019.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Inter IIT Tech Fest - </strong>
                  <ul>
                    <li>Gold in Coding Hackathon</li>
                    <li>
                      Bronze in Case study, BitGit DataScience, Challenge, Route
                      Optimization Algorithm.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>GSoC(Google Summer of Code) - </strong>
                  <ul>
                    <li>
                      5 selections including 2 at THE LINUX FOUNDATION and 1
                      each at Zulip, CERN and Lablua.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="slot">
            <button id="year3" className="yearBtn">
              <span className="arrow">
                <i id="arrow3" className="fas fa-angle-right"></i>
              </span>
              Year 2018{" "}
            </button>
            <div id="yr3" className="yearCont">
              <ul>
                <li>
                  <strong>Faculty Achievements - </strong>
                  <ul>
                    <li>
                      Dr. Pradeep Kumar, Assistant Professor in the School of
                      Basic Sciences has been selected as a member of INYAS
                      (Indian National Young Academy of Science), for a period
                      of five yearsstarting from January 2018. His current area
                      of research is focused on probing phonon dynamics of
                      low-dimensional (Carbon nanotubes, Graphene, Graphene
                      based heterostructures, nano-particles, etc.) and strongly
                      correlated systems (Multiferroic oxides, Iron-based
                      superconductors, Topological insulators, Spin-frustrated
                      systems).
                    </li>
                    <li>
                      Mr. Mohammad Amir, PhD Scholar in the School of
                      Engineering is working under the guidance of Dr. Talha in
                      the area of advanced composite structures. He has received
                      the Best Paper award in the 3rd Asian Joint Symposium on
                      Aerospace Engineering 2018 (AJSAE 2018) held in Gyeong-Ju,
                      Korea during October 31 - November 3, 2018, hosted by The
                      Society for Aerospace System Engineering (SASE), South
                      Korea. The paper entitled "Influence of microstructural
                      defects on free vibration response of electrically
                      actuated functionally graded panels" was presented by him.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>GSoC(Google Summer of Code) - </strong>
                  <ul>
                    <li>
                      11 selections at prestigious organisations like MOZILLA,
                      KDE, FOSSASIA, OPEN ASTRONOMY including 2 at THE LINUX
                      FOUNDATION.
                    </li>
                    <li>IIT Mandi stands at 10th position in the world.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="slot">
            <button id="year4" className="yearBtn">
              <span className="arrow">
                <i id="arrow4" className="fas fa-angle-right"></i>
              </span>
              Year 2017{" "}
            </button>
            <div id="yr4" className="yearCont">
              <ul>
                <li>
                  <strong>Institute Achievements - </strong>
                  <ul>
                    <li>
                      IIT Mandi submission wins Judge's award in the Bird
                      Activity Detection (BAD - The BAD challenge was designed
                      to develop efficient algorithms which can distinguish bird
                      sounds from non-bird sounds.) challenge organised by Queen
                      Mary University, London. Top Contributers - Anshul Thakur
                      (PhD scholar), Jyothi Jain (project associate), Dr.
                      Padmanabhan Rajan (Asst. Professor, SCEE) and Dr. A. D.
                      Dileep (Asst. Professor, SCEE).
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Students Achievements - </strong>
                  <ul>
                    <li>
                      Mr. Dushyant Singh, an IIT Mandi Alumni of class 2015
                      hails from Aligarh U.P., scored All India Rank 6 in Indian
                      Engineering Services Exam 2017 in Electrical Engineering.
                      He did his B.Tech from Indian Institute of Technology
                      Mandi, Himachal Pradesh
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Inter IIT Tech Fest - </strong>
                  <ul>
                    <li>Gold in Stock Market Analysis</li>
                    <li>Silver in Human Computer Interaction</li>
                    <li>
                      Secured 4th rank in overall General Championship Tally
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="slot">
            <button id="year5" className="yearBtn">
              <span className="arrow">
                <i id="arrow5" className="fas fa-angle-right"></i>
              </span>
              Year 2016{" "}
            </button>
            <div id="yr5" className="yearCont">
              <ul>
                <li>
                  <strong>Faculty Achievements - </strong>
                  <ul>
                    <li>
                      Dr. Atul Dhar (Asst. Professor, School of Engineering, IIT
                      Mandi) has been awarded the Young Scientist Award by the
                      ISEES.The award was conferred during the 7th ISEES
                      (International Society for Energy, Environment and
                      Sustainability) International Workshop on Sustainable
                      Energy, Environment & Safety with Railway Centric Theme,
                      21st-23rd December, 2015.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Institute Achievements - </strong>
                  <ul>
                    <li>
                      In January 2016, IIT Mandi, was selected as one of 18
                      sites across the country for setting up Technology
                      Business Incubators (TBIs) under the Government's
                      'Start-Up India' initiative. Initial funding is being
                      provided by IIT Mandi and the National Science &
                      Technology Entrepreneurship Development Board of the
                      department of Science & Technology to setup IIT Mandi
                      Catalyst, a Section 8 company for technology business
                      incubation.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Inter IIT Tech Fest - </strong>
                  <ul>
                    <li>Silver in Social Media Analysis</li>
                    <li>Silver in Portfolio Defender</li>
                    <li>Bronze in Software Development</li>
                    <li>Bronze in Embedded Systems</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="slot">
            <button id="year6" className="yearBtn">
              <span className="arrow">
                <i id="arrow6" className="fas fa-angle-right"></i>
              </span>
              Year 2015{" "}
            </button>
            <div id="yr6" className="yearCont">
              <ul>
                <li>
                  <strong>Faculty Achievements - </strong>
                  <ul>
                    <li>
                      Dr. Arti Kashyap is awarded the prestigious Simons
                      Associate of The Abdus Salam International Center for
                      Theoretical Physics at Trieste, Italy (ICTP,
                      http://www.ictp.it/) from January 1, 2015 till Dec 31,
                      2020. The award supports multiple visits to ICTP during
                      the award period. Since inception, in 1964, ICTP is Center
                      of Excellence and an instrument to promote physics in
                      developing countries. Associates are appointed to take
                      initiatives in their country. Simons Associate are
                      supported by the grant from Simons Foundation.
                    </li>
                    <li>
                      The paper titled "A Family of Example-Specific Density
                      based Matching Kernels for Classification of Varying
                      Length Patterns of Speech using Support Vector Machines",
                      authored by Abhijeet Sachdev (MS student, IIT Mandi), A.
                      D. Dileep (Assistant Professor, SCEE, IIT Mandi) and Veena
                      Thenkanidiyoor (Assistant Professor, Dept. of CSE, NIT
                      Goa), was presented in the '2nd International Conference
                      on Soft Computing and Machine Intelligence (ISCMI2015)'.
                      This conference was organized by the International Neural
                      Network Society (INNS) India regional chapter, during
                      November 23-24, 2015 at Hong Kong. The main objective of
                      ISCMI 2015 is to present the latest research and results
                      of scientists related to soft computing & machine
                      intelligence topics. The above mentioned paper received
                      the "INNS Best Paper Award" among all the papers accepted
                      in the conference. The paper addressed the issues in
                      classifying the varying length patterns of speech using
                      support vector machines (SVM). In this paper authors have
                      proposed a novel example-specific density based kernel.
                      Authors have showed improved performance for the tasks
                      such as speech emotion recognition and speaker
                      identification when the proposed kernel was used with
                      SVM-based classifier.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Students Achievements - </strong>
                  <ul>
                    <li>
                      Pradeep Seervi, a 4th year B.Tech. (Electrical
                      Engineering) student at IIT Mandi has successfully cracked
                      the GATE 2015 exam securing All India Rank of 1 in
                      Electrical Engineering. Pradeep hails from Jodhpur,
                      Rajasthan. Ealier, he was also awarded the DAAD
                      scholarship and visited University of Applied Sciences,
                      Zwickau, Germany during June-August, 2014.
                    </li>
                    <li>
                      Athar Aamir Ahmed bagged 2nd rank in All-India Civil
                      Services Exam,2015
                    </li>
                    <li>Deepanshu Rastogi secured AIR 58 in IES 2015</li>
                  </ul>
                </li>
                <li>
                  <strong>Inter IIT Tech Meet - </strong>
                  <ul>
                    <li>Gold in DATA ANALYTICS (tied with IIT Kharagpur)</li>
                    <li>Sliver in BUSINESS AND TECHNOLOGY QUIZ</li>
                    <li>Sliver in HARDWARE MODELLING</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="slot">
            <button id="year7" className="yearBtn">
              <span className="arrow">
                <i id="arrow7" className="fas fa-angle-right"></i>
              </span>
              Year 2014
            </button>
            <div id="yr7" className="yearCont">
              <ul>
                <li>
                  <strong>Students achievements - </strong>
                  <ul>
                    <li>
                      Aditya Chauhan received the Young Scientist Award
                      (2014-2015) in the Materials Science category in the 102nd
                      Indian Science Congress. The award consists of Rs 25,000
                      and a Certificate of Merit. An MS student, Aditya is
                      working in the area of materials selection, energy
                      harvesting and solid state refrigeration using
                      piezoelectric ceramics under the guidance of Dr. Rahul
                      Vaish. He has for the first time experimentally
                      demonstrated giant refrigeration effect in piezoelectric
                      ceramics. He has published over twenty research articles
                      in peer reviewed international journals, gaining over 160
                      citations in just 2 years. The Science Congress was hosted
                      by the University of Mumbai.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="slot">
            <button id="year8" className="yearBtn">
              <span className="arrow">
                <i id="arrow8" class="fas fa-angle-right"></i>
              </span>
              Year 2013
            </button>
            <div id="yr8" className="yearCont">
              <ul>
                <li>
                  <strong>Students achievements - </strong>
                  <ul>
                    <li>
                      The Project-Junior is the name given to a new form of
                      augmented reality (AR) interface developed for the
                      computing devices by IIT Mandi students. The basic idea
                      behind the project was to provide user with better means
                      of interacting with the computers.The students' brainchild
                      bagged the second place under mechanical division at Jed-i
                      (Joy of Engineering, Design and Innovation) project
                      challenge, Indian Institute of Science (IISc) Bangalore,
                      competing against 69 teams from all over India on June 14,
                      2013. The Jed-i project challenge is an annual event
                      designed to identify and showcase the best final year
                      engineering project. The students' brainchild bagged the
                      second place under mechanical division at Jed-i (Joy of
                      Engineering, Design and Innovation) project challenge,
                      Indian Institute of Science (IISc) Bangalore, competing
                      against 69 teams from all over India on June 14, 2013. The
                      Jed-i project challenge is an annual event designed to
                      identify and showcase the best final year engineering
                      project.
                    </li>
                    <li>
                      IIT Mandi is one of the five IITs who are developing
                      applications for Aakash tablets. Other IITs being IIT
                      Bombay, IIT Madras, IIT Kanpur, IIT Guwahati and IIT
                      Kharagpur where AADLs (Aakash application development
                      labs) have been set up. A "Workshop on competent use of
                      Aakash tablet and on Android" was organized on May 5, 2013
                      to impart training to the students on the technology
                      employed to develop applications for Akash tablet. About
                      65 students from J. L. N. Engineering College Sundernagar,
                      Himachal Pradesh participated in this workshop.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Student Placements -</strong>
                  <ul>
                    <li>
                      Mr. Raj Kamal Singh,Mr. Samrat Gavale and Mr. Sumeet Singh
                      Arora have indivisually recieved a package of Rs. 16.2
                      lakh by IT giant Microsoft.
                    </li>
                    <li>
                      Two MS students, Sujeet Kumar and Srimanta Mandal, have
                      bagged job offers from Samsung.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

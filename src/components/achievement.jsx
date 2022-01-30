import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./achievement.css";

export const Achievement = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="homeSlider">
      <Slider {...settings}>
        <div className="sliderItem">
          <div className="slidePallet">
            <h4>IIT Mandi graduate secures 3rd rank in UPPSC exam</h4>
            <br />
            <p>
              Mr. Mohit Rawat, B.Tech (2015) from Palwal Haryana, secured the
              3rd rank in the UPPSC exam in 2020. He is perhaps the only
              candidate from Haryana who has secured a place in the top 10 list
              of the exam conducted in 2020. He said it was his second attempt
              in the UPPSC and that he also cleared the preliminary and the
              mains exam of the UPSC 2020 and is due to appear in the final
              interview on May 28 this year.
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
            <p>
              Shashank Shekhar (A18006) and Piyush Kumar (A18012) of Master of
              Arts (MA) in Development Studies in the School of Humanities and
              Social Sciences, Indian Institute of Technology (IIT) Mandi ranked
              #162 and #400, respectively, in the GATE 2021.
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
            <p>
              Dr. Palvi Aggarwal, a 2018 Ph.D. graduate, guided by Dr. Varun
              Dutt, Associate Professor, Indian Institute of Technology (IIT)
              Mandi, has received an offer to a full­time tenure track Assistant
              Professor position in the Department of Computer Science at the
              University of Texas at El Paso, USA
            </p>
            <p>
              Dr. Aggarwal finished her Ph.D. at the School of Computing and
              Electrical Engineering, IIT Mandi, in December 2018. After
              completing her Ph.D. degree from IIT Mandi, Dr. Aggarwal took a
              postdoc position at Carnegie Mellon University, USA
            </p>
            <p>
              IIT Mandi congratulates Dr. Palvi Aggarwal for her achievement and
              wishes her many more successes in the future
            </p>
          </div>
        </div>
        <div className="sliderItem">
          <div className="slidePallet">
            <h4>
              IEEE Electron Devices Society Masters Student Fellowship 2021
            </h4>
            <p>
              Mr. Arpit Nandi (S19017), pursuing MS with Dr. Ankush Bag,
              Assistant Professor has received IEEE Electron Devices Society
              Masters Student Fellowship 2021. It the most prestigious global
              recognition in Electron Devices research area at Master level. The
              Fellowship Program was established to promote, recognize, and
              support Masters level study and research within the Electron
              Devices Society's field of interest.
            </p>
            <p>
              Congratulation to Mr. Arpit for his achievement on being selected
              for this prestigious award.{" "}
            </p>
          </div>
        </div>
        <div className="sliderItem">
          <div className="slidePallet">
            <h4>
              IIT Mandi Alumni secured 2nd AIR in Combined Defence Services
              Examination 2020
            </h4>
            <p>
              Indian Institute of Technology Mandi Alumni, Ms. Neha Grewal
              (Graduated in the year 2018), has secured All India rank 2 in the
              prestigious Combined Defence Services Examination (CDSE) declared
              this year
            </p>
            <p>
              IIT Mandi Alumni affairs cell congratulates Ms. Neha Grewal on her
              big achievement and wishes her the very best for her bright and
              successful career.
            </p>
          </div>
        </div>
        <div className="sliderItem">
          <div className="slidePallet">
            <h4>IIT Mandi Alumni Clear Civil Services Examination</h4>
            <p>
              Indian Institute of Technology Mandi Alumni, Mr. Mohit Rawat (2015
              Batch), have secured 462nd Rank in the final results of the
              prestigious Civil Services Examination (CSE) declared this year.
              Mr. Mohit Rawat, a resident of Haryana, completed his B.Tech in
              Computer Science and Engineering from IIT Mandi in 2015. During
              his years at IIT Mandi, he studied various basic and advanced
              courses like Data Structures, Advanced Computer Architectures and
              courses from other disciplines like Basic Sciences and Humanities,
              among others.
            </p>
            <p>
              Congratulating Mr. Rawat on his big achievement, we wish the best
              for his bright and successful career.
            </p>
          </div>
        </div>
        <div className="sliderItem">
          <div className="slidePallet">
            <h4>IIT Mandi Alumni Clear Civil Services Examination</h4>
            <p>
              Indian Institute of Technology Mandi Alumni, Mr. Lalitesh K. Meena
              (2015 Batch), have secured 655th Rank in the final results of the
              prestigious Civil Services Examination (CSE) declared this year.
              Mr. Lalitesh K. Meena, a resident of Rajasthan, completed his
              B.Tech in Electrical Engineering from IIT Mandi in 2015. During
              his academic years' tenure, Mr. Meena held many positions of
              responsibility such as Mess Secretary of Parashar Hostel, IIT
              Mandi (2013 - 14) and Core Member of Security team in Exodia 2014,
              the annual technical-cultural festival of IIT Mandi
            </p>
            <p>
              Congratulating Mr. Meena on his big achievement, we wish the best
              for his bright and successful career.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

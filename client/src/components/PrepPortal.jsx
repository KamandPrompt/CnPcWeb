import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const PrepPortal = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        cssEase: "linear",
    };
  return (
    <>
        <div className="CnP" style={{"textAlign":"center"}}>
        <h2>Preparation Sessions</h2>
        </div>
        <div className="homeSlider3">
        <Slider {...settings}>
          <div className="sliderItem3">
            <div className="slidePallet3">
                <div id="imgCnP1" className='imgCnP'>
                    <div className='titleCnP'><p>Alumni Interaction</p></div>
                </div>
            </div>
          </div>
          <div className="sliderItem3">
            <div className="slidePallet3">
                <div id='imgCnP2' className='imgCnP'>
                    <div className="titleCnP">
                    <p>Session with Mr. Athar Amir Khan(IAS Officer)</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="sliderItem3">
            <div className="slidePallet3">
            <div id='imgCnP3' className='imgCnP'>
                <div className="titleCnP">
                <p>LTI Brand Icon Talk</p>
                </div>
            </div>
            </div>
          </div>
          <div className="sliderItem3">
            <div className="slidePallet3">
            <div id='imgCnP4' className='imgCnP'>
                <div className="titleCnP">
                <p>Resume Making Workshop</p>
                </div>
            </div>
            </div>
          </div>
          <div className="sliderItem3">
            <div className="slidePallet3">
            <div id='imgCnP5' className='imgCnP'>
                <div className="titleCnP">
                <p>Seminar on Study abroad</p>
                </div>
            </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}

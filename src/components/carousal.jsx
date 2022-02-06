import React from "react";
import image1 from "../images/img1-min.jpg";
import image2 from "../images/img2-min.jpg";
import image3 from "../images/img3-min.jpg";

export const Carousal = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="Size" src={image1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="Size" src={image2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="Size" src={image3} alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

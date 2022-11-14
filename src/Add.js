import React from "react";
import Slider from "react-slick";
import "./Add.css";

function Add({ image1, image2, image3 }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="bannerAdd">
          <img src={image1} alt="star" />
        </div>
        <div className="bannerAdd">
          <img src={image2} alt="star" />
        </div>
        <div className="bannerAdd">
          <img src={image3} alt="star" />
        </div>
      </Slider>
    </div>
  );
}

export default Add;

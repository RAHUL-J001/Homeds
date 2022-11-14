//=============================================================================
/**
 * React-Slider
 * Slider Arrows Properties
 * Responsive React Slider
 */
//=============================================================================

import React from "react";
import "./DealsOfDay.css";
import SliderProduct from "./SliderProduct";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0e4a86",
        right: 40,
        zIndex: 10,
        top: -15,
        width: 40,
        height: 40,
        borderRadius: 50,
        textAlign: "center",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0e4a86",
        top: -15,
        left: 40,
        zIndex: 10,
        width: 40,
        height: 40,
        borderRadius: 50,
        autoplay: false,
        autoplaySpeed: 3000,
        textAlign: "center",
      }}
      onClick={onClick}
    />
  );
}

function DealsOfDay() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    arrows: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="dealOfTheDay">
        <h1 className="dealOfTheDayTitle">Deals Of The Day</h1>
        <div className="underline"></div>
      </div>

      <Slider {...settings}>
        <div className="main">
          <SliderProduct
            id="9"
            title="Palmolive Aroma Shower Gel - Morning Tonic 250 ml "
            price={270}
            rating={5}
            image="images/palmoliveAroma.jpg"
          />
        </div>
        <div className="main">
          <SliderProduct
            id="10"
            title="Nycil Germ Expert Prickly Heat Powder - Cool Herbal 150 gm
            "
            price={150}
            rating={4}
            image="images/nycil.jpg"
          />
        </div>
        <div className="main">
          <SliderProduct
            id="11"
            title="Moov Pain Relief Specialist Cream 50 gm"
            price={65}
            rating={3}
            image="images/moov.jpg"
          />
        </div>
        <div className="main">
          <SliderProduct
            id="12"
            title="
            Evver Sun Protection UV Guard SPF 50 PA+++ Cream 100 ml"
            price={245}
            rating={5}
            image="images/uvCream.jpg"
          />
        </div>
        <div className="main">
          <SliderProduct
            id="13"
            title="Cadbury Bournvita Five Star Magic Health Drink - Pouch 500 gm
            "
            price={222}
            rating={5}
            image="images/cadburyBournvita.jpg"
          />
        </div>
        <div className="main">
          <SliderProduct
            id="14"
            title="Bombay Shaving Company Post Shave Balm 100 gm
            "
            price={189.6}
            rating={4}
            image="images/shave.jpg"
          />
        </div>
        <div className="main">
          <SliderProduct
            id="15"
            title="Garnier Pure Active Real Neem Face Wash 50 gm
            "
            price={65}
            rating={4}
            image="images/garnier.jpg"
          />
        </div>
      </Slider>
    </div>
  );
}

export default DealsOfDay;

"use Client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    loop: true,
  };

  return (
    <Slider {...settings}> 
      <div>
        <div className="hero__slider--items home2__slider--items__bg one">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="slider__content style2">
                  <h3
                    className="slider__content--maintitle h1"
                    style={{ color: "#fff" }}
                  >
                    Celebrate the Art of Writing:
                    <br /> Explore Our Premium Pen Manufacturing Excellence!
                  </h3>
                  <div className="slider__content--footer style2 d-flex align-items-center">
                    <a className="slider__content--btn primary__btn" href="#">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="hero__slider--items home2__slider--items__bg two">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="slider__content style2">
                  <h3
                    className="slider__content--maintitle h1"
                    style={{ color: "#fff" }}
                  >
                    Gifts That Last a Lifetime: <br /> Choose from Our
                    Manufacturer's Pen Collection!
                  </h3>
                  <div className="slider__content--footer style2 d-flex align-items-center">
                    <a className="slider__content--btn primary__btn" href="#">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="hero__slider--items home2__slider--items__bg three">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="slider__content style2">
                  <h3
                    className="slider__content--maintitle h1"
                    style={{ color: "#fff" }}
                  >
                    Write with Confidence: <br /> Pens Crafted by Our
                    Manufacturer Define Excellence!
                  </h3>
                  <div className="slider__content--footer style2 d-flex align-items-center">
                    <a className="slider__content--btn primary__btn" href="#">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default SliderBanner;

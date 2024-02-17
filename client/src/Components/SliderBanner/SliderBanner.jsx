"use Client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderbanner.css";

const SliderBanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    loop: true,
  };

  return (
    <Slider {...settings}>
      <section className="hero__slider--section slider__section--bg2">
        <div className="hero__slider--inner style2 position__relative">
          <div className="hero__slider--activation swiper">
            <div className="hero__slider--wrapper swiper-wrapper">
              <div className="swiper-slide ">
                <div>
                  <div className="hero__slider--items home2__slider--items__bg one"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero__slider--section slider__section--bg2">
        <div className="hero__slider--inner style2 position__relative">
          <div className="hero__slider--activation swiper">
            <div className="hero__slider--wrapper swiper-wrapper">
              <div className="swiper-slide ">
                <div>
                  <div className="hero__slider--items home2__slider--items__bg two"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero__slider--section slider__section--bg2">
        <div className="hero__slider--inner style2 position__relative">
          <div className="hero__slider--activation swiper">
            <div className="hero__slider--wrapper swiper-wrapper">
              <div className="swiper-slide ">
                <div>
                  <div className="hero__slider--items home2__slider--items__bg three"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Slider>
  );
};

export default SliderBanner;

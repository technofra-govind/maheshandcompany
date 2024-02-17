"use Client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function OurProducts() {
  const Products = [
    {
      imgSrc: "/assets/img/myimage/Acrylic Knee Stages.png",
      name: "Acrylic And Plastics",
      path: '/acrylic'
    },
    {
      imgSrc: "/assets/img/myimage/Palm Model.png",
      name: "Anatomy Models",
      path: '/anatomy'
    },
    {
      imgSrc: "/assets/img/myimage/Leatherite Duffel Bag.png",
      name: "Bags",
      path: '/bags'
    },
    {
      imgSrc: "/assets/img/myimage/Crystal Ball Paper Weight.png",
      name: "Crystal",
      path: '/crystal'
    },
    {
      imgSrc: "/assets/img/myimage/Tabla & Veen.png",
      name: "Fiber",
      path: '/fiber'
    },
    {
      imgSrc: "/assets/img/myimage/Multiple Organiser.png",
      name: "Leatherite",
      path: '/leatherite'
    },
    {
      imgSrc: "/assets/img/myimage/Flexible Spring Pen Stand.png",
      name: "Metal",
      path: '/metal'
    },
    {
      imgSrc: "/assets/img/myimage/Double Sand Timer.png",
      name: "Sand Timers",
      path: '/sandtimers'
    },
    {
      imgSrc: "/assets/img/myimage/Shirt 02.png",
      name: "Shirts T-Shirts",
      path: '/shirtandtShirt'
    },
    {
      imgSrc: "/assets/img/myimage/umbrella-03.png",
      name: "Umbrella",
      path: '/umbrella'
    },
    {
      imgSrc: "/assets/img/myimage/Pens-2.png",
      name: "Space Pens",
      path: '/spacepens'
    },
  ];

  const sliderSettings = {
    // dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    loop: true,
    // spaceBetween: 30,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

    ],
  };

  return (
    <>
      <div className="instagram__section section--padding deals__section--bg">
        <div className="container-fluid">
          <div className="section__heading text-center mb-50">
            <h2 className="section__heading--maintitle text__secondary mb-10">
              Our Products
            </h2>
          </div>
          <div className="instagram__section--inner instagram__swiper--activation swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide gonagbg">
                <Slider {...sliderSettings}>
                  {Products.map((Product, index) => (
                    <div key={index}>
                      <div style={{ "margin": "0px 32px 0px 32px", "textAlign": "center" }}>
                        <div className="instagram__thumbnail position__relative">
                          <Link
                            className="instagram__thumbnail--link display-block"
                            to={Product.path}
                          >
                            <img
                              className="instagram__thumbnail--img display-block"
                              src={Product.imgSrc}
                              alt="instagram-img"
                            />
                          </Link>
                        </div>
                        <div className="team__card--content gonag">
                          <span className="team__card--content__subtitle text__secondary">
                            {Product.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurProducts;

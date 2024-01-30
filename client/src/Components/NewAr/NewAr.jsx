import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NewAr() {
  const newA = [
    {
      imgSrc: "/src/assets/img/other/wobak.png",
      desc:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in alley of type and scrambled it some.",
      name: "Innova Ball Pen",
    },
    {
      imgSrc: "/src/assets/img/other/wobak.png",
      desc:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in alley of type and scrambled it some.",
      name: "Innova Ball Pen",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <>
      <section className="hero__slider--section slider__section--bg">
        <div className="hero__slider--inner position__relative">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Slider {...sliderSettings}>
                  {newA.map((newhkj, index) => (
                    <div key={index} className="hero__slider--items">
                      <div className="hero__slider--thumbnail">
                        <img
                          className="hero__slider--thumbnail__img display-block"
                          src={newhkj.imgSrc}
                          alt="slider img"
                        />
                      </div>
                      <div className="slider__content text-center">
                        <h2 className="slider__content--maintitle h1">
                          {newhkj.name}
                        </h2>
                        <p className="slider__content--desc d-sm-2-none">
                          {newhkj.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewAr;

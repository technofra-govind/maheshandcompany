
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = () => {
  const testimonials = [
    {
      imgSrc: "/src/assets/img/other/testimonial1.png",
      desc: "Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
      name: "Brandon Bokle",
      position: "Secretary",
    },
    {
      imgSrc: "/src/assets/img/other/testimonial2.png",
      desc: "Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
      name: "Sarrison Samuel",
      position: "CEO Founder",
    },
    {
      imgSrc: "/src/assets/img/other/testimonial3.png",
      desc: "Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
      name: "Warrison Samuel",
      position: "Spa Manager",
    },
    {
      imgSrc: "/src/assets/img/other/testimonial2.png",
      desc: "Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
      name: "Sarrison Samuel",
      position: "CEO Founder",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="testimonial__section section--padding">
      <div className="container">
        <div className="section__heading text-center mb-50">
          <h2 className="section__heading--maintitle text__secondary mb-10">
            Our Testimonial
          </h2>
          <p className="section__heading--desc">
            Beyond more stoic this along goodness this sed wow manatee mongos
            flusterd impressive man farcrud opened.
          </p>
        </div>
        <div className="testimonial__inner testimonial__slick--activation">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial__card text-center">
                <div className="testimonial__card--thumbnail">
                  <img
                    className="testimonial__card--thumbnail__img display-block"
                    src={testimonial.imgSrc}
                    alt="testimonial-img"
                  />
                </div>
                <div className="testimonial__content">
                  <p className="testimonial__content--desc">
                    {testimonial.desc}
                  </p>
                  <h3 className="testimonial__content--title">
                    {testimonial.name}
                  </h3>
                  <h4 className="testimonial__content--subtitle text__secondary">
                    {testimonial.position}
                  </h4>
                </div>
                <div className="testimonial__icon">
                  {/* Your SVG path here */}
                  <svg
                    className="testimonial__icon--svg"
                    data-name="Group 546"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.479"
                    height="13.939"
                    viewBox="0 0 21.479 18.939"
                  >
                    <path
                      data-name="Path 131"
                      d="M8.629,11.089A1.033,1.033,0,0,0,9.149,9.7L8.3,7.918a1.036,1.036,0,0,0-1.352-.5A11.937,11.937,0,0,0,3.206,9.841,9.053,9.053,0,0,0,.693,13.809,21.762,21.762,0,0,0,0,19.908v5.319a1.043,1.043,0,0,0,1.04,1.04h6.81a1.043,1.043,0,0,0,1.04-1.04v-6.81a1.043,1.043,0,0,0-1.04-1.04H4.592A7.306,7.306,0,0,1,5.8,13.168,6.586,6.586,0,0,1,8.629,11.089Z"
                      transform="translate(0 -7.328)"
                      fill="currentColor"
                    ></path>
                    <path
                      data-name="Path 132"
                      d="M79.312,11.172a1.033,1.033,0,0,0,.52-1.386l-.849-1.767a1.036,1.036,0,0,0-1.352-.5,12.552,12.552,0,0,0-3.725,2.408,9.248,9.248,0,0,0-2.53,3.985,21.47,21.47,0,0,0-.676,6.082v5.319a1.043,1.043,0,0,0,1.04,1.04h6.81a1.043,1.043,0,0,0,1.04-1.04V18.5a1.043,1.043,0,0,0-1.04-1.04H75.274a7.307,7.307,0,0,1,1.213-4.211A6.585,6.585,0,0,1,79.312,11.172Z"
                      transform="translate(-58.45 -7.411)"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;

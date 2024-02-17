'use Client'

import React from 'react'


function Banner() {
    return (
        <>
            <section className="hero__slider--section slider__section--bg2">
                <div className="hero__slider--inner style2 position__relative">
                    <div className="hero__slider--activation swiper">
                        <div className="hero__slider--wrapper swiper-wrapper">
                            <div className="swiper-slide ">
                                <div className="hero__slider--items home2__slider--items__bg one">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="slider__content style2">
                                                    <h3 className="slider__content--maintitle h1" style={{ color: '#fff' }}>
                                                        Celebrate the Art of Writing:<br /> Explore Our Premium Pen Manufacturing Excellence!
                                                    </h3>
                                                    <div className="slider__content--footer style2 d-flex align-items-center">
                                                        <a className="slider__content--btn primary__btn" href="#">Contact Us</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide ">
                                <div className="hero__slider--items home2__slider--items__bg two">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="slider__content style2">
                                                    <h3 className="slider__content--maintitle h1" style={{ color: '#fff' }}>
                                                        Gifts That Last a Lifetime: <br /> Choose from Our Manufacturer's Pen Collection!
                                                    </h3>
                                                    <div className="slider__content--footer style2 d-flex align-items-center">
                                                        <a className="slider__content--btn primary__btn" href="#">Contact Us</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide ">
                                <div className="hero__slider--items home2__slider--items__bg three">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="slider__content style2">
                                                    <h3 className="slider__content--maintitle h1" style={{ color: '#fff' }}>
                                                        Write with Confidence: <br /> Pens Crafted by Our Manufacturer Define Excellence!
                                                    </h3>
                                                    <div className="slider__content--footer style2 d-flex align-items-center">
                                                        <a className="slider__content--btn primary__btn" href="#">Contact Us</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider__pagination style2 swiper-pagination"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner

import React from 'react'
import { Link } from 'react-router-dom'
function Aboutcom() {

    return (
        <>
            <section className="about__section about__section--bg section--padding">
                <div className="container">
                    <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1 align-items-center">
                        <div className="col col-sm-order">
                            <div className="about__thumbnail" data-aos="fade-up">
                                <img className="display-block" src="assets/img/myimage/about%20us.png" alt="about-thumb" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="about__content about__content--style2">
                                <h2 className="about__content--title mb-18">
                                    About Us
                                </h2>
                                <div className="about__content--step mb-25">
                                    <p className="about__content--desc mb-20" data-aos="fade-up">
                                        It gives me immense pleasure to introduce Mahesh & Co. (Gifts for every Occasion) established in the year 1975 with initially being manufacturer of Pens. Then started entering into manufacturing of customized products like Table Tops, Chit Pads & many more in Fiber, Acrylic, Crystal & other materials for major corporate sectors.
                                    </p>
                                    <p className="about__content--desc mb-20" data-aos="fade-up">
                                        We have also tied up with many reputed Brands like Swiss Military. Gratia, Lawman, Bryan & Candy and many more.
                                    </p>
                                </div>
                                <Link className="about__content--btn primary__btn" to={'/contact'} data-aos="fade-up">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="featured__product--section section--padding">
                <div className="container">
                    <div className="row row-cols-lg-3 row-cols-1">
                        <div className="col">
                            <div className="featured__product--list">
                                <div className="featured__product--card mb-30 aos-init aos-animate" data-aos="fade-up">
                                    <div className="featured__product--card__icon--img">
                                        <span className="featured__product--card__icon">
                                            <img className="display-block" src="assets/img/myimage/icon/mission.png" alt="setting-icon" />
                                        </span>
                                    </div>
                                    <div className="featured__product--card__content">
                                        <h2 className="featured__product--card__title h3">Our Mission </h2>
                                        <p className="featured__product--card__desc">
                                            We aim to achieve our vision by understanding our customers need &amp; making the customers happy with our services.
                                        </p>
                                    </div>
                                </div>
                                <div className="featured__product--card aos-init" data-aos="fade-up">
                                    <div className="featured__product--card__icon--img">
                                        <span className="featured__product--card__icon">
                                            <img className="display-block" src="assets/img/myimage/icon/vision.png" alt="setting-icon" />
                                        </span>
                                    </div>
                                    <div className="featured__product--card__content">
                                        <h2 className="featured__product--card__title h3">Our Vision</h2>
                                        <p className="featured__product--card__desc">
                                            To be one of the best promotional Gift supplier and to give best quality of products to our significant customer’s time to time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="featured__product--thumbnail">
                                <img className="featured__product--thumbnail__img display-block" src="assets/img/myimage/Pennnn32.png" alt="featured-img" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="featured__product--list">
                                <div className="featured__product--card mb-30 aos-init aos-animate" data-aos="fade-up">
                                    <div className="featured__product--card__icon--img">
                                        <span className="featured__product--card__icon">
                                            <img className="display-block" src="assets/img/myimage/icon/value-proposition.png" alt="setting-icon" />
                                        </span>
                                    </div>
                                    <div className="featured__product--card__content">
                                        <h2 className="featured__product--card__title h3"> Our Value</h2>
                                        <p className="featured__product--card__desc">
                                            Our Discipline, Innovations &amp; Commitments are valued by our customer base which is growing year after year.
                                        </p>
                                    </div>
                                </div>
                                <div className="featured__product--card aos-init" data-aos="fade-up">
                                    <div className="featured__product--card__icon--img">
                                        <span className="featured__product--card__icon">
                                            <img className="display-block" src="assets/img/icon/setting-icon.png" alt="setting-icon" />
                                        </span>
                                    </div>
                                    <div className="featured__product--card__content">
                                        <h2 className="featured__product--card__title h3">Our Setup</h2>
                                        <p className="featured__product--card__desc">
                                            We Mahesh &amp; Co. is headed under proprietorship of Mr. Rakesh M. Mehta having our main office in Mumbai.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutcom

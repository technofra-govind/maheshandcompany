import React from 'react'

function Aboutcom() {
  return (
   <>
    <section className="about__section about__section--bg section--padding">
            <div className="container">
                <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1 align-items-center">
                    <div className="col col-sm-order">
                        <div className="about__thumbnail" data-aos="fade-up">
                            <img className="display-block" src="/assets/img/new/about-thumb2.png" alt="about-thumb"/>
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
                            <a className="about__content--btn primary__btn" href="#" data-aos="fade-up">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
   </>
  )
}

export default Aboutcom

import React from 'react'
import { Link } from 'react-router-dom'
function HomenewArraval() {
    return (
        <>
            <section className="team__section section--padding">
                <div className="container">
                    <div className="section__heading text-center mb-50">
                        <h2 className="section_heading--maintitle text_secondary mb-10">New Arrivals</h2>
                    </div>
                    <div className="team__container">
                        <div className="row row-cols-md-4 row-cols-sm-2 row-cols-2 mb--n30 justify-content-center">
                            <div className="col custom-col mb-30">
                                <article className="team__card">
                                    <div className="team__card--thumbnail">
                                        <img className="team_card--thumbnail_img display-block" src="/assets/img/New-Arr/gratia.png" alt="team-thumb" />
                                    </div>
                                    <div className="team__card--content ">
                                        <h3 className="team_card--content_title">GRATIA</h3>
                                    </div>
                                </article>
                            </div>
                            <div className="col custom-col mb-30">
                                <article className="team__card">
                                    <div className="team__card--thumbnail">
                                        <img className="team_card--thumbnail_img display-block" src="/assets/img/New-Arr/involve.png" alt="team-thumb" />
                                    </div>
                                    <div className="team__card--content ">
                                        <h3 className="team_card--content_title">INVOLVE</h3>
                                    </div>
                                </article>
                            </div>
                            <div className="col custom-col mb-30">
                                <article className="team__card">
                                    <div className="team__card--thumbnail">
                                        <img className="team_card--thumbnail_img display-block" src="/assets/img/New-Arr/swiss.png" alt="team-thumb" />
                                    </div>
                                    <div className="team__card--content ">
                                        <h3 className="team_card--content_title">SWISS MILITARY</h3>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-lg-12 col-md-12" style={{ "WebkitTextAlign": "center", "textAlign": "center", "marginTop": "15px" }}>
                                <div>
                                    <Link className="primary__btn" to={'/newarrival'} >View More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomenewArraval
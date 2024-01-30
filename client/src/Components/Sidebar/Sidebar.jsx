import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <>
    <div className="shop__sidebar--widget widget__area">
                            <div className="single__widget widget__bg">
                                <h2 className="widget__title position__relative h3">Categories</h2>
                                <ul className="widget__categories--menu">
                                    <li className="widget__categories--menu__list">
                                        <Link to={'/sanditems'}>
                                            <label className="widget__categories--menu__label d-flex align-items-center">
                                                <img className="widget__categories--menu__img" src="/src/assets/img/sand-timers/5-minutes-sand-timer.png" alt="categories-img"/>
                                                <span className="widget__categories--menu__text">Sand Timers{""}</span>
                                            </label>
                                        </Link>
                                    </li>
                                    <li className="widget__categories--menu__list">
                                        <Link to={'/bags'} >
                                            <label className="widget__categories--menu__label d-flex align-items-center">
                                                <img className="widget__categories--menu__img" src="/src/assets/img/new-bags/laptop-bag.png" alt="categories-img"/>
                                                <span className="widget__categories--menu__text">Bags{""}</span>
                                            </label>
                                        </Link>
                                    </li>
                                    <li className="widget__categories--menu__list">
                                        <a href="acrylicandplastics.html">
                                            <label className="widget__categories--menu__label d-flex align-items-center">
                                                <img className="widget__categories--menu__img" src="/src/assets/img/acrylic/Smiley-Balancing-Paper-Weight.png" alt="categories-img"/>
                                                <span className="widget__categories--menu__text text-center">Acrylic And Plastics</span>
                                            </label>
                                        </a>
                                    </li>
                                    <li className="widget__categories--menu__list">
                                        <a href="anatomy-models.html">
                                            <label className="widget__categories--menu__label d-flex align-items-center">
                                                <img className="widget__categories--menu__img" src="/src/assets/img/anatomy-models/lungs-model-1.png" alt="categories-img"/>
                                                <span className="widget__categories--menu__text">Anatomy Models</span>
                                            </label>
                                        </a>
                                    </li>
                                    <li className="widget__categories--menu__list">
                                        <a href="crystal.html">
                                            <label className="widget__categories--menu__label d-flex align-items-center">
                                                <img className="widget__categories--menu__img" src="/src/assets/img/crystal/tulip-shaped-revolving-tea-light-holder.png" alt="categories-img"/>
                                                <span className="widget__categories--menu__text">Crystal</span>
                                            </label>
                                        </a>
                                    </li>
                                    <li className="widget__categories--menu__list">
                                        <a href="fiber.html">
                                            <label className="widget__categories--menu__label d-flex align-items-center">
                                                <img className="widget__categories--menu__img" src="/src/assets/img/fiber/amar-jawan-table-op.png" alt="categories-img"/>
                                                <span className="widget__categories--menu__text">Fiber</span>
                                            </label>
                                        </a>

                                    </li>
                                    <li className="widget__categories--menu__list">
                                        <a href="leatherite.html">
                                            <label className="widget__categories--menu__label d-flex align-items-center">
                                                <img className="widget__categories--menu__img" src="/src/assets/img/leatherrite/cubic-calendar.png" alt="categories-img"/>
                                                <span className="widget__categories--menu__text">Leatherite</span>
                                            </label>
                                        </a>
                                    </li>
                                    <li className="widget__categories--menu__list">
                                        <a href="metal.html">
                                            <label className="widget__categories--menu__label d-flex align-items-center">
                                                <img className="widget__categories--menu__img" src="/src/assets/img/metal/indian-flag-with-table-clock.png" alt="categories-img"/>
                                                <span className="widget__categories--menu__text">Metal</span>
                                            </label>
                                        </a>
                                    </li>
                                    <li className="widget__categories--menu__list">
                                        <a href="shirt-t-shirt.html">
                                            <label className="widget__categories--menu__label d-flex align-items-center">
                                                <img className="widget__categories--menu__img" src="/src/assets/img/shirt-t-shirt/shirt-02.png" alt="categories-img"/>
                                                <span className="widget__categories--menu__text">Shirt &amp; T-Shirts</span>
                                            </label>
                                        </a>
                                    </li>
                                    <li className="widget__categories--menu__list">
                                        <a href="umbrella.html">
                                            <label className="widget__categories--menu__label d-flex align-items-center">
                                                <img className="widget__categories--menu__img" src="/src/assets/img/umbrella/umbrella-02.png" alt="categories-img"/>
                                                <span className="widget__categories--menu__text">Umbrella</span>
                                            </label>
                                        </a>
                                    </li>
                                    <li className="widget__categories--menu__list">
                                        <a href="writing.html">
                                            <label className="widget__categories--menu__label d-flex align-items-center">
                                                <img className="widget__categories--menu__img" src="/src/assets/img/writing-constuction/6-in-1-ball-pen.png" alt="categories-img"/>
                                                <span className="widget__categories--menu__text">Writing Instrumentation</span>
                                            </label>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
    </>
  )
}

export default Sidebar

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
    const [slideup, setSlideup] = useState(false);
    const [quicklink, setQuicklink] = useState(false);
    const [product, setProduct] = useState(false);
    const [homemap, setHomemap] = useState(false);
    const acchandleClick = () => {
        setSlideup(!slideup);
    };
    const acchandleClick1 = () => {
        setQuicklink(!quicklink);
    };
    const acchandleClick2 = () => {
        setProduct(!product)
    }
    const acchandleClick3 = () => {
        setHomemap(!homemap)
    }
    return (
        <footer className="footer__section footer__bg gonagrr">
            <div className="container">
                <div className="main__footer section--padding">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer__widget">
                                <h2 className="footer__widget--title d-none d-md-block" onClick={acchandleClick}>
                                    About Us{' '}
                                    <button
                                        className={`footer__widget--button ${slideup ? 'active' : ''}`}
                                        aria-label="footer widget button"
                                    ></button>
                                    <svg
                                        className={`footer__widget--title__arrowdown--icon ${slideup ? 'rotate-up' : 'rotate-down'}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="12.355"
                                        height="8.394"
                                        viewBox="0 0 10.355 6.394"
                                    >
                                        <path
                                            d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                                            transform="translate(-6 -8.59)"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </h2>
                                <div className={`footer__widget--inner ${slideup ? 'active' : ''}`}>
                                    <a className="footer__logo" href="#">
                                        <img className="footer__logo--img display-block" src="/assets/img/logo/m.png" alt="footer-logo" />
                                    </a>
                                    <p className="footer__widget--desc">
                                        We Mahesh & Co. is headed under proprietorship of Mr. Rakesh M. Mehta having our main office in Mumbai.
                                    </p>
                                    <div className="footer__social">
                                        <ul className="social__shear d-flex">
                                            <li className="social__shear--list">
                                                <a className="social__shear--list__icon" target="_blank" href="#">
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                    <span className="visually-hidden">Facebook</span>
                                                </a>
                                            </li>
                                            <li className="social__shear--list">
                                                <a className="social__shear--list__icon" target="_blank" href="#">
                                                    <i className="fa-brands fa-instagram"></i>
                                                    <span className="visually-hidden">Instagram</span>
                                                </a>
                                            </li>
                                            <li className="social__shear--list">
                                                <a className="social__shear--list__icon" target="_blank" href="#">
                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                    <span className="visually-hidden">Linkedin</span>
                                                </a>
                                            </li>
                                            <li className="social__shear--list">
                                                <a className="social__shear--list__icon" href="#">
                                                    <i className="fa-brands fa-x-twitter"></i>
                                                    <span className="visually-hidden">Twitter</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer__widget">
                                <h2 className="footer__widget--title " onClick={acchandleClick1}>
                                    Quick Links
                                    <button type="button"
                                        className={`footer__widget--button ${quicklink ? 'active' : ''}`}
                                        aria-label="footer widget button" />
                                    <svg className="footer__widget--title__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394" viewBox="0 0 10.355 6.394">
                                        <path d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor" />
                                    </svg>
                                </h2>
                                <ul className={`footer__widget--menu footer__widget--inner ${quicklink ? 'active' : ''}`} >
                                    <li className="footer__widget--menu__list"><Link className="footer__widget--menu__text" to={'/'}>Home</Link></li>
                                    <li className="footer__widget--menu__list"><Link className="footer__widget--menu__text" to={'/about'}>About Us</Link></li>
                                    <li className="footer__widget--menu__list"><Link className="footer__widget--menu__text" to={'/newarrival'}>New Arrivals</Link></li>
                                    <li className="footer__widget--menu__list"><Link className="footer__widget--menu__text" to={'/contact'}>Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="footer__widget mobview">
                                <h2 className="footer__widget--title" onClick={acchandleClick2}>
                                    Product Categories<button type="button"
                                        className={`footer__widget--button ${product ? 'active' : ''}`}
                                        aria-label="footer widget button" />
                                    <svg className="footer__widget--title__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394" viewBox="0 0 10.355 6.394">
                                        <path d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor" />
                                    </svg>
                                </h2>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4">
                                        <ul className={`footer__widget--menu footer__widget--inner ${product ? 'active' : ''}`}>
                                            <li className="footer__widget--menu__list"><Link className="footer__widget--menu__text" to={'/acrylic'}>Acrylic And Plastics</Link></li>
                                            <li className="footer__widget--menu__list"><Link className="footer__widget--menu__text" to={'/anatomy'}>Anatomy Models</Link></li>
                                            <li className="footer__widget--menu__list"><Link className="footer__widget--menu__text" to={'/bags'}>Bags</Link></li>
                                            <li className="footer__widget--menu__list"><Link className="footer__widget--menu__text" to={'/crystal'}>Crystal</Link></li>
                                            <li className="footer__widget--menu__list"><Link className="footer__widget--menu__text" to={'/fiber'}>Fiber</Link></li>
                                            <li className="footer__widget--menu__list"><Link className="footer__widget--menu__text" to={'/shirtandtShirt'}>Shirt & T-Shirt</Link></li>
                                            <li className="footer__widget--menu__list"><Link className="footer__widget--menu__text" to={'/leatherite'}>Leautuerite</Link></li>
                                            <li className="footer__widget--menu__list"><Link className="footer__widget--menu__text" to={'/metal'}>Metal</Link></li>
                                            <li className="footer__widget--menu__list"><Link className="footer__widget--menu__text" to={'/sandtimers'}>Sand Timers</Link></li>
                                            <li className="footer__widget--menu__list"><Link className="footer__widget--menu__text" to={'/umbrella'}>Umbrella</Link></li>
                                            <li className="footer__widget--menu__list"><Link className="footer__widget--menu__text" to={'/spacepens'}>Space Pens</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="footer__widget deskview">
                                <h2 className="footer__widget--title">
                                    Product Categories<button className="footer__widget--button" aria-label="footer widget button" />
                                    <svg className="footer__widget--title__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394" viewBox="0 0 10.355 6.394">
                                        <path d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor" />
                                    </svg>
                                </h2>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <ul className="footer__widget--menu footer__widget--inner">
                                            <li className="footer__widget--menu__list"><Link className="footer__widget--menu__text" to={'/acrylic'}>Acrylic And Plastics</Link></li>
                                            <li className="footer__widget--menu__list"><Link className="footer__widget--menu__text" to={'/anatomy'}>Anatomy Models</Link></li>
                                            <li className="footer__widget--menu__list"><Link className="footer__widget--menu__text" to={'/bags'}>Bags</Link></li>
                                            <li className="footer__widget--menu__list"><Link className="footer__widget--menu__text" to={'/crystal'}>Crystal</Link></li>
                                            <li className="footer__widget--menu__list"><Link className="footer__widget--menu__text" to={'/fiber'}>Fiber</Link></li>
                                            <li className="footer__widget--menu__list"><Link className="footer__widget--menu__text" to={'/shirtandtShirt'}>Shirt & T-Shirt</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <ul className="footer__widget--menu footer__widget--inner">
                                            <li className="footer__widget--menu__list"><Link className="footer__widget--menu__text" to={'/leatherite'}>Leautuerite</Link></li>
                                            <li className="footer__widget--menu__list"><Link className="footer__widget--menu__text" to={'/metal'}>Metal</Link></li>
                                            <li className="footer__widget--menu__list"><Link className="footer__widget--menu__text" to={'/sandtimers'}>Sand Timers</Link></li>
                                            <li className="footer__widget--menu__list"><Link className="footer__widget--menu__text" to={'/umbrella'}>Umbrella</Link></li>
                                            <li className="footer__widget--menu__list"><Link className="footer__widget--menu__text" to={'/spacepens'}>Space Pens</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer__widget">
                                <h2 className="footer__widget--title " onClick={acchandleClick3}>
                                    Our Location  Map  <button type="button"
                                        className={`footer__widget--button ${homemap ? 'active' : ''}`}
                                        aria-label="footer widget button"/>
                                    <svg className="footer__widget--title__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394" viewBox="0 0 10.355 6.394">
                                        <path d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor" />
                                    </svg>
                                </h2>
                                <div className={`footer__newsletter footer__widget--inner ${homemap ? 'active' : ''}`}>
                                    <iframe className="footer__contact--map__frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.1356595758903!2d72.84299307596719!3d19.189276248405154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7c6ff755669%3A0xe838676f71dc30c6!2sMahesh%20%26%20Co!5e0!3m2!1sen!2sin!4v1698758723318!5m2!1sen!2sin" style={{ "border": "0" }} allowFullScreen loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom d-flex justify-content-between align-items-center">
                    <p className="copyright__content  m-0">
                        Copyright © 2023{' '}
                        <a className="copyright__content--link" href="#">
                            Mahesh &amp; Co
                        </a>
                        . All Rights Reserved.
                    </p>
                    <p className="footer__bottom--desc">
                        Designed By{' '}
                        <a href="https://technofra.com/">Technofra</a>.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

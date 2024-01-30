import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header__section">
        <div className="main__header main__header--style2 header__sticky">
          <div className="container">
            <div className="main__header--inner position__relative d-flex justify-content-between align-items-center">
              <div className="offcanvas__header--menu__open ">
                <a
                  className="offcanvas__header--menu__open--btn"
                  href="/"
                  data-offcanvas
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon offcanvas__header--menu__open--svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="32"
                      d="M80 160h352M80 256h352M80 352h352"
                    />
                  </svg>
                  <span className="visually-hidden">Offcanvas Menu Open</span>
                </a>
              </div>
              <div className="main__logo main__logo--style2">
                <h1 className="main__logo--title">
                  <a className="main__logo--link" href="#">
                    <img
                      className="main__logo--img"
                      src="./src/assets/img/logo/m.png"
                      alt="logo-img"
                    />
                  </a>
                </h1>
              </div>
              <div className="header__menu d-none d-lg-block">
                <nav className="header__menu--navigation">
                  <ul className="d-flex">
                    <li className="header__menu--items style2">
                      <Link to={'/'}
                        className="header__menu--link style2"
                      >
                        Home{" "}
                      </Link>
                    </li>
                    <li className="header__menu--items style2">
                      <Link to={'/about'}
                        className="header__menu--link style2"
                      >
                        About Us{" "}
                      </Link>
                    </li>
                    <li className="header__menu--items style2">
                      <a
                        className="header__menu--link style2"
                        href="/"
                      >
                        Our Products <span className="menu__plus--icon">+</span>
                      </a>
                      <ul className="header__sub--menu">
                      <li className="header__sub--menu__items">
                          <Link to={'/sanditems'} className="header__sub--menu__link">
                            Sand Items {""}
                          </Link>
                        </li>
                        <li className="header__sub--menu__items">
                          <Link to={'/bags'} className="header__sub--menu__link">
                            Bags{""}
                          </Link>
                        </li>
                        <li className="header__sub--menu__items">
                          <a
                            href="our-products.html"
                            className="header__sub--menu__link"
                          >
                            Plastic Table Tops
                          </a>
                        </li>
                        <li className="header__sub--menu__items">
                          <a href="#" className="header__sub--menu__link">
                            Gatrics Table Tops
                          </a>
                        </li>
                        
                        <li className="header__sub--menu__items">
                          <a href="#" className="header__sub--menu__link">
                            Fiber
                          </a>
                        </li>
                        <li className="header__sub--menu__items">
                          <a href="#" className="header__sub--menu__link">
                            Writing Instruments
                          </a>
                        </li>
                        <li className="header__sub--menu__items">
                          <a href="#" className="header__sub--menu__link">
                            Acrylic
                          </a>
                        </li>
                        <li className="header__sub--menu__items">
                          <a href="#" className="header__sub--menu__link">
                            Leautuerite
                          </a>
                        </li>
                        <li className="header__sub--menu__items">
                          <a href="#" className="header__sub--menu__link">
                            Metal Inputs
                          </a>
                        </li>
                        <li className="header__sub--menu__items">
                          <a href="#" className="header__sub--menu__link">
                            Clothing
                          </a>
                        </li>
                       
                      </ul>
                    </li>
                    <li className="header__menu--items style2">
                      <Link to={'/newarrival'}
                        className="header__menu--link style2"
                      >
                       NewArrival{""}
                      </Link>
                    </li>
                    <li className="header__menu--items style2">
                      <Link to={'/contact'}
                        className="header__menu--link style2"
                      >
                        Contact{" "}
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas-header" tabIndex="-1">
          <div className="offcanvas__inner">
            <div className="offcanvas__logo">
              <a className="offcanvas__logo_link" href="#">
                <img src="assets/img/logo/m.png" alt=" Logo" />
              </a>
              <button className="offcanvas__close--btn" data-offcanvas>
                close
              </button>
            </div>
            <nav className="offcanvas__menu">
              <ul className="offcanvas__menu_ul">
                <li className="offcanvas__menu_li">
                  <a className="offcanvas__menu_item" href="index.html">
                    Home
                  </a>
                </li>
                <li className="offcanvas__menu_li">
                  <a className="offcanvas__menu_item" href="about.html">
                    About Us{" "}
                  </a>
                </li>
                <li className="offcanvas__menu_li">
                  <a className="offcanvas__menu_item" href="/">
                    Our Products
                  </a>
                  <ul className="offcanvas__sub_menu">
                    <li className="offcanvas__sub_menu_li">
                      <a
                        href="our-products.html"
                        className="offcanvas__sub_menu_item"
                      >
                        Plastic Table Tops
                      </a>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <a href="#" className="offcanvas__sub_menu_item">
                        Gatrics Table Tops
                      </a>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <a href="#" className="offcanvas__sub_menu_item">
                        Sand Items
                      </a>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <a href="#" className="offcanvas__sub_menu_item">
                        Fiber
                      </a>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <a href="#" className="offcanvas__sub_menu_item">
                        Writing Instruments
                      </a>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <a href="#" className="offcanvas__sub_menu_item">
                        Acrylic
                      </a>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <a href="#" className="offcanvas__sub_menu_item">
                        Leautuerite
                      </a>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <a href="#" className="offcanvas__sub_menu_item">
                        Metal Inputs
                      </a>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <a href="#" className="offcanvas__sub_menu_item">
                        Clothing
                      </a>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <a href="#" className="offcanvas__sub_menu_item">
                        Bags
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="offcanvas__menu_li">
                  <a className="offcanvas__menu_item" href="launches.html">
                    Latest Launches
                  </a>
                </li>
                <li className="offcanvas__menu_li">
                  <a className="offcanvas__menu_item" href="contact.html">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

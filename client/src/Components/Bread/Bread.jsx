

import React from 'react';
import { Link } from 'react-router-dom';
import './bread.css'
const Bread = ({ pageTitle, pagePath }) => {
  return (
    <section className="breadcrumb__section breadcrumb__bg">
      <div className="container">
        <div className="row row-cols-1">
          <div className="col">
            <div className="breadcrumb__content">
              <h1 className="breadcrumb__content--title mb-10">{pageTitle}</h1>
              <ul className="breadcrumb__content--menu d-flex">
                <li className="breadcrumb__content--menu__items"><Link to={'/'}>Home</Link></li>
                {/* <li className="breadcrumb__content--menu__items"><Link to={'#'}>Our Products</Link></li> */}
                <li className="breadcrumb__content--menu__items">
                  {pagePath ? (
                    <Link to={pagePath}>
                      <span className="text__secondary">{pageTitle}</span>
                    </Link>
                  ) : (
                    <span className="text__secondary">{pageTitle}</span>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bread;

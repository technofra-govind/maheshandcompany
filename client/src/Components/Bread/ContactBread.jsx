import React from 'react';
import './contactbread.css'
import { Link } from 'react-router-dom';
const ConactBread = ({ pageTitle1, pagePath1 }) => {
  return (
    <section className="breadcrumb__section breadcrumb__bg1">
      <div className="container">
        <div className="row row-cols-1">
          <div className="col">
            <div className="breadcrumb__content">
              <h1 className="breadcrumb__content--title mb-10">{pageTitle1}</h1>
              <ul className="breadcrumb__content--menu d-flex">
                <li className="breadcrumb__content--menu__items"><Link to={'/'}>Home</Link></li>
                {/* <li className="breadcrumb__content--menu__items"><Link to={'#'}>Our Products</Link></li> */}
                <li className="breadcrumb__content--menu__items">
                  {pagePath1 ? (
                    <Link to={pagePath1}>
                      <span className="text__secondary">{pageTitle1}</span>
                    </Link>
                  ) : (
                    <span className="text__secondary">{pageTitle1}</span>
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

export default ConactBread;

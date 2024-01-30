

import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import 'glightbox/dist/css/glightbox.min.css'; // Import the styles
import GLightbox from 'glightbox';

function ProductComp({products}) {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.glightbox', // Use this class for elements that should be part of the lightbox
    });
  }, []);

  return (
    <>
      <section className="shop__section section--padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              <div className="shop__product--wrapper">
                <div className="tab_content">
                  <div id="product_grid" className="tab_pane active show">
                    <div
                      className="product__section--inner product__grid--inner"
                      id="myTable"
                    >
                      <div className="row row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 mb--n30">
                        {products.map((product, index) => (
                          <div key={index} className="col custom-col-2 mb-30">
                            <div className="portfolio__items">
                              <div className="portfolio__items--thumbnail position__relative">
                                <a
                                  className="portfolio__items--thumbnail__link"
                                  href="#"
                                >
                                  <img
                                    className="portfolio__items--thumbnail__img glightbox"
                                    src={product.imgSrc}
                                    alt="portfolio-img"
                                    data-glightbox={`title:${product.name}`}
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="product__card--content text-center">
                              <h3 className="product__card--title">
                                {product.name}
                              </h3>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductComp;

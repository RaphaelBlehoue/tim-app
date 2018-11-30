import React from "react";
import bannerOne from "assets/images/banner/banner-1.jpg";
import bannerTwo from "assets/images/banner/banner-2.jpg";

const Banner = () => (
  <div className="banner-section section mb-60">
    <div className="container">
      <div className="row row-10">
        <div className="col-md-8 col-12 mb-30">
          <div className="banner">
            <a href="/">
              <img src={bannerOne} alt="Banner" />
            </a>
          </div>
        </div>
        <div className="col-md-4 col-12 mb-30">
          <div className="banner">
            <a href="/">
              <img src={bannerTwo} alt="Banner" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;

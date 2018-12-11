import React from "react";
import PropTypes from "prop-types";

const BannerComponent = ({
  bannerSectionClassPadding,
  ImgUrl,
  ImgTitle,
  ImgPath,
  Class
}) => (
  <div className={`${bannerSectionClassPadding} banner-section section`}>
    <div className="container">
      <div className="row">
        <div className={Class}>
          <div className="banner">
            <a href={ImgUrl}>
              <img src={ImgPath} alt={ImgTitle} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

BannerComponent.defaultProp = {
  bannerSectionClassPadding: "mb-90",
  Class: "col-12",
  ImgUrl: "/"
};

BannerComponent.propTypes = {
  bannerSectionClassPadding: PropTypes.string,
  Class: PropTypes.string,
  ImgUrl: PropTypes.string,
  ImgTitle: PropTypes.string,
  ImgPath: PropTypes.string
};

export default BannerComponent;

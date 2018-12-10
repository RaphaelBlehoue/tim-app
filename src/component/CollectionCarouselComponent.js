import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Slider from "react-slick";
import ProductComponent from "./ProductComponent";

const nextArrow = (
  <button type="button" className="slick-prev">
    <i className="icofont icofont-long-arrow-right" />
  </button>
);

const prevArrow = (
  <button type="button" className="slick-next">
    <i className="icofont icofont-long-arrow-left" />
  </button>
);

const settings = {
  arrows: true,
  dots: false,
  autoplay: false,
  infinite: true,
  slidesToShow: 4,
  prevArrow,
  nextArrow,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        autoplay: true,
        slidesToShow: 2,
        arrows: false
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

const CollectionCarouselComponent = ({
  dataTitle,
  Title,
  products,
  isCarousel,
  isOpen
}) => (
  <div className="product-section section mb-70">
    <div className={isOpen ? "container-carousel" : "container"}>
      <div className="row">
        <div className="col-12 mb-40">
          <div className="section-title-one" data-title={dataTitle}>
            <h1>{Title}</h1>
          </div>
        </div>
        <div className="col-12">
          <div className="product-slider-wrap product-slider-arrow-one">
            <div className="product-slider product-slider-4">
              <Slider {...settings}>
                {products.map(product => (
                  <ProductComponent
                    key={product.Id}
                    product={product}
                    isCarousel={isCarousel}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  isOpen: state.UI.isSidebarOpen
});

CollectionCarouselComponent.propTypes = {
  products: PropTypes.array,
  Title: PropTypes.string,
  dataTitle: PropTypes.string,
  isCarousel: PropTypes.bool,
  isOpen: PropTypes.bool
};

export default connect(
  mapStateToProps,
  null
)(CollectionCarouselComponent);

import React from "react";
import ImgProduct from "styles/assets/images/product/product-5.png";

const ProductCarouselComponent = () => (
  <div className="ee-product">
    <div className="image">
      <a href="single-product.html" className="img">
        <img src={ImgProduct} alt="Product" />
      </a>

      <div className="wishlist-compare">
        <a href="/" data-tooltip="Compare">
          <i className="ti-control-shuffle" />
        </a>
        <a href="/" data-tooltip="Wishlist">
          <i className="ti-heart" />
        </a>
      </div>

      <a href="/" className="add-to-cart">
        <i className="ti-shopping-cart" />
        <span>ADD TO CART</span>
      </a>
    </div>
    <div className="content">
      <div className="category-title">
        <a href="/" className="cat">
          Laptop
        </a>
        <h5 className="title">
          <a href="single-product.html">Zeon Zen 4 Pro</a>
        </h5>
      </div>
      <div className="price-ratting">
        <h5 className="price">$295.00</h5>
        <div className="ratting">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star-half-o" />
          <i className="fa fa-star-o" />
        </div>
      </div>
    </div>
  </div>
);

export default ProductCarouselComponent;

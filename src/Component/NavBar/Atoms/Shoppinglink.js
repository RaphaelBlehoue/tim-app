import React from "react";

const Shoppinglink = () => (
  <div className="col order-2 order-lg-12 order-xl-12">
    <div className="header-shop-links">
      <a href="/" className="header-compare">
        <i className="ti-control-shuffle" />
      </a>
      <a href="/" className="header-wishlist">
        <i className="ti-heart" />
        <span className="number">3</span>
      </a>
      <a href="/" className="header-cart">
        <i className="ti-shopping-cart" />
        <span className="number">3</span>
      </a>
    </div>
  </div>
);

export default Shoppinglink;

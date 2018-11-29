import React from "react";

const Minicart = () => (
  <div className="mini-cart-wrap">
    <div className="mini-cart-top">
      <button className="close-cart" type="submit">
        Close Cart <i className="icofont icofont-close" />
      </button>
    </div>
    <ul className="mini-cart-products">
      <li>
        <a href="/" className="image">
          <img src="assets/images/product/product-1.png" alt="Product" />
        </a>
        <div className="content">
          <a href="single-product.html" className="title">
            Waxon Note Book Pro 5
          </a>
          <span className="price">Price: $295</span>
          <span className="qty">Qty: 02</span>
        </div>
        <button className="remove" type="submit">
          <i className="fa fa-trash-o" />
        </button>
      </li>
      <li>
        <a href="/" className="image">
          <img src="assets/images/product/product-2.png" alt="Product" />
        </a>
        <div className="content">
          <a href="single-product.html" className="title">
            Aquet Drone D 420
          </a>
          <span className="price">Price: $275</span>
          <span className="qty">Qty: 01</span>
        </div>
        <button className="remove" type="submit">
          <i className="fa fa-trash-o" />
        </button>
      </li>
    </ul>
    <div className="mini-cart-bottom">
      <h4 className="sub-total">
        Total: <span>$1160</span>
      </h4>
      <div className="button">
        <a href="checkout.html">CHECK OUT</a>
      </div>
    </div>
  </div>
);

export default Minicart;

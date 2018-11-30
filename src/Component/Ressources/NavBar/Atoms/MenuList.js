import React from "react";

const MenuList = () => (
  <nav>
    <ul>
      <li className="active">
        <a href="/">HOME</a>
      </li>
      <li className="menu-item-has-children">
        <a href="/">Shop</a>
        <ul className="sub-menu">
          <li className="menu-item-has-children">
            <a href="/">shop grid</a>
            <ul className="sub-menu">
              <li>
                <a href="/">shop grid</a>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="/">Single Product</a>
            <ul className="sub-menu">
              <li>
                <a href="/">Single Product 1</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="menu-item-has-children">
        <a href="/">PAGES</a>
        <ul className="mega-menu three-column">
          <li>
            <a href="/">Column One</a>
            <ul>
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Best Deals</a>
              </li>
              <li>
                <a href="/">Cart</a>
              </li>
              <li>
                <a href="/">Checkout</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">Column Two</a>
            <ul>
              <li>
                <a href="/">Compare</a>
              </li>
              <li>
                <a href="/">Faq</a>
              </li>
              <li>
                <a href="/">Feature</a>
              </li>
              <li>
                <a href="/">Login</a>
              </li>
              <li>
                <a href="/">Register</a>
              </li>
              <li>
                <a href="/">Store</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">Column Three</a>
            <ul>
              <li>
                <a href="/">Terms & Conditions</a>
              </li>
              <li>
                <a href="/">Track Order</a>
              </li>
              <li>
                <a href="/">Wishlist</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="menu-item-has-children">
        <a href="/">BLOG</a>
        <ul className="sub-menu">
          <li>
            <a href="/">Blog 1 Column Left Sidebar</a>
          </li>
          <li>
            <a href="/">Single Blog Left Sidebar</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="/">CONTACT</a>
      </li>
    </ul>
  </nav>
);

export default MenuList;

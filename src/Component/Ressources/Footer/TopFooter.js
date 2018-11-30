import React from "react";
import logo from "assets/images/logo.png";
import logolight from "assets/images/logo-light.png";

const TopFooter = () => (
  <div className="footer-top-section section pt-90 pb-50">
    <div className="container">
      {/* start first part */}
      <div className="row">
        <div className="col mb-90">
          <div className="footer-widget text-center">
            <div className="footer-logo">
              <img
                src={logo}
                alt="E&E - Electronics eCommerce Bootstrap4 HTML Template"
              />
              <img
                className="theme-dark"
                src={logolight}
                alt="E&E - Electronics eCommerce Bootstrap4 HTML Template"
              />
            </div>
            <p>
              Electronics product actual teachings of he great explorer of the
              truth, the malder of human happiness. No one rejects
            </p>
          </div>
        </div>
      </div>

      {/* start second part */}
      <div className="row">
        <div className="col-lg-3 col-md-6 col-12 mb-40">
          <div className="footer-widget">
            <h4 className="widget-title">CONTACT INFO</h4>

            <p className="contact-info">
              <span>Address</span>
              You address will be here <br /> Lorem Ipsum text
            </p>

            <p className="contact-info">
              <span>Phone</span>
              <a href="tel:01234567890">01234 567 890</a>
              <a href="tel:01234567891">01234 567 891</a>
            </p>

            <p className="contact-info">
              <span>Web</span>
              <a href="mailto:info@example.com">info@example.com</a>
              <a href="/">www.example.com</a>
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-12 mb-40">
          <div className="footer-widget">
            <h4 className="widget-title">CUSTOMER CARE</h4>

            <ul className="link-widget">
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">My Account</a>
              </li>
              <li>
                <a href="/">Cart</a>
              </li>
              <li>
                <a href="/">Checkout</a>
              </li>
              <li>
                <a href="/">Wishlist</a>
              </li>
              <li>
                <a href="/">blog</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-12 mb-40">
          <div className="footer-widget">
            <h4 className="widget-title">INFORMATION</h4>

            <ul className="link-widget">
              <li>
                <a href="/">Track your order</a>
              </li>
              <li>
                <a href="/">Locate Store</a>
              </li>
              <li>
                <a href="/">Online Support</a>
              </li>
              <li>
                <a href="/">Terms & Conditions</a>
              </li>
              <li>
                <a href="/">Payment</a>
              </li>
              <li>
                <a href="/">Shipping & Returns</a>
              </li>
              <li>
                <a href="/">Gift coupon</a>
              </li>
              <li>
                <a href="/">Special coupon</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12 mb-40">
          <div className="footer-widget">
            <h4 className="widget-title">LATEST TWEET</h4>
            <div className="footer-tweet" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TopFooter;

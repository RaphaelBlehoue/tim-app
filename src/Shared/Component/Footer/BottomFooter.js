import React from "react";
import payment from "assets/images/payment-support.png";

const BottomFooter = () => (
  <div className="footer-bottom-section section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-12">
          <div className="footer-copyright">
            <p>
              &copy; Copyright, 2018 All Rights Reserved by
              <a href="https://freethemescloud.com/">Free themes Cloud</a>
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="footer-payments-image">
            <img
              src={payment}
              alt="E&E - Electronics eCommerce Bootstrap4 HTML Template"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BottomFooter;

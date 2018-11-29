import React from "react";
import marker from "../../assets/images/icons/marker.png";
import car from "../../assets/images/icons/car.png";

const Headertop = () => (
  <div className="header-top header-top-one header-top-border pt-10 pb-10">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        {/* Header Links Start */}
        <div className="col mt-10 mb-10">
          <div className="header-links">
            <a href="/">
              <img src={car} alt="Car Icon" />
              <span>Track your order</span>
            </a>
            <a href="/">
              <img src={marker} alt="Map Icon" />
              <span>Locate Store</span>
            </a>
          </div>
        </div>
        {/* Header Links End */}
        {/* Header Advance Search Start */}
        <div className="col order-12 order-xs-12 order-lg-2 mt-10 mb-10">
          <div className="header-advance-search">
            <form>
              <div className="input">
                <input type="text" placeholder="Search your product" />
              </div>
              <div className="select">
                <select className="nice-select">
                  <option>All Categories</option>
                  <option>Mobile</option>
                  <option>Computer</option>
                  <option>Laptop</option>
                  <option>Camera</option>
                </select>
              </div>
              <div className="submit">
                <button type="submit">
                  <i className="icofont icofont-search-alt-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Header Advance Search End */}
        <div className="col order-2 order-xs-2 order-lg-12 mt-10 mb-10">
          <div className="header-account-links">
            <a href="/">
              <i className="icofont icofont-user-alt-7" />
              <span>my account</span>
            </a>
            <a href="/">
              <i className="icofont icofont-login d-none" />
              <span>Login</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Headertop;

import React from "react";

const Headercategory = () => (
  <div className="header-category-section">
    <div className="container">
      <div className="row">
        <div className="col" />
        <div className="header-category">
          <div className="category-toggle-wrap d-block d-lg-none">
            <button className="category-toggle" type="submit">
              Categories <i className="ti-menu" />
            </button>
          </div>

          <nav className="category-menu">
            <ul>
              <li>
                <a href="category-1.html">Tv & Audio System</a>
              </li>
              <li>
                <a href="category-2.html">Computer & Laptop</a>
              </li>
              <li>
                <a href="category-3.html">Phones & Tablets</a>
              </li>
              <li>
                <a href="category-1.html">Home Appliances</a>
              </li>
              <li>
                <a href="category-2.html">Kitchen appliances</a>
              </li>
              <li>
                <a href="category-3.html">Accessories</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
);

export default Headercategory;

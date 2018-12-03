import React from "react";

const SearchNav = () => (
  <div className="col order-12 order-xs-12 order-lg-2 mt-10 mb-10">
    <div className="header-advance-search">
      <form>
        <div className="input">
          <input type="text" />
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
);

export default SearchNav;

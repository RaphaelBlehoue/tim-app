import React from "react";
import SearchSelect from "./SearchSelect";

const SearchNav = () => (
  <div className="col order-12 order-xs-12 order-lg-2 mt-10 mb-10">
    <div className="header-advance-search">
      <form>
        <div className="input">
          <input type="text" />
        </div>
        <SearchSelect />
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

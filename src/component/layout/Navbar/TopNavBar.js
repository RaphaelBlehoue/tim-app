import React from "react";
import Headroom from "react-headroom";
import logo from "styles/global_assets/images/logo_new.svg";
import MobileNav from "./MobileNav";

const TopNavBar = () => (
  <Headroom
    style={{
      zIndex: 1040,
      marginBottom: "20px"
    }}
  >
    <div className="navbar navbar-expand-md navbar-light zindex">
      <div className="navbar-brand wmin-200">
        <a href="/" className="d-inline-block mt-2">
          <img src={logo} alt="text logo" />
        </a>
      </div>
      <div className="d-md-none">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-mobile"
        >
          <i className="icon-tree5" />
        </button>
        <button
          className="navbar-toggler sidebar-mobile-main-toggle"
          type="button"
        >
          <i className="icon-paragraph-justify3" />
        </button>
      </div>
      <MobileNav />
    </div>
  </Headroom>
);

export default TopNavBar;

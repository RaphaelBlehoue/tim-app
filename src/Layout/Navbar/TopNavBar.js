import React from "react";
import logo from "global_assets/images/logo_new.svg";
import MobileNav from "Layout/Navbar/MobileNav";

const TopNavBar = () => (
  <div className="navbar navbar-expand-md navbar-light navbar-sticky">
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
);

export default TopNavBar;

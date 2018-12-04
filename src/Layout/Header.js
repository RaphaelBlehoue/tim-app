import React from "react";
import logo from "global_assets/images/logo_light.png";

const Header = () => (
  <div className="navbar navbar-expand-md navbar-dark">
    <div className="navbar-brand wmin-200">
      <a href="/" className="d-inline-block">
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
    </div>
  </div>
);

export default Header;

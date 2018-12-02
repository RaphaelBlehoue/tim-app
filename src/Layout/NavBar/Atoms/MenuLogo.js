import React from "react";
import logo from "assets/images/logo.png";
import logolight from "assets/images/logo-light.png";

const MenuLogo = () => (
  <div className="col mt-15 mb-15">
    <div className="header-logo">
      <a href="/">
        <img
          src={logo}
          alt="E&E - Electronics eCommerce Bootstrap4 HTML Template"
        />
        <img
          className="theme-dark"
          src={logolight}
          alt="E&E - Electronics eCommerce Bootstrap4 HTML Template"
        />
      </a>
    </div>
  </div>
);

export default MenuLogo;

import React from "react";
import MenuLogo from "./Atoms/MenuLogo";
import Menu from "./Atoms/Menu";
import ShoppingLink from "./Atoms/ShoppingLink";

const HeaderBottom = () => (
  <div className="header-bottom header-bottom-one header-sticky">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <MenuLogo />
        <Menu />
        <ShoppingLink />
        <div className="mobile-menu order-12 d-block d-lg-none col" />
      </div>
    </div>
  </div>
);

export default HeaderBottom;

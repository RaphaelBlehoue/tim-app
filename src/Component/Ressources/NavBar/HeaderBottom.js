import React from "react";
import Menulogo from "./Atoms/Menulogo";
import Menu from "./Atoms/Menu";
import Shoppinglink from "./Atoms/Shoppinglink";

const HeaderBottom = () => (
  <div className="header-bottom header-bottom-one header-sticky">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <Menulogo />
        <Menu />
        <Shoppinglink />
        <div className="mobile-menu order-12 d-block d-lg-none col" />
      </div>
    </div>
  </div>
);

export default HeaderBottom;

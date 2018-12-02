import React from "react";
import HeaderTop from "./NavBar/HeaderTop";
import HeaderBottom from "./NavBar/HeaderBottom";
import HeaderCategory from "./NavBar/HeaderCategory";

const Header = () => (
  <div className="header-section section">
    <HeaderTop />
    <HeaderBottom />
    <HeaderCategory />
  </div>
);

export default Header;

import React from "react";
import HeaderTop from "Shared/Component/NavBar/HeaderTop";
import HeaderBottom from "Shared/Component/NavBar/HeaderBottom";
import HeaderCategory from "Shared/Component/NavBar/HeaderCategory";

const Header = () => (
  <div className="header-section section">
    <HeaderTop />
    <HeaderBottom />
    <HeaderCategory />
  </div>
);

export default Header;

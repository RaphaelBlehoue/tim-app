import React from "react";
import Headertop from "Component/Ressources/NavBar/Headertop";
import Headerbottom from "Component/Ressources/NavBar/Headerbottom";
import Headercategory from "Component/Ressources/NavBar/Headercategory";

const Header = () => (
  <div className="header-section section">
    <Headertop />
    <Headerbottom />
    <Headercategory />
  </div>
);

export default Header;

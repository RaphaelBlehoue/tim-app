import React from "react";
import Headertop from "./Component/NavBar/Headertop";
import Headerbottom from "./Component/NavBar/Headerbottom";
import Headercategory from "./Component/NavBar/Headercategory";
import Minicart from "./Component/BeforeBanner/Minicart";

const App = () => (
  <React.Fragment>
    <div className="header-section section">
      <Headertop />
      <Headerbottom />
      <Headercategory />
    </div>
    <Minicart />
    <div className="cart-overlay" />
  </React.Fragment>
);

export default App;

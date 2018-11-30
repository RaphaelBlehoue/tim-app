import React from "react";

const HeroItem = () => (
  <div className="hero-item">
    <div className="row align-items-center justify-content-between">
      {/* Hero Content */}
      <div className="hero-content col">
        <h2>HURRY UP!</h2>
        <h1>
          <span>uPhone X</span>
        </h1>
        <h1>
          IT’S <span className="big">29%</span> OFF
        </h1>
        <a href="/">get it now</a>
      </div>
      {/* Hero image */}
      <div className="hero-image col">
        <img src="assets/images/hero/hero-1.png" alt="Hero conteneur" />
      </div>
    </div>
  </div>
);

export default HeroItem;

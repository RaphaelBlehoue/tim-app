import React from "react";
import { Col } from "react-bootstrap";
import logo from "assets/images/logo.png";
import logolight from "assets/images/logo-light.png";

const Logo = () => (
  <Col className=" mt-15 mb-15">
    <div className="header-logo">
      <a href="/">
        <img src={logo} alt="Timite & Sons Ecommerce" />
        <img
          className="theme-dark"
          src={logolight}
          alt="Timite & Sons Ecommerce"
        />
      </a>
    </div>
  </Col>
);

export default Logo;

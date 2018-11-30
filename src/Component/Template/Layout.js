import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import MiniCart from "./MiniCart";

const Layout = ({ children }) => (
  <div>
    <Header />
    <MiniCart />
    <div className="cart-overlay" />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default Layout;

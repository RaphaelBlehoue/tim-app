import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => <div>{children}</div>;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.node
  ])
};

export default Layout;

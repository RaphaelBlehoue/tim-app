import React from "react";
import PropTypes from "prop-types";

const LinkIcon = ({ icon, title, links }) => (
  <>
    <a href={links}>
      <img src={icon} alt={title} />
      <span>{title}</span>
    </a>
  </>
);

LinkIcon.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.string.isRequired,
  links: PropTypes.any
};

export default LinkIcon;

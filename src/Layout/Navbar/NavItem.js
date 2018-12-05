import React from "react";
import PropTypes from "prop-types";

const NavItem = ({
  link,
  icon,
  title,
  subtitle,
  hasBadge,
  BadgeValue,
  classNamer
}) => (
  <li className="nav-item">
    <a href={link} className={classNamer}>
      <div className="d-flex align-items-center">
        <i className={`${icon} mr-2`} />
        <div>
          {title} <div className="opacity-50">{subtitle}</div>
        </div>
        {hasBadge ? (
          <span className="badge badge-pill bg-warning-400 ml-auto ml-md-0">
            {BadgeValue}
          </span>
        ) : null}
      </div>
    </a>
  </li>
);

NavItem.defaultProps = {
  classNamer: "navbar-nav-link"
};

NavItem.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  classNamer: PropTypes.string,
  link: PropTypes.any,
  hasBadge: PropTypes.bool,
  BadgeValue: PropTypes.number
};

export default NavItem;

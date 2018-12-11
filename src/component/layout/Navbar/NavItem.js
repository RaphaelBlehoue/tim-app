import React, { Component } from "react";
import { connect } from "react-redux";
import { openSideBar, closeSideBar } from "Modules/UI/UIActions";
import PropTypes from "prop-types";

class NavItem extends Component {
  state = { isOpenSide: false };

  ToggleClick = e => {
    e.preventDefault();
    this.setState(state => ({
      isOpenSide: !state.isOpenSide
    }));
    const { isOpenSide } = this.state;
    return this.handClick(isOpenSide);
  };

  handClick = state => {
    const { openSideBar, closeSideBar } = this.props;
    switch (state) {
      case false:
        document.body.classList.remove("sidebar-xs");
        return openSideBar();
      case true:
        document.body.classList.add("sidebar-xs");
        return closeSideBar();
      default:
        return null;
    }
  };

  render() {
    const {
      link,
      icon,
      title,
      subtitle,
      hasBadge,
      BadgeValue,
      classNamer,
      hasCliqued
    } = this.props;
    return (
      <li className="nav-item">
        {hasCliqued ? (
          <a href={link} className={classNamer} onClick={this.ToggleClick}>
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
        ) : (
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
        )}
      </li>
    );
  }
}

NavItem.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  classNamer: PropTypes.string,
  link: PropTypes.any,
  hasBadge: PropTypes.bool,
  BadgeValue: PropTypes.number,
  hasCliqued: PropTypes.bool,
  openSideBar: PropTypes.func,
  closeSideBar: PropTypes.func
};

NavItem.defaultProps = {
  classNamer: "navbar-nav-link"
};

export default connect(
  null,
  { openSideBar, closeSideBar }
)(NavItem);

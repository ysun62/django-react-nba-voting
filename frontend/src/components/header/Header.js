import React from "react";
import { NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

import "./Header.css";

class Header extends React.Component {
  state = {
    subMenuOpen: false
  };

  subMenuOpenHandler = () => {
    this.setState(prevState => {
      return { subMenuOpen: !prevState.subMenuOpen };
    });
  };

  subMenuCloseHandler = () => {
    this.setState({
      subMenuOpen: false
    });
  };

  render() {
    let subMenuClasses_desktop = "sub-menu-desktop";
    if (this.state.subMenuOpen) {
      subMenuClasses_desktop = "sub-menu-desktop open";
    }

    return (
      <header>
        <nav className="navbar">
          <i
            className="fas fa-bars burger"
            onClick={this.props.sideDrawerOpenHandler}
          ></i>
          <div className="header_logo">
            <Link to="/" onClick={this.subMenuCloseHandler}>
              NBA VOTING
            </Link>
          </div>
          <div className="spacer"></div>
          <ul className="desktop-ul">
            <li onClick={this.subMenuCloseHandler}>
              {this.props.auth.isAuthenticated ? (
                <Link to="/" onClick={this.props.logout}>
                  Sign Out
                </Link>
              ) : (
                <Link to="/login">Sign In/Up</Link>
              )}
            </li>
            <li onClick={this.subMenuCloseHandler}>
              <Link to="/">Home</Link>
            </li>
            <li className="sub-menu-li">
              <div
                className="roster-div-desktop"
                onClick={this.subMenuOpenHandler}
                style={{ color: this.state.subMenuOpen && "#1D428A" }}
              >
                Roster
                <i className="fas fa-sort-down sort-down-desktop"></i>
              </div>
              <ul className={subMenuClasses_desktop}>
                <li onClick={this.subMenuCloseHandler}>
                  <NavLink to="/roster/lakers" activeClassName="active">
                    Lakers
                  </NavLink>
                </li>
                <li onClick={this.subMenuCloseHandler}>
                  <NavLink to="/roster/celtics" activeClassName="active">
                    Celtics
                  </NavLink>
                </li>
                <li onClick={this.subMenuCloseHandler}>
                  <NavLink to="/roster/rockets" activeClassName="active">
                    Rockets
                  </NavLink>
                </li>
                <li onClick={this.subMenuCloseHandler}>
                  <NavLink to="/roster/raptors" activeClassName="active">
                    Raptors
                  </NavLink>
                </li>
                <li onClick={this.subMenuCloseHandler}>
                  <NavLink to="/roster/clippers" activeClassName="active">
                    Clippers
                  </NavLink>
                </li>
                <li onClick={this.subMenuCloseHandler}>
                  <NavLink to="/roster/bucks" activeClassName="active">
                    Bucks
                  </NavLink>
                </li>
              </ul>
            </li>
            {/* <li onClick={this.subMenuCloseHandler}>
              <Link to="/register">Register</Link>
            </li> */}
          </ul>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  sideDrawerOpenHandler: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header);

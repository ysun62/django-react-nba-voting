import React, { Component } from "react";
import { NavLink, Link, Redirect } from "react-router-dom";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/auth";

import "./Login.css";

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: ""
  };

  onSubmit = e => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    if (password !== password2) {
      this.props.alert.error("Passwords Do Not Match!");
    } else {
      const newUser = {
        username,
        email,
        password
      };
      this.props.register(newUser);
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, email, password, password2 } = this.state;
    return (
      <div className="background">
        <div className="form">
          <div className="PageSwitcher">
            <NavLink
              to="/login"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item"
            >
              Sign In
            </NavLink>
            <NavLink
              exact
              to="/register"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item"
            >
              Register
            </NavLink>
          </div>
          <form onSubmit={this.onSubmit}>
            <div className="form-group tider">
              <label className="font-white">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.onChange}
                value={username}
                required
              />
            </div>
            <div className="form-group tider">
              <label className="font-white">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={this.onChange}
                value={email}
                required
              />
            </div>
            <div className="form-group tider">
              <label className="font-white">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
                required
              />
            </div>
            <div className="form-group tider">
              <label className="font-white">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="password2"
                onChange={this.onChange}
                value={password2}
                required
              />
            </div>
            <div className="form-group tider">
              <div className="FormField">
                <button className="FormField__Button mr-20">Create</button>
                <p className="font-white">
                  Already have an account?{" "}
                  <Link to="/login" className="page-switch-link">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  subMenuCloseHandler: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(withAlert()(Register));

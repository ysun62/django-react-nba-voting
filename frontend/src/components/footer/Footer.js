import React from "react";
import PropTypes from "prop-types";

import "./Footer.css";

const Footer = props => {
  return (
    <footer>
      <i
        className="fas fa-basketball-ball"
        onClick={() => {
          props.modalOpenHandler();
          props.subMenuCloseHandler();
        }}
      ></i>
    </footer>
  );
};

Footer.propTypes = {
  modalOpenHandler: PropTypes.func.isRequired,
  subMenuCloseHandler: PropTypes.func.isRequired
};

export default Footer;

import React from "react";
import "./Backdrop.css";
import PropTypes from "prop-types";

function Backdrop(props) {
  return (
    <div
      className="backdrop"
      onClick={() => {
        props.sideDrawerCloseHandler();
        props.subMenuCloseHandler();
        props.modalCloseHandler();
      }}
    ></div>
  );
}

Backdrop.propTypes = {
  sideDrawerCloseHandler: PropTypes.func.isRequired,
  subMenuCloseHandler: PropTypes.func.isRequired,
  modalCloseHandler: PropTypes.func.isRequired
};

export default Backdrop;

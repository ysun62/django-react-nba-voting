import React from "react";
import "./Footer.css";

const Footer = props => {
  return (
    <footer>
      <i
        className="fas fa-basketball-ball"
        onClick={props.modalOpenHandler}
      ></i>
    </footer>
  );
};

export default Footer;

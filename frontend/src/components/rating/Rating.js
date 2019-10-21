import React from "react";
import "./Rating.css";
import PropTypes from "prop-types";

function Rating(props) {
  const { thumbUp, thumbDown, id, votedUpColor, votedDownColor } = props.team;
  return (
    <div className="rating">
      <button
        className="thumb-up up"
        style={votedUpColor}
        onClick={e => props.onClickHandler(id, e)}
      >
        <i className="far fa-thumbs-up up"></i>
        <span style={{ userSelect: "none" }} className="up">
          {thumbUp}
        </span>
      </button>
      <button
        className="thumb-down down"
        style={votedDownColor}
        onClick={e => props.onClickHandler(id, e)}
      >
        <i className="far fa-thumbs-down down"></i>
        <span style={{ userSelect: "none" }} className="down">
          {thumbDown}
        </span>
      </button>
    </div>
  );
}

Rating.propTypes = {
  team: PropTypes.object.isRequired,
  onClickHandler: PropTypes.func.isRequired
};

export default Rating;

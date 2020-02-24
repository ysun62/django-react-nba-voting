import React from "react";
import "./Rating.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function Rating(props) {
  const { thumbUp, thumbDown, id, votedUpColor, votedDownColor } = props.team;
  const { upVote, downVote, onClickHandler } = props;
  const { user } = props.auth;

  let thumbUpColor =
    user && id === upVote ? { color: "#1E95E0" } : votedUpColor;
  let thumbDownColor =
    user && id === downVote ? { color: "#F8004C" } : votedDownColor;

  return (
    <div className="rating">
      <button
        className="thumb-up up"
        style={thumbUpColor}
        onClick={e => onClickHandler(id, e)}
      >
        <i className="far fa-thumbs-up up"></i>
        <span style={{ userSelect: "none" }} className="up">
          {thumbUp}
        </span>
      </button>
      <button
        className="thumb-down down"
        style={thumbDownColor}
        onClick={e => onClickHandler(id, e)}
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

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Rating);

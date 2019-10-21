import React from "react";
import "./Team.css";
import Rating from "../rating/Rating";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Team(props) {
  const { id, teamBackground, textColor, name } = props.team;

  return (
    <div className="team">
      {/* <img src={props.team.img} alt="team logo"/> */}
      <div className="team-background" style={teamBackground}>
        <Link to={"/roster/" + id}>
          <h3 style={textColor}>{name}</h3>
        </Link>
      </div>
      <Rating onClickHandler={props.onClickHandler} team={props.team} />
    </div>
  );
}

Team.propTypes = {
  team: PropTypes.object.isRequired,
  onClickHandler: PropTypes.func.isRequired
};

export default Team;

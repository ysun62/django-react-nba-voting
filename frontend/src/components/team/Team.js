import React from "react";
import "./Team.css";
import Rating from "../rating/Rating";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Team = props => {
  const { id, teamBackground, textColor, name } = props.team;

  let logoClasses = "team-logo";
  if (id === "lakers") logoClasses = "team-logo lakers-logo";
  if (id === "raptors") logoClasses = "team-logo raptors-logo";

  return (
    <div className="team">
      <div className="team-background" style={teamBackground}>
        <Link to={"/roster/" + id}>
          <img
            src={require(`./logo/${id}.png`)}
            alt="team logo"
            className={logoClasses}
          />
        </Link>
      </div>
      {/* <div className="team-background" style={teamBackground}>
        <Link to={"/roster/" + id}>
          <h3 style={textColor}>{name}</h3>
        </Link>
      </div> */}
      <Rating
        upVote={props.upVote}
        downVote={props.downVote}
        onClickHandler={props.onClickHandler}
        team={props.team}
        user={props.user}
      />
    </div>
  );
};

Team.propTypes = {
  team: PropTypes.object.isRequired,
  onClickHandler: PropTypes.func.isRequired
};

export default Team;

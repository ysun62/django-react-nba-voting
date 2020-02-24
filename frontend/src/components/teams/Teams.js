import React from "react";
import "./Teams.css";
import Team from "../team/Team";
import PropTypes from "prop-types";

function Teams(props) {
  return (
    <div className="teams">
      {props.teams.map(team => (
        <Team
          key={team.id}
          upVote={props.upVote}
          downVote={props.downVote}
          team={team}
          onClickHandler={props.onClickHandler}
        />
      ))}
    </div>
  );
}

Teams.propTypes = {
  teams: PropTypes.array.isRequired,
  onClickHandler: PropTypes.func.isRequired
};

export default Teams;

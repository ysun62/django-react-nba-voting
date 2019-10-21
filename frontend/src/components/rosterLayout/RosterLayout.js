import React from "react";
import PlayerCard from "../playerCard/PlayerCard";
import "./RosterLayout.css";

const RosterLayout = props => {
  const { roster, teamName, teamBackground, textColor } = props.data;

  // style={teamBackground}
  return (
    <div className="roster-layout">
      <h2 style={textColor}>{teamName}</h2>
      <div className="player-cards">
        {roster.players.player.map(player => (
          <PlayerCard
            key={player.jersey_number}
            player={player}
            teamBackground={teamBackground}
            textColor={textColor}
          />
        ))}
      </div>
    </div>
  );
};

export default RosterLayout;

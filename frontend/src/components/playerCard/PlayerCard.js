import React from "react";
import "./PlayerCard.css";

const PlayerCard = props => {
  const { background } = props.teamBackground;
  const { color } = props.textColor;

  const cardStyle = {
    boxShadow: "0px 0px 2px " + background,
    border: "2px solid " + background,
    borderLeft: "5px solid " + background,
    borderRight: "5px solid " + background,
    background: background
  };

  const {
    first_name,
    last_name,
    position_short,
    jersey_number,
    years_pro,
    height_ft,
    height_in,
    weight_lbs
  } = props.player;

  const playerName = first_name + " " + last_name;

  return (
    <div className="player-card" style={cardStyle}>
      <section>
        <h4 style={{ color: color }}>{playerName}</h4>
        <div>#{jersey_number}</div>
      </section>
      <section>
        <div className="row">
          <span>Pos: {position_short}</span>
          <span>YR: {years_pro}</span>
        </div>
        <div className="row">
          <span>
            HT: {height_ft}-{height_in}
          </span>
          <span>WT: {weight_lbs}</span>
        </div>
      </section>
    </div>
  );
};

export default PlayerCard;

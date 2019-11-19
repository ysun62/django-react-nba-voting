import React from "react";
import RosterLayout from "../rosterLayout/RosterLayout";
import celtics from "../../api/celtics.json";

class Celtics extends React.Component {
  state = {
    roster: celtics,
    teamName: "Celtics",
    teamBackground: { background: "rgba(0,127,71, 0.8)" },
    textColor: { color: "#F8F8F8" }
  };

  render() {
    return (
      <div>
        <RosterLayout data={this.state} />
      </div>
    );
  }
}

export default Celtics;

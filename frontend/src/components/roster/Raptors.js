import React from "react";
import RosterLayout from "../rosterLayout/RosterLayout";
import raptors from "../../api/raptors.json";

class Raptors extends React.Component {
  state = {
    roster: raptors,
    teamName: "Raptors",
    teamBackground: { background: "rgba(0,0,0, 0.8)" },
    textColor: { color: "#C7113F" }
  };

  render() {
    return (
      <div>
        <RosterLayout data={this.state} />
      </div>
    );
  }
}

export default Raptors;

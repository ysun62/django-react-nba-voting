import React from "react";
import RosterLayout from "../rosterLayout/RosterLayout";
import bucks from "../../api/bucks.json";
// import PropTypes from "prop-types";

class Bucks extends React.Component {
  state = {
    roster: bucks,
    teamName: "Bucks",
    teamBackground: { background: "#E1CAA2" },
    textColor: { color: "#295133" }
  };

  render() {
    return (
      <div>
        <RosterLayout data={this.state} />
      </div>
    );
  }
}

// Bucks.propTypes = {
//   subMenuCloseHandler: PropTypes.func.isRequired
// };

export default Bucks;

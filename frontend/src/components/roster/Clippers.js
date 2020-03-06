import React from "react";
import RosterLayout from "../rosterLayout/RosterLayout";
import clippers from "../../api/clippers.json";
// import PropTypes from "prop-types";

class Clippers extends React.Component {
  state = {
    roster: clippers,
    teamName: "Clippers",
    teamBackground: { background: "rgba(218,35,63, 0.8)" },
    textColor: { color: "#00589C" }
  };

  render() {
    return (
      <div>
        <RosterLayout data={this.state} />
      </div>
    );
  }
}

// Clippers.propTypes = {
//   subMenuCloseHandler: PropTypes.func.isRequired
// };

export default Clippers;

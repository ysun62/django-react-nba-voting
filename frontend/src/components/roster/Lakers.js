import React from "react";
import RosterLayout from "../rosterLayout/RosterLayout";
import lakers from "../../api/lakers.json";
// import PropTypes from "prop-types";

class Lakers extends React.Component {
  state = {
    roster: lakers,
    teamName: "Lakers",
    teamBackground: { background: "rgba(84,35,127,0.8)" },
    textColor: { color: "#f8b428" }
  };

  render() {
    return (
      <div>
        <RosterLayout data={this.state} />
      </div>
    );
  }
}

// Lakers.propTypes = {
//   subMenuCloseHandler: PropTypes.func.isRequired
// };

export default Lakers;

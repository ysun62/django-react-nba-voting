import React from "react";
import RosterLayout from "../rosterLayout/RosterLayout";
import rockets from "../../api/rockets.json";
// import PropTypes from "prop-types";

class Rockets extends React.Component {
  state = {
    roster: rockets,
    teamName: "Rockets",
    teamBackground: { background: "rgba(248,248,248,1)" },
    textColor: { color: "#B91E38" }
  };

  render() {
    return (
      <div>
        <RosterLayout data={this.state} />
        {/* {console.log(this.state.roster)} */}
      </div>
    );
  }
}

// Rockets.propTypes = {
//   subMenuCloseHandler: PropTypes.func.isRequired
// };

export default Rockets;

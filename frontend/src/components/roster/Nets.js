import React from "react";
import RosterLayout from "../rosterLayout/RosterLayout";
import nets from "../../api/nets.json";
// import PropTypes from 'prop-types'

class Nets extends React.Component {
  state = {
    roster: nets,
    teamName: "Nets",
    teamBackground: { background: "rgba(255,255,255, 0.8)" },
    textColor: { color: "black" }
  };

  render() {
    return (
      <div>
        <RosterLayout data={this.state} />
      </div>
    );
  }
}

// Nets.propTypes = {

// }

export default Nets;

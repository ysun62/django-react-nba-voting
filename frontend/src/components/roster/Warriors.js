import React from "react";
import RosterLayout from "../rosterLayout/RosterLayout";
import warriors from "../../api/warriors.json";
// import PropTypes from 'prop-types'

class Warriors extends React.Component {
  state = {
    roster: warriors,
    teamName: "Warriors",
    teamBackground: { background: "rgba(246,180,38, 0.8)" },
    textColor: { color: "#02569e" }
  };

  render() {
    return (
      <div>
        <RosterLayout data={this.state} />
        {/* {console.log(this.state.roster.players.player)} */}
      </div>
    );
  }
}

// Warriors.propTypes = {

// }

export default Warriors;

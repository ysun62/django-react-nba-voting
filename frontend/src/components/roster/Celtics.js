import React from "react";
import RosterLayout from "../rosterLayout/RosterLayout";
import celtics from "../../api/celtics.json";
import PropTypes from "prop-types";

class Celtics extends React.Component {
  state = {
    roster: celtics,
    teamName: "Celtics",
    teamBackground: { background: "rgba(0,127,71, 0.8)" },
    textColor: { color: "#F8F8F8" }
  };

  render() {
    return (
      <div
        onClick={() => {
          this.props.subMenuCloseHandler();
        }}
      >
        <RosterLayout data={this.state} />
      </div>
    );
  }
}

Celtics.propTypes = {
  subMenuCloseHandler: PropTypes.func.isRequired
};

export default Celtics;

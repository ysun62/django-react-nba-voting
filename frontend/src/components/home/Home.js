import React from "react";
import axios from "axios";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { update_up, update_down } from "../../actions/auth";

import Teams from "../teams/Teams";
import teams from "../../api/teams.json";
import "./Home.css";

export class Home extends React.Component {
  state = {
    upVote: "",
    downVote: "",
    clickedTeam: "",
    teams: teams
  };

  // When component mounted, add in thumbUp & thumbDown properties to each team
  componentDidMount() {
    const { user } = this.props.auth;
    if (user) {
      this.setState({
        upVote: user.upVote,
        downVote: user.downVote
      });
    }
    axios.get("/api/teams/").then(res => {
      this.setState({
        teams: this.state.teams.map(team => {
          res.data.map(vote => {
            if (vote.id === team.id) {
              team.thumbUp = vote.thumbUp;
              team.thumbDown = vote.thumbDown;
            }
          });
          return team;
        })
      });
    });
  }

  // When props from Redux come in, set the state
  UNSAFE_componentWillReceiveProps(nextProps) {
    const { user } = nextProps.auth;
    if (user) {
      this.setState({
        upVote: user.upVote,
        downVote: user.downVote
      });
    }
  }

  // Handle click on thumbs
  onClickHandler = async (id, e) => {
    const { alert } = this.props;
    const up = e.target.classList.contains("up");

    if (this.props.auth.isAuthenticated) {
      if (up && this.state.upVote === "") {
        if (id === this.state.downVote) {
          alert.error("You cannot up vote and down vote the same team!");
        } else {
          await this.props.update_up(id);
          this.setState(prevState => {
            return {
              teams: prevState.teams.map(team => {
                if (id === team.id) {
                  team.thumbUp = team.thumbUp + 1;
                  team.votedUpColor = { color: "#1E95E0" };
                }
                return team;
              }),
              clickedTeam: id,
              upVote: id
            };
          });
          alert.show(`You Up Voted ${id}`);
        }
      } else if (!up && this.state.downVote === "") {
        if (id === this.state.upVote) {
          alert.error("You cannot up vote and down vote the same team!");
        } else {
          await this.props.update_down(id);
          this.setState(prevState => {
            return {
              teams: prevState.teams.map(team => {
                if (id === team.id) {
                  team.thumbDown = team.thumbDown + 1;
                  team.votedDownColor = { color: "#F8004C" };
                }
                return team;
              }),
              clickedTeam: id,
              downVote: id
            };
          });
          alert.show(`You Down Voted ${id}`);
        }
      } else {
        alert.show("You have already voted.");
      }
    } else {
      alert.show("Please log in first!");
      this.props.history.push(`/login`);
    }
  };

  // When user votes, update the db before updating the state
  UNSAFE_componentWillUpdate(newProps, newState) {
    newState.teams.map(team => {
      if (team.id === newState.clickedTeam) {
        axios.put(`/api/teams/${newState.clickedTeam}/`, {
          id: team.id,
          thumbUp: team.thumbUp,
          thumbDown: team.thumbDown
        });
      }
    });
  }

  render() {
    // Welcome header message when user logs in
    const { isAuthenticated, user } = this.props.auth;
    const { upVote, downVote } = this.state;
    const welcome_header = (
      <div className="welcome-header">
        <h4 style={{ textAlign: "left" }} className="welcome-header-line">
          Welcome, {user && user.username}!
        </h4>
        <h4 style={{ textAlign: "left" }} className="welcome-header-line">
          <span>
            Your Vote:{" "}
            <i className="far fa-thumbs-up up" style={{ color: "#1E95E0" }}></i>
            <span style={{ textTransform: "capitalize" }}>{upVote}</span>
          </span>{" "}
          <span>
            <i
              className="far fa-thumbs-down down"
              style={{ color: "#F8004C" }}
            ></i>
            <span style={{ textTransform: "capitalize" }}>{downVote}</span>
          </span>
        </h4>
      </div>
    );

    return (
      <div
        className="home"
        onClick={() => {
          this.props.subMenuCloseHandler();
        }}
      >
        <div className="home-container">
          {isAuthenticated && welcome_header}
          <h2>Who Is Your NBA Champion This Year?</h2>
          <Teams
            upVote={this.state.upVote}
            downVote={this.state.downVote}
            teams={this.state.teams}
            onClickHandler={this.onClickHandler}
          />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  update_up: PropTypes.func.isRequired,
  update_down: PropTypes.func.isRequired,
  subMenuCloseHandler: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { update_up, update_down })(
  withAlert()(Home)
);

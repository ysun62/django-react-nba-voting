import React, { Component } from "react";

export default class Timer extends Component {
  state = {
    seconds: 10,
    questionNum: 1,
    finished: false
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, questionNum } = this.state;

      if (seconds > 1) {
        this.setState({
          seconds: seconds - 1
        });
      }
      if (questionNum < 10 && seconds === 1) {
        this.setState({
          seconds: 10,
          questionNum: this.state.questionNum + 1
        });
      }
      if (questionNum >= 10 && seconds === 1) {
        this.setState({
          finished: true
        });
        clearInterval(this.myInterval);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { seconds, questionNum, finished } = this.state;

    return (
      <React.Fragment>
        {questionNum >= 10 && finished ? (
          <h4>You got {this.props.correctCount} right! Good job!</h4>
        ) : (
          <React.Fragment>
            <h4>{seconds}</h4>
            <h4>TIME REMAINING</h4>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

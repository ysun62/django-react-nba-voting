import React, { Component } from "react";

export default class Timer extends Component {
  state = {
    seconds: 10,
    questionNum: 1
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds } = this.state;

      if (seconds > 1) {
        this.setState({
          seconds: seconds - 1
        });
      }
    }, 1000);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.question !== this.props.question) {
      this.setState({
        seconds: 10,
        questionNum: this.state.questionNum + 1
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { seconds, questionNum } = this.state;
    //    let display =
    return (
      <React.Fragment>
        {questionNum >= 10 && seconds === 1 ? (
          <h4>finished</h4>
        ) : (
          <h4>{seconds}</h4>
        )}
        <h4>TIME REMAINING</h4>
      </React.Fragment>
    );
  }
}

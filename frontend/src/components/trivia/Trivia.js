import React from "react";
import Countdown from "react-countdown-now";

import questions from "../../api/questions.json";
import "./Trivia.css";

class Trivia extends React.Component {
  state = {
    questions: questions,
    question: null
  };

  componentDidMount() {
    const { questions } = this.state;
    console.log("trivia mounted", questions);
    this.updateState();
  }

  updateState = () => {
    const { questions } = this.state;
    let q = questions[Math.floor(Math.random() * questions.length)];
    this.setState({
      question: q,
      questions: [...questions.filter(question => question.id !== q.id)]
      // timer: 10000
    });
  };

  componentDidUpdate(prevState) {
    console.log(this.state.question);
    const { questions, question } = this.state;
    if (questions !== prevState.questions && questions.length > 0) {
      this.timerHandle = setTimeout(() => {
        this.updateState();
      }, 10000);
    }
  }

  componentWillUnmount() {
    console.log("trivia unmounted");
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    const { question } = this.state;
    console.log("render");
    const quiz_section = question !== null && (
      <div className="quiz-section">
        <h4 className="quiz-question">{question.Q}</h4>
        <ul className="answer-section">
          {question.A.map(a => (
            <li key={a} className="answer">
              {a}
            </li>
          ))}
        </ul>
        <div className="timer">
          {/* <Countdown
            date={Date.now() + question.timer * 200}
            key={question.timer * 200}
          />
          {console.log(question.timer * 1000)} */}
          Timer
        </div>
      </div>
    );
    return (
      <div className="modal-contents">
        <div className="header">
          <h4 className="quiz-header">NBA TRIVIA</h4>
          <div className="spacer"></div>
          <i
            className="fas fa-times close"
            onClick={this.props.modalCloseHandler}
          ></i>
        </div>
        {question !== null && quiz_section}
      </div>
    );
  }
}

// Random component
// const Completionist = () => <span>You are good to go!</span>;

// // Renderer callback with condition
// const renderer = ({ seconds, completed }) => {
//   if (completed) {
//     // Render a complete state
//     return <Completionist />;
//   } else {
//     // Render a countdown
//     return <span>{seconds}</span>;
//   }
// };

export default Trivia;

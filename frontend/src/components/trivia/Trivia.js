import React from "react";
import Timer from "../timer/Timer";
import Answer from "../answer/Answer";

import questions from "../../api/questions.json";
import "./Trivia.css";

class Trivia extends React.Component {
  state = {
    questions: questions,
    question: null,
    seconds: 10
  };

  componentDidMount() {
    this.updateState();
  }

  componentDidUpdate(prevState) {
    const { questions } = this.state;
    if (questions !== prevState.questions && questions.length > 0) {
      this.timerHandle = setTimeout(() => {
        this.updateState();
      }, 3000);
    }
  }

  updateState = () => {
    const { questions } = this.state;
    let q = questions[Math.floor(Math.random() * questions.length)];
    this.setState({
      question: q,
      questions: [...questions.filter(question => question.id !== q.id)]
    });
  };

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    const { question } = this.state;
    const quiz_section = question !== null && (
      <React.Fragment>
        <h4 className="quiz-question">{question.Q}</h4>
        <ul className="answer-section">
          {question.A.map((a, index) => (
            <Answer key={a} index={index} answer={a} />
          ))}
        </ul>
        <div className="timer">
          <Timer question={this.state.question} />
        </div>
      </React.Fragment>
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
        <div className="quiz-section">{question !== null && quiz_section}</div>
      </div>
    );
  }
}

export default Trivia;

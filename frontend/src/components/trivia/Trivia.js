import React from "react";
import Timer from "../timer/Timer";
import Answer from "../answer/Answer";

import questions from "../../api/questions.json";
import "./Trivia.css";

class Trivia extends React.Component {
  state = {
    questions: questions,
    question: null,
    currentQuestionNum: 0,
    seconds: 10
  };

  componentDidMount() {
    this.updateState();
  }

  updateState = () => {
    const { questions } = this.state;
    let q = questions[Math.floor(Math.random() * questions.length)];
    this.setState(prevState => ({
      question: q,
      questions: [...questions.filter(question => question.id !== q.id)],
      currentQuestionNum: prevState.currentQuestionNum + 1
    }));
  };

  componentDidUpdate(prevState) {
    const { questions } = this.state;
    if (questions !== prevState.questions && questions.length > 0) {
      this.timerHandle = setTimeout(() => {
        this.updateState();
      }, 10000);
    }
  }

  onClickAddStyle = e => {
    let parentElement = e.target.parentElement;
    for (let i = 0; i < parentElement.children.length; i++) {
      parentElement.children[i].style = "none";
    }
    e.target.style.background =
      "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(3,22,28,1) 0%, rgba(11,88,103,1) 100%)";

    console.log(this.state.question.correct);
  };

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    const { question, currentQuestionNum } = this.state;
    const quiz_section = question !== null && (
      <React.Fragment>
        <div className="quiz-question">
          <h5 className="question-count">({currentQuestionNum}/10)</h5>
          <h4>{question.Q}</h4>
        </div>
        <ul className="answer-section">
          {question.A.map((a, index) => (
            <Answer
              key={a}
              index={index}
              answer={a}
              onClickAddStyle={this.onClickAddStyle}
            />
          ))}
        </ul>
        <div className="timer">
          <Timer question={question} />
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

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
    myAnswer: null,
    correct: null,
    correctCount: 0,
    seconds: 10,
    isEnd: false,
    finished: false
  };

  componentDidMount() {
    this.updateState();
  }

  updateState = () => {
    const { questions, myAnswer, correct } = this.state;
    let q = questions[Math.floor(Math.random() * questions.length)];
    if (myAnswer === correct && correct) {
      this.setState(prevState => ({
        correctCount: prevState.correctCount + 1
      }));
    }

    this.setState(prevState => ({
      question: q,
      questions: [...questions.filter(question => question.id !== q.id)],
      myAnswer: null,
      correct: q.correct,
      currentQuestionNum: prevState.currentQuestionNum + 1
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    const {
      questions,
      question,
      myAnswer,
      correct,
      isEnd,
      finished
    } = this.state;
    if (question !== prevState.question && questions.length > 0) {
      this.timerHandle = setTimeout(() => {
        this.updateState();
        if (questions.length === 1) {
          setTimeout(() => {
            this.setState({
              isEnd: true
            });
          }, 10000);
        }
      }, 10000);
    } else if (isEnd && questions.length === 0) {
      if (myAnswer === correct && !finished) {
        this.setState(prevState => ({
          correctCount: prevState.correctCount + 1,
          finished: true
        }));
      }
    }
  }

  onClickAddStyle = e => {
    let parentElement = e.target.parentElement;
    for (let i = 0; i < parentElement.children.length; i++) {
      parentElement.children[i].style = "none";
    }
    e.target.style.background =
      "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(3,22,28,1) 0%, rgba(11,88,103,1) 100%)";

    let value = e.target.innerHTML;
    if (!this.state.isEnd) {
      this.setState({
        myAnswer: value
      });
    }
  };

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    const { question, currentQuestionNum, correctCount } = this.state;
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
          <Timer question={question} correctCount={correctCount} />
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

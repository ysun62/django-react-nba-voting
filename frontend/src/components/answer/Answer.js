import React from "react";

class Answer extends React.Component {
  onClickAddStyle = e => {
    let parentElement = e.target.parentElement;
    for (let i = 0; i < parentElement.children.length; i++) {
      parentElement.children[i].style = "none";
    }
    e.target.style.background =
      "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(3,22,28,1) 0%, rgba(11,88,103,1) 100%)";
    //   if(e.target.innerText === )
    console.log(e.target.innerText);
  };

  render() {
    const { index, answer } = this.props;
    return (
      <React.Fragment>
        <li className="answer" id={index} onClick={this.onClickAddStyle}>
          {answer}
        </li>
      </React.Fragment>
    );
  }
}

export default Answer;

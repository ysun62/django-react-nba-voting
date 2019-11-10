import React from "react";

const Answer = props => {
  const { index, answer, onClickAddStyle } = props;
  return (
    <React.Fragment>
      <li className="answer" id={index} onClick={onClickAddStyle}>
        {answer}
      </li>
    </React.Fragment>
  );
};

export default Answer;

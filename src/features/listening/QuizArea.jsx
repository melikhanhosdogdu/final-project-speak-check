// This is left side off page, contain audio player and input and validation function

import { useState } from "react";

function QuizArea({ audioURL, correctAnswer }) {
  const [inputValue, setInputValue] = useState("");

  const isAnswerValid = () => {
    return correctAnswer === inputValue;
  };

  return <></>;
}

export default QuizArea;

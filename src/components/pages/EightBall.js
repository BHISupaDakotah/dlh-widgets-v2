import React, { useState } from "react";

export default function EightBall() {
  const [userInput, setUserInput] = useState("");
  const [randomAnswer, setRandomAnswer] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
    e.preventDefault();
  };

  const handleClick = (e) => {
    if (userInput) {
      setRandomAnswer(Math.round(Math.random() * 9));
      setUserInput("");
      e.preventDefault();
    }
  };

  const answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Outlook good",
    "Yes",
    "Most likely",
  ];
  const answer = answers[randomAnswer];
  return (
    <div className="eightball-container">
      <h1 className="eightball-title">Magic Eight Ball Fun!</h1>
      <form className="eightball-form" onSubmit={handleClick}>
        <input
          className="eightball-input"
          value={userInput}
          onChange={handleChange}
          placeholder="ask a question"
        />
      </form>
      <div className="answer-wrapper">
        <div className="answer">{answer}</div>
      </div>
    </div>
  );
}

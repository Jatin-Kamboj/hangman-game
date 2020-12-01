import React from "react";

const Words = ({ correctLetters, selectedWord }) => (
  <div className="word" id="word">
    {selectedWord.split("").map((letter, i) => (
      <span className="letter" key={i}>
        {correctLetters.includes(letter) ? letter : ""}
      </span>
    ))}
  </div>
);

export default Words;

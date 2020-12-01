import React from "react";

const WrongLetters = ({ wrongLetters }) => {
  return (
    <div className="wrong-letters-container">
      <div id="wrong-letters">
        {wrongLetters && wrongLetters.length > 0 ? <p>Wrong</p> : ""}
        {wrongLetters &&
          wrongLetters
            .map((letter, i) => <span key={i}>{letter}</span>)
            .reduce(
              (prevVal, currentVal) =>
                prevVal === null ? [currentVal] : [prevVal, ", ", currentVal],
              null
            )}
      </div>
    </div>
  );
};

export default WrongLetters;

import React, { useEffect } from "react";
import { checkWin } from "../../helpers/helpers";
import WrongLetters from "../WrongLetters/WrongLetters";

const Popup = ({ correctLetters, selectedWord, setPlayable }) => {
  let finalMessageRevealWord = "";
  let finalMessage = "";
  let playable = true;

  // if user wins
  if (checkWin(correctLetters, WrongLetters, selectedWord) === "win") {
    finalMessage = "Congratulations! You won! 😃";
    playable = false;
  }
  // if users loses
  else if (checkWin(correctLetters, WrongLetters, selectedWord) === "lost") {
    console.log("lost >>");
    finalMessage = "Unfortunately you lost. 😕";
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }

  // Sets game is playable or noty
  useEffect(() => setPlayable(playable));

  return (
    <div
      className="popup-container"
      style={finalMessage ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2 className="final-message">{finalMessage}</h2>
        <h3 className="final-message-reveal-word">{finalMessageRevealWord}</h3>
        <button>Play Again</button>
      </div>
    </div>
  );
};

export default Popup;

import React, { useState, useEffect } from "react";
import {
  Header,
  Figure,
  WrongLetters,
  Words,
  Notification,
  Popup,
} from "./components";
import { showNotification as show } from "./helpers/helpers";
import "./App.css";

const words = ["application", "programming", "interface", "wizard"];
let selectedWord = words[Math.floor(Math.random() * words.length)];

const App = () => {
  const [playable, setPlayable] = useState(true);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  // keep all dependencies in the use effect array
  useEffect(() => {
    const handleKeyDown = ({ keyCode, key }) => {
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        // adds letter if entered letter is there in selected word
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((correctLetters) => [...correctLetters, letter]);
            // displayWord();
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters) => [...wrongLetters, letter]);

            // updateWrongLettersEl();
          } else {
            show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [wrongLetters, correctLetters, playable]);

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Words correctLetters={correctLetters} selectedWord={selectedWord} />
      </div>
      <Popup
        correctLetters={correctLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        wrongLetters={wrongLetters}
      />
      <Notification showNotification={showNotification} />
    </>
  );
};

export default App;

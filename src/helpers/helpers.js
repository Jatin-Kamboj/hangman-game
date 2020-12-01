/**
 * Sets or manipulate the state of the component
 * @param {Function} setter Function to set the state of the component
 */
export const showNotification = (setter) => {
  // Sets the state to true
  setter(true);

  // Sets state to false after 2 seconds
  setTimeout(() => {
    setter(false);
  }, 2000);
};

/**
 * Checks whether game is won or lost
 * @param {Array} correct array of correct answers
 * @param {Array} wrong array of wrong answers
 * @param {*} word user typed word
 * @returns {String} status of the game
 */
export const checkWin = (correct, wrong, word) => {
  let STATUS = "win";
  console.log("correct", correct);
  // check win status

  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      STATUS = "";
    }
  });

  //check lose status and message
  if (wrong.length === 6) STATUS = "lose";

  return STATUS;
};

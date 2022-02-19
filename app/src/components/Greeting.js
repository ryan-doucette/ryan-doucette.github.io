import React, { useState } from "react";
import useInterval from "./UseInterval";
import './styles/Greeting.css';

const Greeting = () => {
  // List of words to display with prompt "I'm a(n) _____ "
  const thingsIAm = ['Developer', 'Designer', 'Animator', 'Traveler', 'Guitarist'];
  // Index of current word
  const [index, setIndex] = useState(0);
  // Duration between switching words
  // ** MUST be the same value as the animations on Greeting.css or it will become unsynced **
  const WORD_DURATION = 4000;

  // Values for prev, curr, and next words for reference
  const prevWord = index === 0 ? thingsIAm[thingsIAm.length - 1] : thingsIAm[index - 1];
  const currentWord = thingsIAm[index];
  const nextWord = index === thingsIAm.length - 1 ? thingsIAm[0] : thingsIAm[index + 1];

  // Regex to detect if a word starts with a vowels
  var vowelRegex = '^[aieouAIEOU].*'
  const vowelMatch = (word) => word.match(vowelRegex);

  // Updates the index, if the index is at the end of the list of words it is reset to 0
  const updateIndex = (lengthOfList) => {
    if (index === lengthOfList - 1) {
      setIndex(0);
    }
    else {
      setIndex(index + 1);
    }
  }

  // This applies the correct animation (or lack-there-of) for the 'n' if 'an' is to be added
  // eg. if 'Apple' and 'Egg' are back to back words, it will not redo the 'n' animation between the transition
  const n = () => { 
    if (vowelMatch(prevWord) && vowelMatch(nextWord)) {
      return <h2 className="n">n </h2>
    }
    else if (vowelMatch(prevWord)) {
      return <h2 className="n" id="prevAnimateN">n </h2>
    }
    else if (vowelMatch(nextWord)) {
      return <h2 className="n" id="nextAnimateN">n </h2>
    }
    else {
      return <h2 className="n" id="fullAnimateN">n </h2>
    }
  }

  // Detects if the current word is a vowel and adds an 'n' to make 'an' if that is the case
  const aOrAn = vowelMatch(currentWord) ? n() : <h2> </h2>

  // Updates the index every WORD_DURATION milliseconds
  useInterval(() => { // Ref for component on UseInterval.js
    updateIndex(thingsIAm.length)
  }, WORD_DURATION);

  return (
    <div className="greeting">
      <h1>Hey, I'm Ryan</h1>
      <h2>I'm a</h2>
      {aOrAn}
      <h2 id="animatedText" data-text={thingsIAm[index]}>{thingsIAm[index]}</h2>
    </div>
  );
}

export default Greeting;
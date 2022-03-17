import React, { useState } from "react";

import './styles/_greeting.scss';

import useInterval from "./UseInterval";

const Greeting = () => {
  // List of words to display with prompt "I'm a(n) _____ "
  const thingsIAm: string[] = ['Developer', 'Designer', 'Animator', 'Traveler', 'Guitarist'];
  // Index of current word
  const [index, setIndex] = useState(0);
  // Duration between switching words
  // ** MUST be the same value as the animations on Greeting.css or it will become unsynced **
  const WORD_DURATION: number = 4000;

  // Values for prev, curr, and next words for reference
  const prevWord: string = index === 0 ? thingsIAm[thingsIAm.length - 1] : thingsIAm[index - 1];
  const currentWord: string = thingsIAm[index];
  const nextWord: string = index === thingsIAm.length - 1 ? thingsIAm[0] : thingsIAm[index + 1];

  // Regex to detect if a word starts with a vowels
  var vowelRegex = '^[aieouAIEOU].*'
  const vowelMatch = (word: string) => word.match(vowelRegex);

  // Updates the index, if the index is at the end of the list of words it is reset to 0
  const updateIndex = (lengthOfList: number) => {
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
  useInterval(() => {
    updateIndex(thingsIAm.length);
  }, WORD_DURATION);

  return (
    <div className="greeting">
      <h1>Hey, I'm </h1><h1 className="highlightText">Ryan</h1>
      <br/>
      <h2>I'm a </h2><h2 className="highlightText">frontend software developer</h2>
      {/* <h2>I'm a</h2>
      {aOrAn}
      <h2 id="animatedText" data-text={thingsIAm[index]}>{thingsIAm[index]}</h2> */}
    </div>
  );
}

export default Greeting;
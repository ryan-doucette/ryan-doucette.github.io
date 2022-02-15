import React, { useState } from "react";
import useInterval from "./UseInterval";
import './styles/Greeting.css';

function Greeting() {
  const thingsIAm = ['Developer', 'Aaaeeeeeeeeeeee'];
  const [index, setIndex] = useState(0);
  const WORD_DURATION = 4000;
  var vowelRegex = '^[aieouAIEOU].*'

  const updateIndex = (lengthOfList) => {
    if (index === lengthOfList - 1) {
      setIndex(0);
    }
    else {
      setIndex(index + 1);
    }
  }

  const aOrAn = thingsIAm[index].match(vowelRegex) ? <h2 id="an">n </h2> : <h2> </h2>

  useInterval(() => {
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
import React from "react";

import './styles/_greeting.scss';

const Greeting = () => {

  return (
    <div className="greeting">
      <h1>Hey, I'm </h1><h1 className="highlightText">Ryan</h1>
      <br/>
      <h2>I'm a </h2><h2 className="highlightText">frontend software developer</h2>
    </div>
  );
}

export default Greeting;
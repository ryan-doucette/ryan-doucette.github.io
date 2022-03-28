import React from "react";

import './styles/_greeting.scss';

const Greeting = () => {

  return (
    <div className="greeting">
      <h1>Hey, I'm </h1><h1 className="highlightText">Ryan</h1>
      <br/>
      <h2 className="highlightText">Welcome</h2><h2> to my website</h2>
    </div>
  );
}

export default Greeting;
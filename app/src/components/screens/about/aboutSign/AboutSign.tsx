import React from 'react';
import './_aboutSign.scss';
import aboutItems from '../AboutData';

const AboutSign = ({currIndex} : {currIndex: number}) => {
  return (
    <div className="aboutSign">
      {aboutItems[currIndex].iLoveLabel}
    </div>
  );
}

export default AboutSign;

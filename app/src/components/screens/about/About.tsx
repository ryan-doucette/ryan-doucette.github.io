import React, {useContext, useState, useEffect} from 'react';
import { CurrentScreenContext } from '../../../current-screen-context';
import { leaveAboutTransition } from './transitions/AboutTransitions';
import './styles/_about.scss';
import './transitions/_aboutTransitions.scss';
import { useNavigationType } from 'react-router-dom';

const About = () => {
  const screenContext = useContext(CurrentScreenContext);
  const [preventPopExit, setPreventPopExit] = useState(false);

  const navType = useNavigationType();

  useEffect(() => {
    if (navType === 'POP' && preventPopExit === false) {
      setPreventPopExit(true);
      return;
    }
    if (screenContext.currentScreen !== 'about') {
      leaveAboutTransition();
    }
  }, [navType, preventPopExit, screenContext]);

  return (
    <div className="about">
 
    </div>
  );
}

export default About;

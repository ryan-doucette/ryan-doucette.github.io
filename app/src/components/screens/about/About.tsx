import React, {useContext, useEffect} from 'react';
import { CurrentScreenContext } from '../../../current-screen-context';
import { enterAboutTransition, leaveAboutTransition } from './transitions/AboutTransitions';
import './styles/_about.scss';
import './transitions/_aboutTransitions.scss';

const About = () => {
  const screenContext = useContext(CurrentScreenContext);

  useEffect(() => {
    if(screenContext.currentScreen === 'about') { 
      enterAboutTransition();
    }    
    else {
      leaveAboutTransition();
    }
  }, [screenContext]);

  return (
    <div className="about">
 
    </div>
  );
}

export default About;

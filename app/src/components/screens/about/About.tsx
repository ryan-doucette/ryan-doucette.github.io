import React, {useContext, useEffect} from 'react';
import { CurrentScreenContext } from '../../../current-screen-context';

const About = () => {
  const currentScreen = useContext(CurrentScreenContext);

  useEffect(() => {
    if(currentScreen.currentScreen === 'about') { 
      // Enter animation
    }    
    else {
      // Exit animation
    }
  }, [currentScreen]);

  return (
    <div className="about">
 
    </div>
  );
}

export default About;

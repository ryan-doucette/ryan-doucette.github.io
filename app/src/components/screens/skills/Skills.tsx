import React, {useContext, useEffect} from 'react';
import { CurrentScreenContext } from '../../../current-screen-context';

const Skills = () => {
  const currentScreen = useContext(CurrentScreenContext);

  useEffect(() => {
    if(currentScreen.currentScreen === 'skills') { 
      // Enter animation
    }    
    else {
      // Exit animation
    }
  }, [currentScreen]);
  return (
    <div className="skills">
 
    </div>
  );
}

export default Skills;

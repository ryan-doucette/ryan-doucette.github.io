import React, {useEffect, useContext} from 'react';
import { CurrentScreenContext } from '../../../current-screen-context';

const Experience = () => {
  const currentScreen = useContext(CurrentScreenContext);

  useEffect(() => {
    if(currentScreen.currentScreen === 'experience') { 
      // Enter animation
    }    
    else {
      // Exit animation
    }
  }, [currentScreen]);
  return (
    <div className="experience">
 
    </div>
  );
}

export default Experience;

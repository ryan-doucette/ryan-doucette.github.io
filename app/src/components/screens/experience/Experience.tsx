import React, {useEffect, useContext} from 'react';
import { CurrentScreenContext } from '../../../current-screen-context';
import './styles/_experience.scss';
import './transitions/_experienceTransitions.scss';
import { enterExperienceTransition, leaveExperienceTransition } from './transitions/ExperienceTransitions';

const Experience = () => {
  const screenContext = useContext(CurrentScreenContext);

  useEffect(() => {
    if(screenContext.currentScreen === 'experience') { 
      enterExperienceTransition();
    }    
    else {
      leaveExperienceTransition();
    }
  }, [screenContext]);
  return (
    <div className="experience">
 
    </div>
  );
}

export default Experience;

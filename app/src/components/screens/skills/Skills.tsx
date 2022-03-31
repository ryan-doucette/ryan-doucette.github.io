import React, {useContext, useEffect} from 'react';
import { CurrentScreenContext } from '../../../current-screen-context';
import './styles/_skills.scss';
import './transitions/_skillsTransitions.scss';
import { enterSkillsTransition, leaveSkillsTransition } from './transitions/SkillsTransitions';

const Skills = () => {
  const screenContext = useContext(CurrentScreenContext);

  useEffect(() => {
    if(screenContext.currentScreen === 'skills') { 
      enterSkillsTransition();
    }    
    else {
      leaveSkillsTransition();
    }
  }, [screenContext]);
  return (
    <div className="skills">
 
    </div>
  );
}

export default Skills;

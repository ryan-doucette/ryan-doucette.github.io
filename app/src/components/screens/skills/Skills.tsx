import React, {useContext, useState, useEffect} from 'react';
import { CurrentScreenContext } from '../../../current-screen-context';
import './styles/_skills.scss';
import './transitions/_skillsTransitions.scss';
import { leaveSkillsTransition } from './transitions/SkillsTransitions';
import { useNavigationType } from 'react-router-dom';

const Skills = () => {
  const screenContext = useContext(CurrentScreenContext);
  const [preventPopExit, setPreventPopExit] = useState(false);

  const navType = useNavigationType();

  useEffect(() => {
    if (navType === 'POP' && preventPopExit === false) {
      setPreventPopExit(true);
      return;
    }
    if (screenContext.currentScreen !== 'skills') {
      leaveSkillsTransition();
    }
  }, [navType, preventPopExit, screenContext]);

  return (
    <div className="skills">
 
    </div>
  );
}

export default Skills;

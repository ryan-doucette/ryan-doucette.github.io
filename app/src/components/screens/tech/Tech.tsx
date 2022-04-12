import React, {useContext, useState, useEffect} from 'react';
import { CurrentScreenContext } from '../../../current-screen-context';
import './styles/_tech.scss';
import './transitions/_techTransitions.scss';
import { leaveTechTransition } from './transitions/TechTransitions';
import { useNavigationType } from 'react-router-dom';
import TechItem from './techItem/TechItem';
import skillItems from './TechData';

const Tech = () => {
  const screenContext = useContext(CurrentScreenContext);
  const [preventPopExit, setPreventPopExit] = useState(false);

  const navType = useNavigationType();

  useEffect(() => {
    if (navType === 'POP' && preventPopExit === false) {
      setPreventPopExit(true);
      return;
    }
    if (screenContext.currentScreen !== 'tech') {
      leaveTechTransition();
    }
  }, [navType, preventPopExit, screenContext]);

  return (
    <div className="tech">
      <div className='techItemsContainer'>
        <div className='techTitle' id='tech-title'>Some of my favorite technologies</div>
        { skillItems.map((item) => (
          <TechItem skillItem={item} key={item.identifier}/>
        ))  }
      </div>
    </div>
  );
}

export default Tech;

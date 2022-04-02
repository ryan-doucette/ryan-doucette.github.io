import React, {useEffect, useContext} from 'react';
import { CurrentScreenContext } from '../../../current-screen-context';
import './styles/_experience.scss';
import './transitions/_experienceTransitions.scss';
import { enterExperienceTransition, leaveExperienceTransition } from './transitions/ExperienceTransitions';
import experienceItems from './ExperienceData';
import ExperiencePreview from './ExperiencePreview';

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
      <div className='experiencePreviewsContainer'>
        { experienceItems.map((item) => (
          <ExperiencePreview 
            key={item.identifier}
            image={item.image}
            title={item.title}
            subTitle={item.subtitle}
          />
        )) }
      </div>
    </div>
  );
}

export default Experience;

import React, {useEffect, useContext, useState, useRef, useCallback } from 'react';
import { CurrentScreenContext } from '../../../current-screen-context';
import './styles/_experience.scss';
import './transitions/_experienceTransitions.scss';
import { leaveExperienceTransition, showExperiencePreviews, hideExperienceContainers, leaveExperienceFull } from './transitions/ExperienceTransitions';
import experienceItems from './ExperienceData';
import ExperiencePreview from './experiencePreview/ExperiencePreview';
import ExperienceFull from './experienceFull/ExperienceFull';
import { experienceItem } from 'customTypes';

const Experience = () => {
  const screenContext = useContext(CurrentScreenContext);
  const [selectedExperience, setSelectedExperience] = useState<undefined | experienceItem>(undefined);
  const [fullExperienceShown, setFullExperienceShown] = useState<undefined | boolean>(undefined);

  useEffect(() => {
    if(screenContext.currentScreen !== 'experience' && screenContext.currentScreen !== 'experienceFull') { 
      if (fullExperienceShown === false || fullExperienceShown === undefined) {
        leaveExperienceTransition();
      }
      else if (fullExperienceShown === true) {
        leaveExperienceFull();
      }
    }    
  }, [fullExperienceShown, screenContext]);

  useEffect(() => {
    if (fullExperienceShown !== undefined) {
      if(fullExperienceShown === false) {
        showExperiencePreviews();
      }
      else if(fullExperienceShown === true) {
        hideExperienceContainers();
      }
    }
  }, [fullExperienceShown]);


  const handleWindowResize = useCallback(event => {
    if (fullExperienceShown === true) {
      if (window.innerWidth > 768) {
        experienceScreen.current!.style.height = '100%';
      }
      else {
        experienceScreen.current!.style.height = 'auto';
      }
    }
    else if (fullExperienceShown === false) {
      experienceScreen.current!.style.height = '100%';
    }
  }, [fullExperienceShown]); 

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);

  const experienceScreen = useRef<HTMLDivElement>(null);

  const handleOpenFullExperience = (experience: experienceItem) => {
    setFullExperienceShown(true);
    setSelectedExperience(experience);
  };

  const handleCloseFullExperience = () => {
    setFullExperienceShown(false);
  };

  return (
    <div className="experience" id='experienceScreen' ref={experienceScreen}>
      <div 
        className='experiencePreviewsContainer' 
        id='experience-previews-container'
      >
        { experienceItems.map((item) => (
          <CurrentScreenContext.Consumer key={item.identifier}>
            {({toggleCurrentScreen}) => (
              <div 
                className='experiencePreviewContainer' 
                id={'experience-preview-' + experienceItems.indexOf(item).toString()} 
                onClick={() => {
                  handleOpenFullExperience(item);
                  toggleCurrentScreen('experienceFull');
                }}
              >
                <ExperiencePreview 
                  image={item.image}
                  title={item.title}
                  subTitle={item.subtitle}
                />
              </div>
            )}
          </CurrentScreenContext.Consumer>  
        )) }
      </div>
      <div 
        className='fullExperienceContainer' 
        id='full-experience-container'
        style={{display: 'none'}}
      >
        <CurrentScreenContext.Consumer>
          {({toggleCurrentScreen}) => (
            <ExperienceFull 
              currentItem={selectedExperience}
              closeButtonPressed={() => {
                handleCloseFullExperience(); 
                toggleCurrentScreen('experience');
              }}
            />
          )}
         </CurrentScreenContext.Consumer>  
      </div>
    </div>
  );
}

export default Experience;

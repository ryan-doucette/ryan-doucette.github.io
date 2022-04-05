import React, {useEffect, useContext, useState, useRef, useCallback } from 'react';
import { CurrentScreenContext } from '../../../current-screen-context';
import './styles/_experience.scss';
import './transitions/_experienceTransitions.scss';
import { leaveExperienceTransition, showExperiencePreviews, hideExperienceContainers, leaveExperienceFull, openResumeButtonContainer, closeResumeButtonContainer } from './transitions/ExperienceTransitions';
import experienceItems from './ExperienceData';
import ExperiencePreview from './experiencePreview/ExperiencePreview';
import ExperienceFull from './experienceFull/ExperienceFull';
import { experienceItem } from 'customTypes';
import resumeIcon from './images/resume.png';
import CloseButton from '../home/menuModal/CloseButton';
import { useNavigationType } from 'react-router-dom';
import resume from '../../../resume/ryan_doucette_resume_2021_2022.pdf';

const Experience = () => {
  const screenContext = useContext(CurrentScreenContext);
  const [selectedExperience, setSelectedExperience] = useState<undefined | experienceItem>(undefined);
  const [fullExperienceShown, setFullExperienceShown] = useState<undefined | boolean>(undefined);
  const [resumeButtonContainerOpen, setResumeButtonContainerOpen] = useState<undefined | boolean>(undefined);
  const [preventPopExit, setPreventPopExit] = useState(false);

  const navType = useNavigationType();

  useEffect(() => {
    if (navType === 'POP' && preventPopExit === false) {
      setPreventPopExit(true);
      return;
    }
    if(screenContext.currentScreen !== 'experience' && screenContext.currentScreen !== 'experienceFull') { 
      if (fullExperienceShown === false || fullExperienceShown === undefined) {
        leaveExperienceTransition();
      }
      else if (fullExperienceShown === true) {
        leaveExperienceFull();
      }
    }    
  }, [fullExperienceShown, navType, preventPopExit, screenContext]);

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

  useEffect(() => {
    if(resumeButtonContainerOpen === true) {
      openResumeButtonContainer();
    } 
    else if(resumeButtonContainerOpen === false) {
      closeResumeButtonContainer();
    }
  }, [resumeButtonContainerOpen]);

  return (
    <div className="experience" id='experienceScreen' ref={experienceScreen}>
      <div 
        id='resume-button-container' 
        className='resumeButtonContainer'
        onClick={() => {if (resumeButtonContainerOpen !== true) setResumeButtonContainerOpen(true)}}
      >
        <section className='resumeButtonCloseContents' id='resume-button-close-contents'>
          <img className='resumeIcon' alt='resume icon' src={resumeIcon}/>
        </section>
        <section className='resumeButtonOpenContents' id='resume-button-open-contents'>
          <div className='resumeCloseButton' onClick={() => setResumeButtonContainerOpen(false)}>
            <CloseButton/>
          </div>
          <a 
            href={resume}
            className='navigateToResumeButton'
            target="_blank"
            rel="noreferrer noopener"
          >
            CHECK OUT MY RESUME</a>
        </section>
      </div>
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
                  setResumeButtonContainerOpen(false);
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

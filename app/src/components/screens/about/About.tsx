import React, {useContext, useState, useEffect} from 'react';
import { CurrentScreenContext } from '../../../current-screen-context';
import { leaveAboutTransition } from './transitions/AboutTransitions';
import './styles/_about.scss';
import './transitions/_aboutTransitions.scss';
import { useNavigationType } from 'react-router-dom';
import AboutPortal from './aboutPortal/AboutPortal';
import AboutCarousel from './aboutCarousel/AboutCarousel';
import AboutSign from './aboutSign/AboutSign';
import aboutItems from './AboutData';
import useInterval from '../../../customHooks/UseInterval';

const About = () => {
  const screenContext = useContext(CurrentScreenContext);
  const [preventPopExit, setPreventPopExit] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);
  const aboutItemsLength = aboutItems.length;

  const aboutItemDuration = 4000;

  // useInterval(() => {
  //     handleShiftRightPressed()
  // }, aboutItemDuration);

  const navType = useNavigationType();

  useEffect(() => {
    if (navType === 'POP' && preventPopExit === false) {
      setPreventPopExit(true);
      return;
    }
    if (screenContext.currentScreen !== 'about') {
      leaveAboutTransition();
    }
  }, [navType, preventPopExit, screenContext]);

  const handleShiftLeftPressed = () => {
    setTimeout(() => {
      if(currIndex === 0) {
        setCurrIndex(aboutItemsLength - 1);
      }
      else {
          setCurrIndex(currIndex - 1);
      } 
    }, 750);
  }

  const handleShiftRightPressed = () => {
    setTimeout(() => {
      if(currIndex === aboutItemsLength - 1) {
        setCurrIndex(0);
      }
      else {
        setCurrIndex(currIndex + 1);
      } 
    }, 750);
  }

  return (
    <div className="about">
      <div className='aboutFullContainer'>
        <div className='aboutSignContainer'>
          <AboutSign currIndex={currIndex}/>
        </div>
        <div className='aboutPortalContainer'>
          <AboutPortal currIndex={currIndex}/>
        </div>
        <div className='aboutCarouselContainer'>
          <AboutCarousel 
            currIndex={currIndex}
            shiftLeftPressed={() => {
              handleShiftLeftPressed()
            }}
            shiftRightPressed={() => {
              handleShiftRightPressed()
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;

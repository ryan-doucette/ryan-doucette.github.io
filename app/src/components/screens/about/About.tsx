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
  const [itemTransitioning, setItemTransitioning] = useState(false);
  const aboutItemsLength = aboutItems.length;

  const aboutItemDuration = 4000;

  useInterval(() => {
      handleShiftRightPressed();
  }, aboutItemDuration);

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
    const leftHandle = document.getElementById('left-handle');
    leftHandle!.style.pointerEvents = 'none';
    const rightHandle = document.getElementById('right-handle');
    rightHandle!.style.pointerEvents = 'none';

    setItemTransitioning(true);
    setTimeout(() => {      
      if(currIndex === 0) {
        setCurrIndex(aboutItemsLength - 1);
      }
      else {
          setCurrIndex(currIndex - 1);
      }
      setItemTransitioning(false); 
    }, 750);

    setTimeout(() => {
      leftHandle!.style.pointerEvents = 'auto';
      rightHandle!.style.pointerEvents = 'auto';
    }, 2250);
  }

  const handleShiftRightPressed = () => {
    const rightHandle = document.getElementById('right-handle');
    rightHandle!.style.pointerEvents = 'none';
    const leftHandle = document.getElementById('left-handle');
    leftHandle!.style.pointerEvents = 'none';

    setItemTransitioning(true);
    setTimeout(() => {
      if(currIndex === aboutItemsLength - 1) {
        setCurrIndex(0);
      }
      else {
        setCurrIndex(currIndex + 1);
      }
      setItemTransitioning(false);
    }, 750);
    setTimeout(() => {
      rightHandle!.style.pointerEvents = 'auto';
      leftHandle!.style.pointerEvents = 'auto';
    }, 2250);
  }

  return (
    <div className="about">
      <div className='aboutTopWire'/>
      <div className='aboutFullContainer'>
        <div className='aboutSignContainer'>
          <AboutSign currIndex={currIndex}/>
        </div>
        <div className='aboutPortalContainer'>
          <AboutPortal currIndex={currIndex} itemTransitioning={itemTransitioning}/>
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
        <div className='tubeSideBaseConnector tubeSideBaseConnectorLeft'>
          <div className='tubeSideBasePole'/>
        </div>
        <div className='tubeSideBaseConnector tubeSideBaseConnectorRight'>
          <div className='tubeSideBasePole'/>
        </div>
        <section className='aboutPedestalContainer'>
            <div className='aboutPedestalTop'/>
        </section>
      </div>
      <div className='aboutBottomPedestal'/>
    </div>
  );
}

export default About;

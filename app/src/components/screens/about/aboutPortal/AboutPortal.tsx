import React, { useEffect } from 'react';
import './_aboutPortal.scss';
import aboutItems from '../AboutData';

const AboutPortal = ({currIndex} : {currIndex: number}) => {
  const aboutItemsLength = aboutItems.length;
  useEffect(() => {
    openClosePortal()
  }, [currIndex])

  const openClosePortal = () => {
    const topPortal = document.getElementById('topPortal');
    const bottomPortal = document.getElementById('bottomPortal');

    topPortal!.classList.add('portalOpenClose');
    bottomPortal!.classList.add('portalOpenClose');

    setTimeout(() => {
      topPortal!.classList.remove('portalOpenClose');
      bottomPortal!.classList.remove('portalOpenClose');
    }, 750)
  }

  const getIndex = (offset: number) => {
    if (offset === 1) {
      if(currIndex === aboutItemsLength - 1) {
        return 0;
      }
      else {
        return currIndex + 1;
      }
    }
    else {
      if(currIndex === 0) {
        return aboutItemsLength - 1;
      }
      else {
        return currIndex - 1;
      }
    }
  }

  return (
    <div className="aboutPortal">
      <div className='topPortal' id='topPortal'/>
        <div className='imageStack'>
          <div className='aboutImageHolder'>
            <img src={aboutItems[getIndex(-1)].portalImage} alt={aboutItems[getIndex(-1)].identifier}/>
          </div>
          <div className='aboutImageHolder'>
            <img src={aboutItems[currIndex].portalImage} alt={aboutItems[currIndex].identifier}/>
          </div>
          <div className='aboutImageHolder'>
            <img src={aboutItems[getIndex(1)].portalImage} alt={aboutItems[getIndex(1)].identifier}/>
          </div>
        </div>
      <div className='bottomPortal' id='bottomPortal'/>
    </div>
  );
}

export default AboutPortal;

import React, {useEffect, useState} from 'react';
import './_aboutPortal.scss';
import aboutItems from '../AboutData';

const AboutPortal = ({currIndex, itemTransitioning} : {currIndex: number, itemTransitioning:boolean}) => {
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    portalTransition();

    const aboutImage = document.getElementById('about-image');
    if(firstLoad) {
      setTimeout(() => {
          aboutImage!.style.visibility = 'visible';
          setFirstLoad(false);
      }, 750);
    }
    setFirstLoad(false);
  }, [firstLoad, itemTransitioning]);

  const portalTransition = () => {
    const portalContainer = document.getElementById('portal-container');
    const portal = document.getElementById('portal');

    portalContainer?.classList.add('portalContainerTransition');
    portal?.classList.add('portalTransition');

    setTimeout(() => {
      portalContainer?.classList.remove('portalContainerTransition');
      portal?.classList.remove('portalTransition');
    }, 1500)
  }

  return (
    <div className="aboutPortal">
      <div className='portalContainer' id='portal-container'>
        <div className='portalCover'/>
        <div className='portal' id='portal'/>
      </div>
      <div className='imageStack'>
        <div className='aboutImageHolder'>
          <img className='aboutImage'
            id='about-image'
            style={{visibility: 'hidden'}}
            src={aboutItems[currIndex].portalImage} 
            alt={aboutItems[currIndex].identifier}/>
        </div>
      </div>
    </div>
  );
}

export default AboutPortal;

import React, {useCallback, useEffect, useState} from 'react';
import './_skillsItem.scss';
import { skillsItem } from 'customTypes';

const SkillsItem = ({skillItem} : {skillItem: skillsItem}) => {
  const [svgWidth, setSvgWidth] = useState<string | undefined>();
  const [svgHeight, setSvgHeight] = useState<string | undefined>();
  const [circleCx, setCircleCx] = useState<string | undefined>();
  const [circleCy, setCircleCy] = useState<string | undefined>();
  const [circleR, setCircleR] = useState<string | undefined>();
  const [innerLabel, setInnerLabel] = useState<string | undefined>();
  const [outerLabelLeft, setOuterLabelLeft] = useState<string | undefined>();
  const [outerLabelRight, setOuterLabelRight] = useState<string | undefined>();

  const adjustIconSize = () => {
    if (window.innerWidth < 341) {
      setSvgWidth('66');
      setSvgHeight('66');
      setCircleCx('33');
      setCircleCy('33');
      setCircleR('30');
    }
    else if (window.innerWidth > 1899) {
      setSvgWidth('100');
      setSvgHeight('100');
      setCircleCx('50');
      setCircleCy('50');
      setCircleR('46');
    }
    else {
      setSvgWidth('88');
      setSvgHeight('88');
      setCircleCx('44');
      setCircleCy('44');
      setCircleR('40');
    }
  };

  // Run on initial load
  useEffect(() => {
    adjustIconSize();
    
    if (window.innerWidth < 769) {
      setInnerLabel(skillItem.innerLabelMobile);
      setOuterLabelLeft(skillItem.outerLeftLabelMobile);
      setOuterLabelRight(skillItem.outerRightLabelMobile);
    }
    else {
      setInnerLabel(skillItem.innerLabelDesktop);
      setOuterLabelLeft(skillItem.outerLeftLabelDesktop);
      setOuterLabelRight(skillItem.outerRightLabelDesktop);
    }    
  }, [innerLabel, skillItem.innerLabelDesktop, skillItem.innerLabelMobile, skillItem.outerLeftLabelDesktop, skillItem.outerLeftLabelMobile, skillItem.outerRightLabelDesktop, skillItem.outerRightLabelMobile]);

  // Run when screen size is changed
  const handleWindowResize = useCallback(event => {
    adjustIconSize();
    
    if (window.innerWidth < 769) {
      setInnerLabel(skillItem.innerLabelMobile);
      setOuterLabelLeft(skillItem.outerLeftLabelMobile);
      setOuterLabelRight(skillItem.outerRightLabelMobile);
    }
    else {
      setInnerLabel(skillItem.innerLabelDesktop);
      setOuterLabelLeft(skillItem.outerLeftLabelDesktop);
      setOuterLabelRight(skillItem.outerRightLabelDesktop);
    }
  }, [skillItem.innerLabelDesktop, skillItem.innerLabelMobile, skillItem.outerLeftLabelDesktop, skillItem.outerLeftLabelMobile, skillItem.outerRightLabelDesktop, skillItem.outerRightLabelMobile]); 

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);


  return (
    <div className='skillFullContainer' id={'skills-item-' + skillItem.identifier}>
      <section className='skillsItem'>
        <div className='skillItemTextContainer'>
          <div className='skillItemText'>{innerLabel}</div>
        </div> 
        <div className="skillItemIcon">
          <img src={skillItem.image} alt='react' className='skillItemImage'/>
          <svg height={svgHeight} width={svgWidth} xmlns="http://www.w3.org/2000/svg">
            <circle cx={circleCx} cy={circleCy} r={circleR} className="shape" id='skills-circle'/>
          </svg>
        </div>
      </section>
      <section className='skillOuterLabel'>
        <div className='skillLabelLeft'>{outerLabelLeft}</div>
        <div className='skillLabelRight'>{outerLabelRight}</div>
      </section>
    </div>
  );
}

export default SkillsItem;

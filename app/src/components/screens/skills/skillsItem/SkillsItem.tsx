import React, {useCallback, useEffect, useState} from 'react';
import './_skillsItem.scss';
import { skillsItem } from 'customTypes';

const SkillsItem = ({skillItem} : {skillItem: skillsItem}) => {
  const [svgWidth, setSvgWidth] = useState<string | undefined>();
  const [svgHeight, setSvgHeight] = useState<string | undefined>();
  const [circleCx, setCircleCx] = useState<string | undefined>();
  const [circleCy, setCircleCy] = useState<string | undefined>();
  const [circleR, setCircleR] = useState<string | undefined>();

  const adjustIconSize = () => {
    if (window.innerWidth < 340) {
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
  }, []);

  // Run when screen size is changed
  const handleWindowResize = useCallback(event => {
    adjustIconSize();
  }, []); 

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);


  return (
    <div className='skillsItem'>
      <div className='skillItemTextContainer'>
        <div className='skillItemText'>{skillItem.label}</div>
      </div> 
      <div className="skillItemIcon">
        <img src={skillItem.image} alt='react' className='skillItemImage'/>
        <svg height={svgHeight} width={svgWidth} xmlns="http://www.w3.org/2000/svg">
          <circle cx={circleCx} cy={circleCy} r={circleR} className="shape" id='skills-circle'/>
        </svg>
      </div>
    </div>
  );
}

export default SkillsItem;

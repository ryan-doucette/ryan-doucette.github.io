/* eslint-disable jsx-a11y/anchor-has-content */
import './styles/_header.scss';
import './styles/_hamburgerStyle.scss';
import React, { useCallback, useEffect, useState } from 'react';

const Header = () => {

  const tabCategories: string[] = ['Home', 'About', 'Skills', 'Experience', 'Contact']; 

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currTab, setCurrTab] = useState(tabCategories[0]);
  const [selectorPosition, setSelectorPosition] = useState(0);
  const [selectorTransitionSmooth, setSelectorTransitionSmooth] = useState(true);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const selectorWidth = 36;

  const handleWindowResize = useCallback(event => {
    setWindowSize(window.innerWidth);
  }, []); 

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    if(windowSize > 481) {
      setDropdownOpen(false);
    }

    setSelectorTransitionSmooth(false);
    updateSelectorPosition(currTab.toLowerCase());

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize, currTab, windowSize]);


  const updateSelectorPosition = (id: string) => {
    const pos = document.getElementById(id)?.getBoundingClientRect();
    if(pos) {
      setSelectorPosition(pos?.left + pos?.width / 2 - selectorWidth / 2)
    }
  }

  const updateTab = (selectedTab: string) => {
    setCurrTab(selectedTab);
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  const closeDropdown = () => {
    setDropdownOpen(false);
  }

  return (
    <div className="header">
      <div id="dropDown" className="overlay" style={dropdownOpen ? {height: '100%'} : {height: '0%'}}>
            <div className="overlay-content">
              {tabCategories.map(category => (
                <a href={'#' + category.toLowerCase()} onClick={() => {closeDropdown(); updateTab(category)}}>{category}</a>
              ))}
            </div>
        </div>
      <nav className="burgerMenu" role="navigation">
        <div id="menuToggle">
          <input id="borgor" checked={dropdownOpen} type="checkbox" onClick={() => toggleDropdown()}/>
          <span></span>
          <span></span>
          <span></span>
          <div id="menu"/>
        </div>
      </nav>
      <div id='desktopHeader'>
        { tabCategories.map(category => (
          <>
            <a 
              key={category} 
              className={currTab === category ? 'selected links' : 'links'} 
              id={ category.toLowerCase() } 
              href={ '#' + category.toLowerCase() } 
              onClick={() => {updateTab(category); updateSelectorPosition(category.toLowerCase()); setSelectorTransitionSmooth(true);}}
            >
              { category }
            </a>
            { 
              tabCategories.indexOf(category) === tabCategories.length - 1 ? 
                <></> :
                <div className='spacer'/>    
            }
          </>
        )) }
        <div 
          className='selectionIndicator' 
          style={ selectorTransitionSmooth ? 
            { left: selectorPosition, transitionDuration: '0.35s', transitionTimingFunction: 'ease-in-out' } : 
            { left: selectorPosition, transitionDuration: '0s', transitionTimingFunction: 'linear' }
          } 
        />
      </div>
    </div>
  );
}

export default Header;
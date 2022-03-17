/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './styles/_header.scss';
import './styles/_hamburgerStyle.scss';
import Icon from './Icon';

const Header = () => {

  const tabCategories: string[] = ['Home', 'About', 'Skills', 'Experience', 'Contact']; 

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currTab, setCurrTab] = useState(tabCategories[0]);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleWindowResize = useCallback(event => {
    setWindowSize(window.innerWidth);
  }, []); 

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    if(windowSize > 481) {
      setDropdownOpen(false);
    };

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize, windowSize]);

  useEffect(() => {
    const newTab = document.getElementById('home-container');
    const selector = document.getElementById('selection-indicator')!;
    newTab?.appendChild(selector);
  }, []);

  useEffect(() => {
    updateSelectorPosition(currTab.toLowerCase() + '-container');
  }, [currTab]);

  const updateSelectorPosition = (id: string) => {
    const newParent = document.getElementById(id);
    const selector = document.getElementById('selection-indicator')!;

    selector.classList.add('selectorDown');

    setTimeout(() => {
      newParent?.appendChild(selector);
      selector.classList.add('selectorUp');
    }, 250);

    setTimeout(() => {
      selector.classList.remove('selectorUp');
      selector.classList.remove('selectorDown');
    }, 500);
  };

  const updateTab = (selectedTab: string) => {
    setCurrTab(selectedTab);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const iconClicked = () => {
    setCurrTab('Home');
  };

  return (
    <div className="header">
      <Icon iconPressed={() => iconClicked()}/>
      <section className='linksSection'>
        <nav className="burgerMenu" role="navigation">
          <div id="menuToggle">
            <input checked={dropdownOpen} type="checkbox" onClick={() => toggleDropdown()}/>
            <span></span>
            <span></span>
            <span></span>
            <div id="menu"/>
          </div>
          </nav>
          <div id="dropDown" className="overlay" style={dropdownOpen ? {height: '100%'} : {height: '0%'}}>
              <div className="overlay-content">
                {tabCategories.map(category => (
                  <Link to={category.toLowerCase()} onClick={() => {closeDropdown(); updateTab(category)}}>{category}</Link>
                ))}
              </div>
          </div>
        <div id='desktopHeader'>
          { tabCategories.map(category => (
            <>
              <div id={category.toLowerCase() + '-container'} className='categoryContainer'>
                <Link 
                  key={category} 
                  className={currTab === category ? 'selected links' : 'links'} 
                  id={ category.toLowerCase() } 
                  to={category.toLowerCase()}
                  onClick={() => updateTab(category)}
                >
                  { category }
                </Link>
                
              </div>
              { 
                tabCategories.indexOf(category) === tabCategories.length - 1 ? 
                  <></> :
                  <div className='spacer'/>    
              }
            </>
          )) }
          <div 
            className='selectionIndicator'
            id='selection-indicator' 
          />
        </div>
      </section>
    </div>
  );
}

export default Header;
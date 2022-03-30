/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './styles/_header.scss';
import './styles/_hamburgerStyle.scss';
import Icon from './Icon';
import { CurrentScreenContext } from '../../current-screen-context';
import handleNavigate from '../../screenNavigationHandler'; 

const Header = () => {

  const currentPath = useLocation().pathname;
  const currentTab: string = currentPath === '/' ? 'home' : currentPath.slice(1);
  const tabCategories: string[] = ['home', 'about', 'skills', 'experience', 'contact'];

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currTab, setCurrTab] = useState(currentTab);
  const [initialSelector, setInitialSelector] = useState(false);
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
    if (initialSelector) {
      updateSelectorPosition(currentTab + '-container');
    }
    else {
      const newTab = document.getElementById(currentTab + '-container');
      const selector = document.getElementById('selection-indicator')!;
      newTab?.appendChild(selector);
      setInitialSelector(true);
    }
  }, [currentTab, initialSelector]);

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

  const navigate = useNavigate();

  return (
    <div className="header">
      <Icon />
      <section className='linksSection'>
        <nav className="burgerMenu" role="navigation">
          <div id="menuToggle">
            <input checked={dropdownOpen} type="checkbox" onChange={() => toggleDropdown()} />
            <span></span>
            <span></span>
            <span></span>
            <div id="menu"/>
          </div>
          </nav>
          <div id="dropDown" className="overlay" style={dropdownOpen ? {height: '100%'} : {height: '0%'}}>
              <div className="overlay-content">
                {tabCategories.map(category => (
                  <CurrentScreenContext.Consumer key={category}>
                    {({currentScreen, toggleCurrentScreen}) => (
                      <ul
                        key={category} 
                        onClick={() => {
                          closeDropdown(); 
                          updateTab(category);
                          toggleCurrentScreen(category);
                          handleNavigate(category, currentScreen, navigate);
                        }}>
                          {category}
                      </ul>
                    )}
                  </CurrentScreenContext.Consumer>
                ))}
              </div>
          </div>
        <div id='desktopHeader'>
          { tabCategories.map(category => (
            <Fragment key={category}>
              <div id={category + '-container'} className='categoryContainer'>
                <CurrentScreenContext.Consumer key={category}>
                  {({currentScreen, toggleCurrentScreen}) => (
                    <div
                      className={currTab === category ? 'selected links' : 'links'} 
                      id={ category.toLowerCase() } 
                      onClick={() => {
                        updateTab(category);
                        toggleCurrentScreen(category);
                        handleNavigate(category, currentScreen, navigate);
                      }}
                    >
                      { category.charAt(0).toUpperCase() + category.slice(1) }
                    </div>
                  )}
                </CurrentScreenContext.Consumer>
              </div>
              { 
                tabCategories.indexOf(category) === tabCategories.length - 1 ? 
                  <></> :
                  <div className='spacer'/>    
              }
            </Fragment>
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
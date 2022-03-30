import './styles/_home.scss';
import './transitions/_homeTransitions.scss';
import Greeting from '../home/Greeting';
import Footer from '../home/Footer';
import MenuModal from './menuModal/MenuModal';
import { CurrentScreenContext } from '../../../current-screen-context';
import { useNavigate } from 'react-router-dom';
import handleNavigate from '../../../screenNavigationHandler';
import { useState, useContext, useEffect } from 'react';
import React from 'react';
import './transitions/HomeTransitions';
import { intialHomeEnterTransition, leaveHomeTransition, openMenuTransition, closeMenuTransition, leaveMenuTransition } from './transitions/HomeTransitions';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState<boolean | undefined>(undefined);
  const currentScreen = useContext(CurrentScreenContext);
  const navigate = useNavigate();

  useEffect(() => {
    // If the user is exiting the home or menu screen
    if(currentScreen.currentScreen !== 'home' && currentScreen.currentScreen !== 'menu') {
      if(!menuOpen) {
        leaveHomeTransition();
      }
      else {
        leaveMenuTransition();
      }
    }
    else {
      // If the user is on the home or menu screen
      if(menuOpen === false) {
        closeMenuTransition();
      }
      else if(menuOpen) {
        openMenuTransition();
      }
      // If the user is entering the home screen / page refresh
      else {
        intialHomeEnterTransition();
      }
    }
  }, [currentScreen, menuOpen]);
  
  const openMenu = () => {
    setMenuOpen(true);
  }
  const closeMenu = () => {
    setMenuOpen(false);
  }

  return (
    <div className="home" id='home-id'>
      <div className='greetingContainer' id='home-greeting'>
        <Greeting/>
      </div>
      <div className='footerContainer' id='home-footer'>
        <CurrentScreenContext.Consumer>
          {({toggleCurrentScreen}) => (
            <Footer 
              menuButtonPressed={() => {
                openMenu(); 
                toggleCurrentScreen('menu');
                handleNavigate('menu', 'home', navigate);
              }}
            />
          )}
        </CurrentScreenContext.Consumer>  
      </div>  
      <div className='menuModalContainer' id='home-menu-modal'>
      <CurrentScreenContext.Consumer>
          {({toggleCurrentScreen}) => (
            <MenuModal 
              menuIsRevealed={menuOpen} 
              closeButtonPressed={() => {
                closeMenu(); 
                toggleCurrentScreen('home');
                handleNavigate('home', 'menu', navigate);
              }}
            />
          )}
        </CurrentScreenContext.Consumer>  
      </div>  
    </div>
  );
}

export default Home;

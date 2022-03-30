import './styles/_home.scss';
import Greeting from '../home/Greeting';
import Footer from '../home/Footer';
import MenuModal from './menuModal/MenuModal';
import { CurrentScreenContext } from '../../../current-screen-context';
import { useNavigate } from 'react-router-dom';
import handleNavigate from '../../../screenNavigationHandler';
import { useState, useContext, useEffect } from 'react';
import React from 'react';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState<boolean | undefined>(undefined);
  const currentScreen = useContext(CurrentScreenContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (currentScreen.currentScreen === 'Home') {
      console.log('entering: ' + currentScreen.currentScreen);
      animateEnter();
    }
    else if (currentScreen.currentScreen === 'Menu') {
      console.log('entering: ' + currentScreen.currentScreen);
    }
    else {
      console.log('leaving home to: ' + currentScreen.currentScreen);
      const greeting = document.getElementById('home-greeting');
      const footer = document.getElementById('home-footer');
      if(!menuOpen) {
        greeting?.classList.add('hide-greeting');
        footer?.classList.add('hide-footer');
      }
      else {
        const previewCarouselElement = document.getElementById('previewCarousel');
        const menuCloseButtonElement = document.getElementById('menuCloseButton');
        const menuModal = document.getElementById('home-menu-modal');

        menuModal?.classList.add('menu-closed');
        previewCarouselElement?.classList.add('hidePreview');
        menuCloseButtonElement?.classList.add('hideCloseButton');
        menuModal?.classList.remove('menu-open');
        previewCarouselElement?.classList.remove('showPreview');
        menuCloseButtonElement?.classList.remove('showCloseButton');
      }
    }
  }, [currentScreen, menuOpen]);

  useEffect(() => {
      const greeting = document.getElementById('home-greeting');
      const footer = document.getElementById('home-footer');
      const menuModal = document.getElementById('home-menu-modal');

      if(menuOpen === false) {
        greeting?.classList.add('show-greeting');
        footer?.classList.add('show-footer');
        menuModal?.classList.add('menu-closed');
        greeting?.classList.remove('show-greeting-initial');
        footer?.classList.remove('show-footer-initial');
        greeting?.classList.remove('hide-greeting');
        footer?.classList.remove('hide-footer');
        menuModal?.classList.remove('menu-open');
      }
      else if(menuOpen) {
        greeting?.classList.add('hide-greeting');
        footer?.classList.add('hide-footer');
        menuModal?.classList.add('menu-open');
        greeting?.classList.remove('show-greeting');
        footer?.classList.remove('show-footer');
        menuModal?.classList.remove('menu-closed');
      }
      else {
        greeting?.classList.add('show-greeting-initial');
        footer?.classList.add('show-footer-initial');
        greeting?.classList.remove('show-greeting');
        footer?.classList.remove('show-footer');
        menuModal?.classList.remove('menu-closed');
      }
  },[menuOpen])
  
  const openMenu = () => {
    setMenuOpen(true);
  }
  const closeMenu = () => {
    setMenuOpen(false);
  }

  const animateEnter = () => {
    const greeting = document.getElementById('home-greeting');
    const footer = document.getElementById('home-footer');
    greeting?.classList.add('show-greeting');
    footer?.classList.add('show-footer');
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
                toggleCurrentScreen('Menu');
                handleNavigate('Menu', 'Home', navigate);
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
                toggleCurrentScreen('Home');
                handleNavigate('Home', 'Menu', navigate);
              }}
            />
          )}
        </CurrentScreenContext.Consumer>  
      </div>  
    </div>
  );
}

export default Home;

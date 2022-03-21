import './_main.scss';
import Greeting from '../src/components/Greeting';
import Footer from './components/Footer';
import MenuModal from './components/MenuModal';
import Background from './components/Background';
import { useCallback, useEffect, useState } from 'react';
import React from 'react';

const Main = () => {

  const [menuOpen, setMenuOpen] = useState<boolean | undefined>(undefined);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleWindowResize = useCallback(event => {
    setWindowHeight(window.innerHeight);
  }, []); 

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);
  
  const openMenu = () => {
    setMenuOpen(true);
  }
  const closeMenu = () => {
    setMenuOpen(false);
  }

  return (
    <div className="main screen" style={{ height: windowHeight }}>
      <Background/>
      <div className='greetingContainer' id= {menuOpen === undefined ? undefined : menuOpen ? 'hide-greeting' : 'show-greeting'}>
        <Greeting/>
      </div>
      <div className='footerContainer' id={menuOpen === undefined ? undefined : menuOpen ? 'hide-footer' : 'show-footer'}>
        <Footer menuButtonPressed={openMenu}/>     
      </div>  
      <div className='menuModalContainer screen' id= {menuOpen === undefined ? undefined : menuOpen ? 'menu-open' : 'menu-closed'}>
        <MenuModal menuIsRevealed={menuOpen} closeButtonPressed={closeMenu}/>
      </div>  
    </div>
  );
}

export default Main;

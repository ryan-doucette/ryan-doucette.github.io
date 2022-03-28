import './styles/_home.scss';
import Greeting from '../home/Greeting';
import Footer from '../home/Footer';
import MenuModal from './menuModal/MenuModal';
import Background from './Background';
import { useState } from 'react';
import React from 'react';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState<boolean | undefined>(undefined);
  
  const openMenu = () => {
    setMenuOpen(true);
  }
  const closeMenu = () => {
    setMenuOpen(false);
  }

  return (
    <div className="home">
      <Background/>
      <div className='greetingContainer' id= {menuOpen === undefined ? undefined : menuOpen ? 'hide-greeting' : 'show-greeting'}>
        <Greeting/>
      </div>
      <div className='footerContainer' id={menuOpen === undefined ? undefined : menuOpen ? 'hide-footer' : 'show-footer'}>
        <Footer menuButtonPressed={openMenu}/>     
      </div>  
      <div className='menuModalContainer' id= {menuOpen === undefined ? undefined : menuOpen ? 'menu-open' : 'menu-closed'}>
        <MenuModal menuIsRevealed={menuOpen} closeButtonPressed={closeMenu}/>
      </div>  
    </div>
  );
}

export default Home;

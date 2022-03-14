import './_main.scss';
import Greeting from '../src/components/Greeting';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuModal from './components/MenuModal';
// import Background from './components/Background';
import { useState } from 'react';
import React from 'react';

const Main = () => {

  const [menuOpen, setMenuOpen] = useState<boolean | undefined>(undefined);
  const openMenu = () => {
    setMenuOpen(true);
    console.log(menuOpen);
  }
  const closeMenu = () => {
    setMenuOpen(false);
    console.log(menuOpen);
  }

  return (
    <div className="Main">
      {/* <Background/> */}
      <div className='left' id= {menuOpen === undefined ? undefined : menuOpen ? 'left-open' : 'left-closed'}/>
      <div className='right' id= {menuOpen === undefined ? undefined : menuOpen ? 'right-open' : 'right-closed'}/>
      <div className='headerContainer'>
        <Header/>
      </div>
      <div className='greetingContainer' id= {menuOpen === undefined ? undefined : menuOpen ? 'hide-greeting' : 'show-greeting'}>
        <Greeting/>
      </div>
      <div className='footerContainer' id={menuOpen === undefined ? undefined : menuOpen ? 'hide-footer' : 'show-footer'}>
        <Footer menuButtonPressed={openMenu}/>     
      </div>  
      <div className='menuModalContainer'>
        <MenuModal menuIsRevealed={menuOpen} closeButtonPressed={closeMenu}/>
      </div>  
    </div>
  );
}

export default Main;

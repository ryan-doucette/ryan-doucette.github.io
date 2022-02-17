import './Main.css';
import Greeting from '../src/components/Greeting';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuModal from './components/MenuModal';
import { useState } from 'react';

const Main = () => {
  const [menuOpen, setMenuOpen] = useState(null);
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
      <div className='left' id= {menuOpen === null ? null : menuOpen ? 'left-open' : 'left-closed'}/>
      <div className='right' id= {menuOpen === null ? null : menuOpen ? 'right-open' : 'right-closed'}/>
      <div className='headerContainer'>
        <Header/>
      </div>
      <div className='greetingContainer' id= {menuOpen === null ? null : menuOpen ? 'hide-greeting' : 'show-greeting'}>
        <Greeting/>
      </div>
      <div className='footerContainer' id={menuOpen === null ? null : menuOpen ? 'hide-footer' : 'show-footer'}>
        <Footer menuButtonPressed={openMenu}/>     
      </div>  
      <div className='menuModalContainer'>
        <MenuModal menuIsRevealed={menuOpen} closeButtonPressed={closeMenu}/>
      </div>  
    </div>
  );
}

export default Main;

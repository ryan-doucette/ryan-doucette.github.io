/* eslint-disable jsx-a11y/anchor-has-content */
import './styles/_header.scss';
import React from 'react';

const Header = () => {
  // const [currTab, setCurrTab] = useState(tabs[0]);
  return (
    <div className="header">
      <div id='desktopHeader'>
        <a className='links' href='#home'>Home</a> <div className='spacer'/>
        <a className='links' href='#about'>About</a> <div className='spacer'/>
        <a className='links' href='#skills'>Skills</a> <div className='spacer'/>
        <a className='links' href='#experience'>Experience</a> <div className='spacer'/>
        <a className='links' href='#contact'>Contact</a>
      </div>
    </div>
  );
}

export default Header;

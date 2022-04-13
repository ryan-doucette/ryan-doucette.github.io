import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/_icon.scss';
import { CurrentScreenContext } from '../../current-screen-context';
import handleNavigate from '../../screenNavigationHandler';
import websiteIcon from './images/new-website-icon.png';

const Icon = () => {
    const navigate = useNavigate();
  
    return (
        <CurrentScreenContext.Consumer>
            {({currentScreen, toggleCurrentScreen}) => (
                <div 
                    className="iconContainer"
                    id='site-icon'
                    onClick={() => {
                        if(currentScreen === 'menu') {
                            return;
                        }
                        else {
                            handleNavigate('home', currentScreen, navigate);
                            toggleCurrentScreen('home');
                        }
                    }}
                >
                    {/* <div className='topTriangle'/>
                    <div className='bottomTriangle'/>
                    <div className='lightningBoltContainer'>
                        <div className='topLightningBolt'/>
                        <div className='bottomLightningBolt'/>
                    </div> */}
                    <img className='websiteIcon' src={websiteIcon} alt='icon'/>
                </div>
            )}
        </CurrentScreenContext.Consumer>
    );
}

export default Icon
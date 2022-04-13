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
                        console.log(currentScreen);
                        if(currentScreen === 'home' || currentScreen === 'menu') {
                            return;
                        }
                        else {
                            handleNavigate('home', currentScreen, navigate);
                            toggleCurrentScreen('home');
                        }
                    }}
                >
                    <img
                        className='websiteIcon' 
                        id='website-icon'
                        src={websiteIcon} 
                        alt='icon'
                    />
                </div>
            )}
        </CurrentScreenContext.Consumer>
    );
}

export default Icon
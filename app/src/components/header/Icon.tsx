import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/_icon.scss';
import { CurrentScreenContext } from '../../current-screen-context';
import handleNavigate from '../../screenNavigationHandler';

const Icon = () => {
    const navigate = useNavigate();
  
    return (
        <CurrentScreenContext.Consumer>
            {({currentScreen, toggleCurrentScreen}) => (
                <div 
                    className="iconContainer" 
                    onClick={() => {
                        handleNavigate('home', currentScreen, navigate);
                        toggleCurrentScreen('home');
                    }}
                >
                    <div className='topTriangle'/>
                    <div className='bottomTriangle'/>
                    <div className='lightningBoltContainer'>
                        <div className='topLightningBolt'/>
                        <div className='bottomLightningBolt'/>
                    </div>
                </div>
            )}
        </CurrentScreenContext.Consumer>
    );
}

export default Icon
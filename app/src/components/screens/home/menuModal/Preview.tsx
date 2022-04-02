import React from 'react';
import { useNavigate } from 'react-router-dom';
import {previewItem} from 'customTypes';
import './styles/_preview.scss';
import { CurrentScreenContext } from '../../../../current-screen-context';
import handleNavigate from '../../../../screenNavigationHandler';

const Preview = ({currentItem} : {currentItem:previewItem}) => {
    const navigate = useNavigate();

    return (
        <div className="preview">
            <div className='previewImage' id='preview-image' style={{ backgroundImage:`url(${currentItem.image})` }}/>
            <div className='description' id='description'>{currentItem.description}</div>
            {
                currentItem.identifier === 'ruumzy' ? 
                    <a href='https://ruumzy.com/' className='tellMeMore' id='more-button'>check it out</a>
                    :
                    <CurrentScreenContext.Consumer>
                        {({currentScreen, toggleCurrentScreen}) => (
                            <div 
                                onClick={() => {
                                    toggleCurrentScreen(currentItem.link);
                                    handleNavigate(currentItem.link, currentScreen, navigate);
                                }} 
                                className='tellMeMore' 
                                id='more-button'
                            >
                                {currentItem.identifier === 'contact' ? 'contact' : 'tell me more'}
                            </div>
                        )}
                    </CurrentScreenContext.Consumer>
            }
        </div>
    );
}

export default Preview;

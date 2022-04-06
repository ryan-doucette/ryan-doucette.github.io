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
            <img className='previewImage' id='preview-image' alt={currentItem.identifier + ' image'} src={currentItem.image}/>
            <div className='description' id='description'>{currentItem.description}</div>
            {
                currentItem.identifier === 'ruumzy' ? 
                    <a 
                        href='https://ruumzy.com/'
                        className='tellMeMore' 
                        id='more-button'
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                            CHECK IT OUT
                    </a>
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
                                {currentItem.identifier === 'contact' ? 'CONTACT' : 'TELL ME MORE'}
                            </div>
                        )}
                    </CurrentScreenContext.Consumer>
            }
        </div>
    );
}

export default Preview;

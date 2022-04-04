// eslint-disable-next-line
import React, {MouseEventHandler} from 'react';
import { experienceItem } from 'customTypes';
import './_experienceFull.scss';
import CloseButton from '../../home/menuModal/CloseButton';

const ExperienceFull = ({closeButtonPressed, currentItem} : {currentItem:experienceItem | undefined, closeButtonPressed: MouseEventHandler}) => {
    return (
        <div className='experienceFullContainer'>
            <div className='experienceCloseButtonContainer' onClick={closeButtonPressed}>
                <CloseButton/>
            </div>
            <div className='experienceFullImageContainer'>
                <img className='experienceFullImage' src={currentItem?.image} alt={currentItem?.title + ' image'}/>
            </div>
            <section className='experienceFullText'>
                <div className='experienceFullTitle'>{currentItem?.title}</div>
                <div className='experienceFullDescription'>{currentItem?.description}</div>
            </section>
        </div>
    );
}

export default ExperienceFull;

import CloseButton from './CloseButton';
import React, { MouseEventHandler } from 'react';
import './styles/_menuModal.scss';
import PreviewCarousel from './PreviewCarousel';

const MenuModal = ({menuIsRevealed, closeButtonPressed} : {menuIsRevealed: boolean | undefined, closeButtonPressed: MouseEventHandler}) => {
    return (
        <div className="menuModal">
            <section className='previewsContainer'>
                <PreviewCarousel menuRevealed={menuIsRevealed}/>
            </section>
            <div 
                className='closeButtonContainer' 
                id= {menuIsRevealed ? 'showCloseButton' : 'hideCloseButton'} 
                onClick={closeButtonPressed}
            >
                <CloseButton/>
            </div>
        </div>
    );
}

export default MenuModal;

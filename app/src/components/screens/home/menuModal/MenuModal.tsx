import CloseButton from './CloseButton';
import React, { MouseEventHandler } from 'react';
import './styles/_menuModal.scss';
import PreviewCarousel from './PreviewCarousel';

const MenuModal = ({menuIsRevealed, closeButtonPressed} : {menuIsRevealed: boolean | undefined, closeButtonPressed: MouseEventHandler}) => {
    return (
        <div className="menuModal">
            <section className='previewsContainer' id='previewCarousel'>
                <PreviewCarousel menuRevealed={menuIsRevealed}/>
            </section>
            <div className='closeButtonContainer' onClick={closeButtonPressed} id='menuCloseButton' >
                <CloseButton/>
            </div>
        </div>
    );
}

export default MenuModal;

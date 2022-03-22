import CloseButton from './CloseButton';
import React, { MouseEventHandler } from 'react';
import './styles/_menuModal.scss';
import PreviewCarousel from './PreviewCarousel';

const MenuModal = ({menuIsRevealed, closeButtonPressed} : {menuIsRevealed: boolean | undefined, closeButtonPressed: MouseEventHandler}) => {
    return (
        <div className="menuModal">
            <section className='previewsContainer' id= {menuIsRevealed ? 'showPreview' : 'hidePreview'}>
                <PreviewCarousel menuRevealed={menuIsRevealed}/>
            </section>
            <div className='closeButtonContainer' onClick={closeButtonPressed} id= {menuIsRevealed ? 'showCloseButton' : 'hideCloseButton'}>
                <CloseButton/>
            </div>
        </div>
    );
}

export default MenuModal;

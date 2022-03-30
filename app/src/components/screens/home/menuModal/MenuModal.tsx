import CloseButton from './CloseButton';
import React, { MouseEventHandler, useEffect } from 'react';
import './styles/_menuModal.scss';
import PreviewCarousel from './PreviewCarousel';

const MenuModal = ({menuIsRevealed, closeButtonPressed} : {menuIsRevealed: boolean | undefined, closeButtonPressed: MouseEventHandler}) => {

    useEffect(() => {
        const previewCarouselElement = document.getElementById('previewCarousel');
        const menuCloseButtonElement = document.getElementById('menuCloseButton');

        if(menuIsRevealed) {
            previewCarouselElement?.classList.add('showPreview');
            menuCloseButtonElement?.classList.add('showCloseButton');
            previewCarouselElement?.classList.remove('hidePreview');
            menuCloseButtonElement?.classList.remove('hideCloseButton');
            return;
        }
        else {
            previewCarouselElement?.classList.add('hidePreview');
            menuCloseButtonElement?.classList.add('hideCloseButton');
            previewCarouselElement?.classList.remove('showPreview');
            menuCloseButtonElement?.classList.remove('showCloseButton');
            return;
        }
    }, [menuIsRevealed]);

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

import CloseButton from './CloseButton';
import React, { MouseEventHandler } from 'react';
import './styles/_menuModal.scss';
import '../transitions/_menuModalTransitions.scss';
import PreviewCarousel from './PreviewCarousel';

const MenuModal = ({menuIsRevealed, closeButtonPressed} : {menuIsRevealed: boolean | undefined, closeButtonPressed: MouseEventHandler}) => {
    return (
        <div className="menuModal menuBackground">
            <section className='previewsContainer' id='previewCarousel'>
                <PreviewCarousel menuRevealed={menuIsRevealed}/>
            </section>
            <div className='closeButtonContainer' onClick={closeButtonPressed} id='menuCloseButton' >
                <CloseButton
                    backgroundColor={'white'}
                    xColor={'#252a37'}
                    changeColorOnHover={true}
                    hoverBackgroundColor={'#50596d'}
                    hoverXColor={'white'}
                />
            </div>
        </div>
    );
}

export default MenuModal;

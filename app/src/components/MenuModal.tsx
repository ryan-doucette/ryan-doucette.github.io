import CloseButton from './CloseButton';
import React, { MouseEventHandler } from 'react';

import './styles/_menuModal.scss';

const MenuModal = ({menuIsRevealed, closeButtonPressed} : {menuIsRevealed: boolean | undefined, closeButtonPressed: MouseEventHandler}) => {

    return (
        <div className="menuModal">
            <h1>Menu Modal</h1>
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
